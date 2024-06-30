document.addEventListener('DOMContentLoaded', async () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_MODE = "themeMode";
    const DARK_THEME_CLASS = 'dark-theme';
    const LIGHT_THEME_CLASS = 'light-theme';
    currentTheme = 0;

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    const response = await fetch(`Data/Data.json`);
    const data = await response.json();

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    const updateButtonText = (newTheme) => {
        themeToggle.textContent = newTheme == DARK_THEME_CLASS ? 'Dark Mode' : 'Light Mode';
    };

    // Function to update icon colors based on theme mode
    const updateIconColors = (newTheme) => {
        const isDarkMode = newTheme == DARK_THEME_CLASS;
        const iconColor = isDarkMode ? '' : '#4a90e2';
        const contactLinks = document.querySelectorAll('.contact-link i');
        contactLinks.forEach(link => {
            link.style.color = iconColor;
        });
    };

    // Add event listener for theme toggle button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle(DARK_THEME_CLASS);
        var newTheme = body.classList.contains(DARK_THEME_CLASS) ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
        updateButtonText(newTheme);
        updateIconColors(newTheme); // Update icon colors when theme mode changes
        currentTheme = newTheme == DARK_THEME_CLASS ? 1 : 0;
        localStorage.setItem(THEME_MODE, currentTheme);
    });

    const setTheme = () => {
        var newTheme = currentTheme == 0 ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;
        body.classList.toggle(newTheme);
        updateButtonText(newTheme);
        updateIconColors(newTheme); // Update icon colors when theme mode changes
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
        var hasVideo = "youtubeURL" in project;
        if(hasVideo)
            projectPreviewVideo.src = project.youtubeURL;

        projectPreviewImage.style.display = hasVideo ? "none" : "block";
        projectPreviewImage.style.opacity = hasVideo ? 0 : 1;
        projectPreviewVideo.style.display = hasVideo ? "block" : "none";
        projectPreviewVideo.style.opacity = hasVideo ? 1 : 0;
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

    loadProjects();
    var lastOpenedProjectButton = null;
    var lastOpenedProjectButtonText = '';

    function toggleProjectDescription(event, project, projectsContainer, projectPreviewImage, projectPreviewVideo) {

        previewVideoOrImage(projectPreviewImage, projectPreviewVideo, project);

        const button = event.target;
        const existingDescriptionContainer = projectsContainer.querySelector('.description-container');

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
                toggleProjectDescription(e, project, projectsContainer, projectPreviewImage, projectPreviewVideo);
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
});