// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_MODE = "themeMode";
    const DARK_THEME_CLASS = 'dark-theme';
    const LIGHT_THEME_CLASS = 'light-theme';
    currentTheme = 0;

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

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

    const greetings = [
        { language: "English", text: "Hello" },
        { language: "Urdu", text: "ہیلو" },
        { language: "Arabic", text: "مرحبا" },
        { language: "German", text: "Hallo" },
        { language: "Spanish", text: "Hola" },
        { language: "French", text: "Bonjour" },
        { language: "Hindi", text: "नमस्ते" },
        { language: "Chinese", text: "你好" },
        { language: "Korean", text: "안녕하세요" }
    ];

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

    // projects
    const loadProjects = async () => {
        try {
            // Fetch JSON data
            const response = await fetch('Data/projects.json');
            const projects = await response.json();

            // Get the projects section
            const projectsSection = document.getElementById('projects');
            const projectPreviewImage = document.getElementById('project-preview-image');
            const projectPreviewVideo = document.getElementById('project-preview-video');
            var ul = document.createElement("ul");

            // Loop through each project and create HTML elements
            projects.forEach((project, index) => {

                // Create project button
                const button = document.createElement('button');
                button.textContent = project.name;
                button.classList.add('project-button');

                // Add mouseenter event
                button.addEventListener('mouseenter', () => {
                    previewVideoOrImage(projectPreviewImage, projectPreviewVideo, project);
                });

                button.addEventListener('click', () => {
                    previewVideoOrImage(projectPreviewImage, projectPreviewVideo, project);
                });

                var li = document.createElement("li"); // Create a new <li> element
                li.appendChild(button);
                ul.appendChild(li);
            });
            // projectsSection.appendChild(ul);
            projectsSection.insertBefore(ul, projectsSection.firstChild);

            document.getElementById("project-preview").style.height = projectsSection.offsetHeight + "px";

        } catch (error) {
            console.error('Error loading projects:', error);
        }
    };

    // Call the loadProjects function when the DOM content is loaded
    loadProjects();

    document.getElementById('close-button').addEventListener('click', function() {
        document.getElementById('maintenance-section').style.display = 'none';
    });
    

});
