# Titpak Insurance Brokers LTD

A modern, responsive website for Titpak Insurance Brokers LTD, built with React and Material-UI. The website showcases various insurance services and provides contact and claims submission functionality.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design using Material-UI
- **Service Pages**: Dedicated pages for each insurance service
- **Contact Forms**: Integrated contact and claims submission forms
- **Email Integration**: EmailJS integration for form submissions
- **SEO Optimized**: Proper routing and meta tags
- **Fast Performance**: Built with Vite for optimal performance

## 🚀 Live Website

Visit the live website at: [https://www.titpakinsurancebrokers.com](https://www.titpakinsurancebrokers.com)

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **UI Library**: Material-UI (MUI) 7.3.1
- **Routing**: React Router DOM 7.8.2
- **Build Tool**: Vite 7.1.2
- **Email Service**: EmailJS 4.4.1
- **Date Handling**: date-fns 4.1.0
- **Icons**: Material-UI Icons

## 📋 Insurance Services

The website covers the following insurance services:

### Aviation Insurance

- Comprehensive aviation coverage
- Aircraft liability protection
- Hangar and ground equipment coverage

### Marine Insurance

- Marine Hull & Cargo insurance
- Protection for vessels and cargo
- Comprehensive marine risk coverage

### Energy Insurance

- Oil & Gas Energy insurance
- Renewable energy coverage
- Energy sector risk management

### Motor Insurance

- Comprehensive motor vehicle coverage
- Third-party liability protection
- Commercial vehicle insurance

### Engineering Insurance

- All-risks engineering coverage
- Machinery breakdown protection
- Construction project insurance

### Fire Insurance

- Fire and special perils coverage
- Property protection
- Business interruption coverage

### General Accident Insurance

- **Burglary Insurance**: Protection against theft and burglary
- **Money Insurance**: Cash and valuables protection
- **Goods in Transit**: Transportation coverage
- **Fidelity Guarantee**: Employee dishonesty protection
- **Group Personal Accident**: Workplace accident coverage

### Life Insurance

- **Whole Life Insurance**: Lifetime coverage with cash value
- **Term Life Insurance**: Affordable temporary coverage
- **Group Life Insurance**: Employee life insurance benefits

### Householders Insurance

- Home and contents protection
- Personal liability coverage
- Comprehensive household insurance

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd titpak-insurance
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up EmailJS configuration:**

   ```bash
   cp src/config/emailjs.template.js src/config/emailjs.js
   ```

   Then update `src/config/emailjs.js` with your EmailJS credentials.

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📧 Email Configuration

The website uses EmailJS for form submissions. Follow these steps:

1. **Create EmailJS Account**: Sign up at [EmailJS.com](https://www.emailjs.com/)
2. **Set up Email Service**: Connect your email provider
3. **Create Templates**: Set up contact and claims email templates
4. **Update Configuration**: Add your credentials to `src/config/emailjs.js`

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 🏗️ Project Structure

```
titpak-insurance/
├── src/
│   ├── components/              # Reusable React components
│   │   ├── NavBar.jsx          # Navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── InsuranceServicePage.jsx # Service page template
│   │   ├── ClaimFormSection.jsx # Claims form component
│   │   ├── FAQSection.jsx      # FAQ component
│   │   └── NotificationToast.jsx # Toast notifications
│   ├── pages/                  # Page components
│   │   ├── Home.jsx           # Homepage
│   │   ├── AboutUs.jsx        # About us page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── Claims.jsx         # Claims page
│   │   ├── FAQ.jsx            # FAQ page
│   │   ├── GetQuote.jsx       # Quote request page
│   │   └── services/          # Individual service pages
│   ├── config/                # Configuration files
│   │   ├── emailjs.js         # EmailJS config (gitignored)
│   │   └── emailjs.template.js # EmailJS template
│   ├── assets/                # Static assets
│   └── templates/             # Page templates
├── public/                    # Public assets
│   └── assets/               # Images and documents
├── dist/                     # Build output (gitignored)
└── docs/                     # Documentation files
```

## 🎨 Design Features

- **Modern Card Layout**: Clean, card-based design for service pages
- **Interactive Elements**: Hover effects and smooth animations
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Professional Color Scheme**: Blue and green corporate colors
- **Typography**: Clear, readable fonts with proper hierarchy
- **Image Integration**: Optimized images with hover effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### GitHub Pages

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use `firebase deploy`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🔒 Security

- EmailJS credentials are gitignored
- No sensitive data in client-side code
- Secure form validation
- HTTPS deployment

## 📚 Documentation

- [Setup Instructions](./SETUP_INSTRUCTIONS.md) - Detailed setup guide
- [EmailJS Setup](./EMAILJS_SETUP.md) - Email configuration guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Titpak Insurance Brokers LTD.

## 📞 Support

For technical support or questions about the website, please contact the development team.

---
