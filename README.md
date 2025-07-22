# Abdullah Qadeer - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills as a Software Engineer specializing in Unity, .NET Core, VR/AR, and AI technologies.

🌐 **Live Demo**: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)

![Portfolio Preview](https://via.placeholder.com/800x400/0070f3/ffffff?text=Portfolio+Preview)

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme and glass morphism effects
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: 
  - Dynamic typing animation in hero section
  - Scroll-triggered animations with intersection observer
  - Animated progress bars for skills
  - Floating tech icons
- **Advanced Projects Showcase**:
  - **Project Categories**: Filter projects by type (All, Enterprise Systems, Indie Games, Open Source)
  - **Modal Popup System**: Click any project to view detailed information
  - **Image Lightbox Gallery**: Click screenshots to view full-size with navigation
  - **YouTube Video Integration**: Embedded demo videos
  - **Technology Tags**: Visual representation of tech stack
  - **Conditional Links**: Shows GitHub/Demo buttons only when available
- **Functional Contact Form**:
  - **EmailJS Integration**: Real email sending capability
  - **Security Features**: Domain restrictions, rate limiting, spam protection
  - **Form Validation**: Client-side validation with error handling
  - **Multiple Status States**: Success, error, sending, and rate limit messages
- **Comprehensive Sections**:
  - Hero with dynamic role display
  - About with specialties and achievements
  - Experience timeline
  - Categorized projects with rich media content
  - Skills with proficiency levels
  - Working contact form with email notifications
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance Optimized**: Fast loading with optimized assets
- **Security Enhanced**: Protected contact form with anti-spam measures

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI library with hooks (useState, useEffect)
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library with AnimatePresence
- **React Icons** - Icon library (Feather Icons)
- **React Intersection Observer** - Scroll-triggered animations

### Email & Communication
- **EmailJS** - Client-side email sending service
- **Form Validation** - Custom validation with spam detection
- **Security Features** - Domain restrictions and rate limiting

### Styling
- **CSS3** - Custom styling with CSS variables and modern features
- **Google Fonts** - Inter & JetBrains Mono
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Glass Morphism** - Modern UI effects with backdrop-filter
- **Custom Scrollbars** - Styled scrollbars for better UX

### Development & Deployment
- **Create React App** - Development environment
- **Firebase Hosting** - Production deployment with CDN
- **Git** - Version control with image asset management
- **npm** - Package management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- EmailJS account (for contact form functionality)

### Setup
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
   - Create email service and template
   - Copy your Service ID, Template ID, and Public Key
   - Create `.env` file in project root:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Configure EmailJS Security**
   - Add your domain to **Allowed Origins** in EmailJS dashboard
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`

5. **Start development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🚀 Usage

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App
```

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
abdullah-qadeer-portfolio/
├── public/
│   ├── images/             # Static assets for projects
│   │   └── projects/       # Project screenshots and media
│   │       └── gemini-ai-trader/  # Gemini AI Trader screenshots
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # Website favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Header.css      # Header styles
│   │   ├── Hero.js         # Hero section with typing animation
│   │   ├── Hero.css        # Hero styles
│   │   ├── About.js        # About section
│   │   ├── About.css       # About styles
│   │   ├── Experience.js   # Experience timeline
│   │   ├── Experience.css  # Experience styles
│   │   ├── Projects.js     # Projects with categories & modals
│   │   ├── Projects.css    # Projects styles (modal & lightbox)
│   │   ├── Skills.js       # Skills section
│   │   ├── Skills.css      # Skills styles
│   │   ├── Contact.js      # Functional contact form with EmailJS
│   │   ├── Contact.css     # Contact styles
│   │   ├── Footer.js       # Footer component
│   │   └── Footer.css      # Footer styles
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles and CSS variables
│   └── index.js            # Entry point
├── .env                    # Environment variables (EmailJS config)
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: `#0070f3` (Blue)
- **Secondary**: `#7c3aed` (Purple)
- **Accent**: `#00d2ff` (Cyan)
- **Background**: `#0a0a0a` (Dark)
- **Surface**: Glass morphism with backdrop-filter
- **Text**: `#ffffff` (White), `#94a3b8` (Secondary)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Animations
- Entrance animations with stagger effects
- Scroll-triggered animations with intersection observer
- Modal animations with scale and fade transitions
- Lightbox animations with backdrop blur
- Category switching animations
- Hover effects and micro-interactions
- Dynamic typing animation
- Floating elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📂 Project Categories System

### Category Types
- **All**: Shows all projects
- **Enterprise Systems**: Professional web applications
- **Indie Games**: Game development projects
- **Open Source**: Community contributions and tools

### Features
- **Interactive Tabs**: Click to filter projects by category
- **Smooth Transitions**: Animated filtering with Framer Motion
- **Responsive Design**: Mobile-friendly category buttons
- **Active States**: Clear visual indication of selected category

### Adding Projects to Categories
```javascript
{
  title: "Project Title",
  description: "Short description for card",
  fullDescription: "Detailed description for modal",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "Enterprise Systems", // Required category
  github: "https://github.com/username/repo", // Optional
  demo: "https://demo-url.com", // Optional
  featured: true, // Boolean for featured badge
  images: [...],
  videos: [...]
}
```

## 📧 Contact Form Features

### EmailJS Integration
- **Real Email Sending**: Functional contact form using EmailJS
- **Template Customization**: Custom email templates with branding
- **Environment Variables**: Secure configuration management

### Security Features
- **Domain Restrictions**: Only allows emails from authorized domains
- **Rate Limiting**: Prevents spam with cooldown periods (1 minute)
- **Submission Limits**: Maximum 3 submissions per session
- **Spam Detection**: Basic keyword filtering
- **Input Validation**: Comprehensive client-side validation
- **Error Handling**: Specific error messages for different scenarios

### Status Messages
- **Success**: Confirmation with auto-clear
- **Sending**: Loading state with spinner
- **Error**: Various error types (network, validation, domain)
- **Rate Limited**: Cooldown notification
- **Limit Exceeded**: Session limit reached

### Setup Requirements
1. **EmailJS Account**: Free tier supports 200 emails/month
2. **Email Service**: Configure with your email provider
3. **Template Creation**: Custom email template with variables
4. **Domain Security**: Add your domain to allowed origins
5. **Environment Variables**: Secure credential storage

## 🛡️ Security Measures

### EmailJS Security
- **Domain Restrictions**: Prevents unauthorized usage
- **Rate Limiting**: 1-minute cooldown between submissions
- **Session Limits**: Maximum 3 submissions per session
- **Spam Filtering**: Basic keyword detection
- **Input Sanitization**: Prevents malicious content
- **Error Logging**: Tracks failed attempts for monitoring

### Configuration Security
- **Environment Variables**: Sensitive data not committed to repository
- **Firebase Hosting**: Automatic HTTPS and CDN protection
- **Git Ignore**: Prevents accidental credential commits

## 🖼️ Project Modal System

### Features
- **Full Project Details**: Expanded descriptions beyond card previews
- **Technology Stack**: Visual tags showing all technologies used
- **Image Gallery**: Multiple screenshots with hover effects
- **Lightbox Viewer**: Click any image to view full-size
- **Navigation Controls**: Arrow buttons and keyboard navigation (←/→/Esc)
- **Video Integration**: Embedded YouTube videos with proper aspect ratio
- **Responsive Design**: Optimized for all screen sizes

## 🌐 Deployment

### Current Deployment
**Firebase Hosting**: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Fast loading times
- ✅ Automatic deployment on push

### Deployment Options

#### Firebase Hosting (Current)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

#### Netlify
1. Build the project: `npm run build`
2. Drag and drop `build` folder to Netlify
3. Configure environment variables in Netlify dashboard
4. Set up continuous deployment from Git

#### Vercel
1. Connect GitHub repository
2. Configure environment variables
3. Auto-deploy on push to main branch

## 🔧 Customization

### Personal Information
Update personal details in respective component files:
- `src/components/Hero.js` - Name, roles, statistics
- `src/components/About.js` - Bio, specialties, achievements
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Featured projects data with categories
- `src/components/Skills.js` - Technical skills
- `src/components/Contact.js` - Contact information and EmailJS config

### EmailJS Configuration
1. **Service Setup**: Configure email service in EmailJS dashboard
2. **Template Creation**: Create custom email template
3. **Security Settings**: Configure domain restrictions and rate limits
4. **Environment Variables**: Update `.env` with your credentials

### Project Categories
Modify the `categories` array in `Projects.js`:
```javascript
const categories = ['All', 'Web Apps', 'Mobile Apps', 'Desktop', 'Open Source'];
```

### Styling
- Global styles: `src/App.css` with CSS custom properties
- Component-specific styles: Individual CSS files
- Category buttons: `src/components/Projects.css`
- Modal & lightbox styles: Enhanced responsive design

## 🎯 Featured Projects

### Gemini AI Trader
- **Category**: Enterprise Systems
- **Description**: Intelligent Stock and Crypto Analysis Platform
- **Tech Stack**: React.js, ASP.NET Core, PostgreSQL, Azure, ChatGPT API
- **Features**: AI-powered trading insights, real-time data, portfolio management
- **Screenshots**: 8 high-quality images showcasing desktop and mobile views
- **Live Demo**: [https://www.geminitraderai.com/](https://www.geminitraderai.com/)

### Indie Games
- **Subway Traffic Racer**: Fast-paced 3D subway racing game
- **Relieve**: 2D puzzle game with 64 unique levels
- **Just Catch Boxes**: Hyper-casual game with leaderboard

### Open Source Projects
- **ChatGPT Wrapper for Unity**: Easy ChatGPT integration for Unity projects
- **Mesh Generator for Unity**: Runtime mesh editing tool

## 📧 Contact

**Abdullah Qadeer**
- Email: abdullahqadeerdev@gmail.com
- Phone: +92 311 5799710
- Location: Rawalpindi, Pakistan
- LinkedIn: [linkedin.com/in/abdullahqadeerdev](https://linkedin.com/in/abdullahqadeerdev)
- GitHub: [github.com/abdullah6930](https://github.com/abdullah6930)
- Portfolio: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email functionality by [EmailJS](https://www.emailjs.com/)
- Hosting by [Firebase](https://firebase.google.com/)

## 🔄 Recent Updates

- ✅ **EmailJS Integration**: Functional contact form with real email sending
- ✅ **Project Categories**: Filter projects by type (Enterprise, Games, Open Source)
- ✅ **Enhanced Security**: Domain restrictions, rate limiting, spam protection
- ✅ **Firebase Deployment**: Live production deployment with CDN
- ✅ **Improved UX**: Better form validation and error handling
- ✅ **Mobile Optimization**: Enhanced responsive design for all devices
- ✅ **Performance**: Optimized loading and animation performance

## 🚀 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Dark/Light theme toggle
- [ ] Advanced project filtering and search
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Progressive Web App (PWA) features

---

⭐ **Star this repository if you found it helpful!**

📝 **Live Demo**: [https://abdullah-qadeer-portfolio.web.app/](https://abdullah-qadeer-portfolio.web.app/) 