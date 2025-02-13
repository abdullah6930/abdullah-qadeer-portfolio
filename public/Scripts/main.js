document.addEventListener('DOMContentLoaded', async () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_MODE = "themeMode";
    const DARK_THEME_CLASS = 'dark-theme';
    const LIGHT_THEME_CLASS = 'light-theme';
    currentTheme = 0;

    const response = await fetch(`Data/Data.json?v=9`);
    const data = await response.json();

    function setFavicon() {
        var faviconPath = data.favicon;
        var faviconElement = document.getElementById('favicon');
        if (faviconElement)
            faviconElement.href = faviconPath;
        else {
            // If the favicon element does not exist, create it
            faviconElement = document.createElement('link');
            faviconElement.id = 'favicon';
            faviconElement.rel = 'icon';
            faviconElement.href = faviconPath;
            document.head.appendChild(faviconElement);
        }
    }
    
    setFavicon();

    const updateThemeButtonTextAndIcon = (newTheme) => {
        const iconClass = newTheme === DARK_THEME_CLASS ? 'fa-moon' : 'fa-sun';
        themeToggle.innerHTML = (newTheme === DARK_THEME_CLASS ? 'Dark Mode' : 'Light Mode') + ` <i class="fa-solid ${iconClass}" id="theme-icon"></i>`;
    };

    const updateThemeButtonIconOnly = (newTheme) => {
        const iconClass = newTheme === DARK_THEME_CLASS ? 'fa-moon' : 'fa-sun';
        themeToggle.innerHTML = (newTheme === DARK_THEME_CLASS ? 'Dark Mode' : 'Light Mode') + ` <i class="fa-solid ${iconClass}" id="theme-icon"></i>`;
    };

    // Add event listener for theme toggle button click
    themeToggle.addEventListener('click', () => {
        const currentThemeClass = document.body.classList.contains(DARK_THEME_CLASS) ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
        const newThemeClass = currentThemeClass === DARK_THEME_CLASS ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;

        document.body.classList.remove(currentThemeClass);
        document.body.classList.add(newThemeClass);

        updateThemeButtonTextAndIcon(newThemeClass);
        currentTheme = newThemeClass == DARK_THEME_CLASS ? 1 : 0;
        localStorage.setItem(THEME_MODE, currentTheme);
    });

    themeToggle.addEventListener('mouseenter', () => {
        var newThemeClass = currentTheme == 0 ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
        updateThemeButtonIconOnly(newThemeClass);
    });

    themeToggle.addEventListener('mouseleave', () => {
        var newThemeClass = currentTheme == 0 ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;
        updateThemeButtonIconOnly(newThemeClass);
    });

    const setTheme = () => {
        var newTheme = currentTheme == 0 ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;
        body.classList.toggle(newTheme);
        updateThemeButtonTextAndIcon(newTheme);
    };

    currentTheme = localStorage.getItem(THEME_MODE);
    setTheme();

    // Animate skill bars
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        skill.style.setProperty('--width', `${percentage}%`);
    });

    const greetings = data.greetings;

    let currentIndex = 0;
    let intervalId;

    function changeGreeting() {
        const helloElement = document.getElementById('hello');
        helloElement.style.opacity = 0; // Start fade out
        setTimeout(() => {
            helloElement.innerText = greetings[currentIndex].text;
            helloElement.style.opacity = 1; // Fade in with new text
            currentIndex = (currentIndex + 1) % greetings.length;
        }, 500); // Wait for half the transition time before changing text
    }

    function startInterval() {
        intervalId = setInterval(changeGreeting, 2000); // Change text every 2 seconds to account for fading
    }

    // Start the interval when the page loads
    startInterval();

    function previewVideoOrImage(projectPreviewImage, projectPreviewVideo, project) {
        projectPreviewImage.src = project.image;
        var hasVideo = "videoURL" in project;
        if(hasVideo)
        {
            projectPreviewImage.style.display = "none";
            projectPreviewImage.style.opacity = 0;

            projectPreviewVideo.src = project.videoURL;
            projectPreviewVideo.style.display = "block";
            projectPreviewVideo.style.opacity = 1;
        }
        else {
            projectPreviewImage.style.display = "block";
            projectPreviewImage.style.opacity = 1;
            
            projectPreviewVideo.style.display = "none";
            projectPreviewVideo.style.opacity = 0;
        }
    }

    // Function to load projects
    const loadProjects = async () => {
        data.sections.forEach(section => {
            var sectionElement = document.createElement('section');
            sectionElement.id = 'projects-section';

            // Load description from the HTML file
            fetch(section.sectionDescriptionHTML)
                .then(response => response.text())
                .then(html => {
                    var sectionDescription = document.createElement('div');
                    sectionDescription.innerHTML = html;
                    sectionElement.appendChild(sectionDescription);

                    LoadSectionData(section, sectionElement);
                })
                .catch(() => {
                    LoadSectionData(section, sectionElement);
                });
        });
    };

    var lastOpenedProjectButton = null;
    var lastOpenedProjectButtonText = '';

    function toggleProjectDescription(event, project, projectPreviewImage, projectPreviewVideo) {

        previewVideoOrImage(projectPreviewImage, projectPreviewVideo, project);

        const button = event.target;
        const existingDescriptionContainer = document.querySelector('.description-container');

        if (button.classList.contains('close-button')) {
            // Close the description
            button.classList.remove('close-button');
            button.textContent = lastOpenedProjectButtonText;

            if (existingDescriptionContainer) {
                $(existingDescriptionContainer).slideUp(function () {
                    existingDescriptionContainer.remove();
                });
            }
        } else {
            // Open the description
            if (lastOpenedProjectButton) {
                lastOpenedProjectButton.textContent = lastOpenedProjectButtonText;
                lastOpenedProjectButton.classList.remove('close-button');
            }

            lastOpenedProjectButton = button;
            lastOpenedProjectButtonText = button.textContent;
            button.textContent = 'Close';
            button.classList.add('close-button');

            // Create a new description container
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description-container');
            descriptionContainer.style.display = 'none';

            // Load description from the HTML file
            fetch(project.descriptionHTML)
                .then(response => response.text())
                .then(html => {
                    descriptionContainer.innerHTML = html;

                    // Remove existing description container if present
                    if (existingDescriptionContainer) {
                        $(existingDescriptionContainer).slideUp(function () {
                            existingDescriptionContainer.remove();
                            // Insert the description container after the clicked button
                            button.insertAdjacentElement('afterend', descriptionContainer);
                            $(descriptionContainer).slideDown();
                        });
                    } else {
                        button.insertAdjacentElement('afterend', descriptionContainer);
                        $(descriptionContainer).slideDown();
                    }
                })
                .catch(error => {
                    console.error('Error fetching description:', error);
                });
        }
    }

    function LoadSectionData(section, sectionElement) {
        var projectsContainer = document.createElement('div');
        projectsContainer.id = 'projects-container';
    
        var projectsList = document.createElement('div');
        projectsList.id = 'projects';
    
        var projectPreview = document.createElement('div');
        projectPreview.id = 'project-preview';
    
        var projectPreviewImage = document.createElement('img');
        projectPreviewImage.id = 'project-preview-image';
        projectPreview.appendChild(projectPreviewImage);
    
        var projectPreviewVideo = document.createElement('iframe');
        projectPreviewVideo.id = 'project-preview-video';
        projectPreviewVideo.title = 'YouTube video player';
        projectPreviewVideo.allow = 'autoplay; encrypted-media;';
        projectPreviewVideo.setAttribute('allowfullscreen', '');
        projectPreview.appendChild(projectPreviewVideo);
    
        var ul = document.createElement('ul');
    
        section.projects.forEach(project => {
            var button = document.createElement('button');
            button.textContent = project.name;
            button.classList.add('project-button');
    
            button.addEventListener('click', (e) => {
                toggleProjectDescription(e, project, projectPreviewImage, projectPreviewVideo);
            });
    
            const li = document.createElement('li');
            li.appendChild(button);
            ul.appendChild(li);
        });
    
        projectsList.appendChild(ul);
        projectsContainer.appendChild(projectsList);
        projectsContainer.appendChild(projectPreview);
        sectionElement.appendChild(projectsContainer);
        var skillsElement = document.getElementById('skills');
        skillsElement.parentNode.insertBefore(sectionElement, skillsElement);
        projectPreview.style.height = projectPreview.offsetWidth + "px";
    }

    function loadSkills() {
        const skillBarContainer = document.getElementById('skill-bar');

        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill';
            skillDiv.setAttribute('data-skill', skill.skill);
            skillDiv.setAttribute('data-percentage', skill.percentage);

            const skillName = document.createElement('div');
            skillName.className = 'skill-name';
            skillName.innerText = skill.skill;

            const skillPercentage = document.createElement('div');
            skillPercentage.className = 'skill-percentage';
            skillPercentage.style.width = `${skill.percentage}%`;

            skillDiv.appendChild(skillName);
            skillDiv.appendChild(skillPercentage);

            skillBarContainer.appendChild(skillDiv);
        });
    }

    function downLoadCV() {
        document.getElementById('downloadCV').addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = data.CV.cvPath;
            link.download = data.CV.downloadFileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    function openSourceCode() {
        document.getElementById('sourceCode').addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = data.sourceCode;
            link.target = '_blank';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    loadProjects();
    loadSkills();
    downLoadCV();
    openSourceCode();

    // mobile navigation menu
    if (window.matchMedia("(max-width: 858px)").matches) {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');
        navToggle.addEventListener('click', function (event) {
            // Prevent the click from immediately closing the menu
            event.stopPropagation();
            nav.classList.toggle('show');
        });

        document.addEventListener('click', function (event) {
            // Check if the click is outside of the nav and the navToggle
            if (!nav.contains(event.target) && event.target !== navToggle) {
                nav.classList.remove('show');
            }
        });
    }
});