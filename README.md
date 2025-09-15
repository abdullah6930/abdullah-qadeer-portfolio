# Abdullah Qadeer - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills as a Software Engineer specializing in Unity, .NET Core, VR/AR, and AI technologies.

🌐 **Live Demo**: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme and glass morphism effects
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Dynamic typing animation, scroll-triggered animations, modal popups
- **Project Showcase**: Categorized projects with image galleries and video integration
- **Functional Contact Form**: Real email sending with EmailJS integration
- **Analytics Integration**: Firebase Analytics for tracking page views and user interactions
- **SEO Optimized**: Complete SEO implementation with sitemap, robots.txt, and structured data
- **PWA Ready**: Progressive Web App with manifest for app-like experience

## 🛠️ Technologies Used

- **React.js** - UI library with hooks and components
- **Framer Motion** - Animation library for smooth transitions
- **EmailJS** - Client-side email sending service
- **Firebase Analytics** - User behavior tracking and analytics
- **CSS3** - Custom styling with glass morphism effects
- **Firebase Hosting** - Production deployment with CDN
- **SEO Tools** - XML sitemap, robots.txt, structured data

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullah6930/abdullah-qadeer-portfolio.git
   cd abdullah-qadeer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (for contact form)**
   - Create account at [EmailJS.com](https://www.emailjs.com/)
   - Create `.env` file with your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Set up Firebase Analytics (optional)**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Google Analytics in your Firebase project
   - Add your Firebase config to `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

5. **Start development server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section with typing animation
│   ├── Experience.js   # Experience timeline
│   ├── Projects.js     # Projects with categories & modals
│   ├── Skills.js       # Skills section
│   ├── Contact.js      # Contact form with EmailJS
│   └── Footer.js       # Footer component
├── config/             # Configuration files
│   └── firebase.js     # Firebase configuration
├── firebase.js         # Firebase initialization & analytics
├── App.js              # Main App component
└── index.js            # Entry point
```

## 🎯 Featured Projects

### Gemini AI Trader
- **Category**: Enterprise Systems
- **Description**: Intelligent Stock and Crypto Analysis Platform
- **Tech Stack**: React.js, ASP.NET Core, PostgreSQL, Azure, ChatGPT API
- **Live Demo**: [https://www.geminitraderai.com/](https://www.geminitraderai.com/)

### Indie Games
- **Subway Traffic Racer**: Fast-paced 3D subway racing game
- **Relieve**: 2D puzzle game with 64 unique levels
- **Just Catch Boxes**: Hyper-casual game with leaderboard
- **Google Play Integration**: Official Google Play badges for downloads

## 🌐 Deployment

**Firebase Hosting**: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)

```bash
# Build and deploy
npm run build
firebase deploy
```

## 📧 Contact

**Abdullah Qadeer**
- Email: abdullahqadeerdev@gmail.com
- LinkedIn: [linkedin.com/in/abdullahqadeerdev](https://linkedin.com/in/abdullahqadeerdev)
- GitHub: [github.com/abdullah6930](https://github.com/abdullah6930)
- Portfolio: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)

## 📄 License

This project is licensed under the MIT License.

---

⭐ **Star this repository if you found it helpful!** 