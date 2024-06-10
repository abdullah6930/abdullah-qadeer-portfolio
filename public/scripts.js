// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const updateButtonText = () => {
        themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    };

    // Function to update icon colors based on theme mode
    const updateIconColors = () => {
        const isDarkMode = body.classList.contains('dark-theme');
        const iconColor = isDarkMode ? '' : '#4a90e2';
        const contactLinks = document.querySelectorAll('.contact-link i');
        contactLinks.forEach(link => {
            link.style.color = iconColor;
        });
    };

     // Add event listener for theme toggle button click
     themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        updateButtonText();
        updateIconColors(); // Update icon colors when theme mode changes
    });

    // Initial button text setup
    updateButtonText();

    // Call the function to update icon colors initially
    updateIconColors();

    // Create background animation elements
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'background-animation';
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(bubble);
    }

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

    function stopInterval() {
        clearInterval(intervalId);
    }

    document.getElementById('hello').addEventListener('mouseover', stopInterval);
    document.getElementById('hello').addEventListener('mouseout', startInterval);

    // Start the interval when the page loads
    startInterval();

    // Remove background animations from footer
    const footer = document.querySelector('footer');
    // const footerAnimations = footer.querySelectorAll('.background-animation');
    // footerAnimations.forEach(anim => anim.remove());
   
});
