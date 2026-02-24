# 🎓 Placement Interaction System

A modern, professional full-stack placement management system built with React, Vite, and Tailwind CSS. This system manages student placements with role-based dashboards for Students, Employers, Admins, and Placement Officers.

![Placement System](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-cyan)

## ✨ Features

### 🎯 Core Features
- **Role-Based Authentication** - Separate dashboards for 4 user roles
- **Protected Routes** - Secure access control
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on all devices
- **Real-time Notifications** - Toast notifications for actions
- **Interactive Charts** - Recharts for data visualization
- **Modern UI/UX** - Professional SaaS-like interface

### 👥 Role-Specific Features

#### 🎓 Student Dashboard
- Browse available job openings
- Apply to jobs with one click
- Track application status
- View application history
- Search and filter jobs

#### 🏢 Employer Dashboard
- Post new job openings
- View all applicants
- Shortlist/Reject candidates
- Track hiring statistics
- Manage job postings

#### 👨‍💼 Admin Dashboard
- User management (CRUD operations)
- System overview with statistics
- Monitor platform activity
- User role management
- System health monitoring

#### 📊 Placement Officer Dashboard
- Comprehensive analytics with charts
- Placement trends visualization
- Department-wise statistics
- Package distribution analysis
- Top recruiting companies

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd "c:\Users\amrutha\Downloads\REVIWESSS FULL"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

## 🔐 Demo Credentials

Use these credentials to test different roles:

| Role | Email | Password |
|------|-------|----------|
| **Student** | student@demo.com | student123 |
| **Employer** | employer@demo.com | employer123 |
| **Admin** | admin@demo.com | admin123 |
| **Placement Officer** | officer@demo.com | officer123 |

## 📁 Project Structure

```
REVIWESSS FULL/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StatCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── EmployerDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── OfficerDashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Routing**: React Router DOM 6.20
- **Charts**: Recharts 2.10
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **State Management**: Context API

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎨 Features Showcase

### Landing Page
- Hero section with statistics
- Feature highlights
- Call-to-action buttons
- Responsive design

### Authentication
- Role-based login
- Demo credentials for quick testing
- Secure route protection

### Dashboards
- **Student**: Job search, application tracking
- **Employer**: Job posting, applicant management
- **Admin**: User management, system overview
- **Officer**: Analytics, reports, charts

### UI Components
- Stat cards with icons
- Interactive tables
- Search and filters
- Toast notifications
- Dark mode support
- Smooth animations

## 🔧 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',  // Change primary color
      secondary: '#8b5cf6', // Change secondary color
    }
  }
}
```

### Add More Mock Data
Edit `src/data/mockData.js` to add more jobs, users, or statistics.

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 Key Highlights

✅ **Production-Ready** - Clean code, proper structure
✅ **Modern UI** - Professional SaaS-like design
✅ **Role-Based Access** - Secure authentication
✅ **Interactive Charts** - Data visualization
✅ **Dark Mode** - Theme toggle
✅ **Responsive** - Mobile-first design
✅ **Fast Performance** - Vite build tool
✅ **Easy to Deploy** - One-command deployment

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ for academic excellence**
