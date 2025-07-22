# Abdullah Qadeer - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills as a Software Engineer specializing in Unity, .NET Core, VR/AR, and AI technologies.

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
  - **Modal Popup System**: Click any project to view detailed information
  - **Image Lightbox Gallery**: Click screenshots to view full-size with navigation
  - **YouTube Video Integration**: Embedded demo videos
  - **Technology Tags**: Visual representation of tech stack
  - **Conditional GitHub Links**: Only shows if repository is public
- **Comprehensive Sections**:
  - Hero with dynamic role display
  - About with specialties and achievements
  - Experience timeline
  - Featured projects with rich media content
  - Skills with proficiency levels
  - Contact form with validation
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI library with hooks (useState, useEffect)
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library with AnimatePresence
- **React Icons** - Icon library (Feather Icons)
- **React Intersection Observer** - Scroll-triggered animations

### Styling
- **CSS3** - Custom styling with CSS variables and modern features
- **Google Fonts** - Inter & JetBrains Mono
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Glass Morphism** - Modern UI effects with backdrop-filter
- **Custom Scrollbars** - Styled scrollbars for better UX

### Development Tools
- **Create React App** - Development environment
- **Git** - Version control with image asset management
- **npm** - Package management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

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

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
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
│   │   ├── Projects.js     # Projects showcase with modals & lightbox
│   │   ├── Projects.css    # Projects styles including modal & lightbox
│   │   ├── Skills.js       # Skills section
│   │   ├── Skills.css      # Skills styles
│   │   ├── Contact.js      # Contact form
│   │   ├── Contact.css     # Contact styles
│   │   ├── Footer.js       # Footer component
│   │   └── Footer.css      # Footer styles
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles and CSS variables
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules (updated for assets)
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
- Hover effects and micro-interactions
- Dynamic typing animation
- Floating elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🖼️ Project Modal System

### Features
- **Full Project Details**: Expanded descriptions beyond card previews
- **Technology Stack**: Visual tags showing all technologies used
- **Image Gallery**: Multiple screenshots with hover effects
- **Lightbox Viewer**: Click any image to view full-size
- **Navigation Controls**: Arrow buttons and keyboard navigation (←/→/Esc)
- **Video Integration**: Embedded YouTube videos with proper aspect ratio
- **Responsive Design**: Optimized for all screen sizes

### Adding New Projects
```javascript
{
  title: "Project Title",
  description: "Short description for card",
  fullDescription: "Detailed description for modal",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo", // Optional
  demo: "https://demo-url.com",
  featured: true, // Boolean for featured badge
  images: [
    "/images/projects/project-name/screenshot1.png",
    "/images/projects/project-name/screenshot2.png"
  ],
  videos: [
    "youtubeVideoId1",
    "youtubeVideoId2"
  ]
}
```

## 📸 Image Management

### Adding Project Images
1. Create project folder: `public/images/projects/your-project-name/`
2. Add screenshots in supported formats (PNG, JPG, WebP)
3. Update project data with correct image paths
4. Images are automatically responsive and optimized

### Supported Features
- **Auto-scaling**: Images maintain aspect ratio
- **Lazy loading**: Performance optimization
- **Hover effects**: Visual feedback
- **Lightbox navigation**: Full-screen viewing with controls
- **Mobile optimization**: Touch-friendly interface

## 🔧 Customization

### Personal Information
Update personal details in respective component files:
- `src/components/Hero.js` - Name, roles, statistics
- `src/components/About.js` - Bio, specialties, achievements
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Featured projects data
- `src/components/Skills.js` - Technical skills
- `src/components/Contact.js` - Contact information

### Project Data
The `Projects.js` file contains an array of project objects. Each project supports:
- Basic information (title, description, technologies)
- Media assets (images, videos)
- External links (GitHub, demo)
- Feature flags (featured status)

### Styling
- Global styles: `src/App.css` with CSS custom properties
- Component-specific styles: Individual CSS files
- Modal & lightbox styles: `src/components/Projects.css`
- Responsive breakpoints: Consistent across all components

### Content
- Replace placeholder content with your actual information
- Update social media links in Header and Footer
- Add your project screenshots to `public/images/projects/`
- Update YouTube video IDs for demo videos

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop `build` folder to Netlify
3. Configure domain and settings
4. Images in `public/` folder are automatically served

### Vercel
1. Connect GitHub repository
2. Auto-deploy on push to main branch
3. Static assets are automatically optimized

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎯 Featured Projects

### Gemini AI Trader
- **Description**: Intelligent Stock and Crypto Analysis Platform
- **Tech Stack**: React.js, ASP.NET Core, PostgreSQL, Azure, ChatGPT API
- **Features**: AI-powered trading insights, real-time data, portfolio management
- **Screenshots**: 8 high-quality images showcasing desktop and mobile views
- **Live Demo**: [https://www.geminitraderai.com/](https://www.geminitraderai.com/)

## 📧 Contact

**Abdullah Qadeer**
- Email: your.email@example.com
- LinkedIn: [linkedin.com/in/abdullahqadeerdev](https://linkedin.com/in/abdullahqadeerdev)
- GitHub: [github.com/abdullah6930](https://github.com/abdullah6930)
- Portfolio: [abdullah-portfolio.com](https://abdullah-portfolio.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Project screenshots and content from actual portfolio projects

## 🔄 Recent Updates

- ✅ Added modal popup system for project details
- ✅ Implemented image lightbox gallery with navigation
- ✅ Integrated YouTube video embedding
- ✅ Added conditional GitHub link rendering
- ✅ Enhanced responsive design for mobile devices
- ✅ Updated git tracking for project assets
- ✅ Improved accessibility with keyboard navigation

---

⭐ **Star this repository if you found it helpful!** 