# Titpak Insurance Website Setup Instructions

## 🔐 Security Setup

### EmailJS Configuration

1. **Copy the template file:**

   ```bash
   cp src/config/emailjs.template.js src/config/emailjs.js
   ```

2. **Update with your actual EmailJS credentials:**

   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_CONTACT_TEMPLATE_ID` with your contact template ID
   - Replace `YOUR_CLAIMS_TEMPLATE_ID` with your claims template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key

3. **The actual config file is gitignored** to keep your credentials secure

## 🚀 Getting Started

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

   - Follow the EmailJS setup instructions in `EMAILJS_SETUP.md`
   - Copy `src/config/emailjs.template.js` to `src/config/emailjs.js`
   - Update with your actual EmailJS credentials

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📧 Email Templates

### Setting up Email Templates

1. Follow the instructions in `EMAIL_TEMPLATE_SETUP.md`
2. Copy the HTML templates to your EmailJS dashboard
3. Test the templates using EmailJS's test feature

### Template Files

- Contact form template: Use the HTML from `EMAIL_TEMPLATE_SETUP.md`
- Claims form template: Use the HTML from `EMAIL_TEMPLATE_SETUP.md`

## 🔒 Security Notes

### What's Protected

- ✅ EmailJS credentials are gitignored
- ✅ Node modules are gitignored
- ✅ Build files are gitignored
- ✅ Environment variables are gitignored

### What's Included

- ✅ Source code
- ✅ Template files
- ✅ Configuration templates
- ✅ Documentation

## 📁 Project Structure

```
titpak-insurance/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── config/             # Configuration files
│   │   ├── emailjs.js      # EmailJS config (gitignored)
│   │   └── emailjs.template.js # Template file
│   └── assets/             # Static assets
├── public/                 # Public assets
├── dist/                   # Build output (gitignored)
├── node_modules/           # Dependencies (gitignored)
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

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

- **Netlify**: Connect your GitHub repo
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: Use `firebase deploy`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Code Style

- Uses ESLint for code quality
- Follows React best practices
- Material-UI for consistent styling

## 📞 Support

### Documentation

- `EMAILJS_SETUP.md` - EmailJS configuration guide
- `EMAIL_TEMPLATE_SETUP.md` - Email template setup guide
- `SETUP_INSTRUCTIONS.md` - This file

### Common Issues

1. **EmailJS not working**: Check your credentials in `src/config/emailjs.js`
2. **Build errors**: Run `npm install` to ensure all dependencies are installed
3. **Template issues**: Verify template IDs match your EmailJS dashboard

## 🔄 Updates

### Keeping Dependencies Updated

```bash
npm update
```

### Updating EmailJS

- Check EmailJS documentation for breaking changes
- Update template variables if needed
- Test thoroughly after updates

---

**Need Help?** Check the documentation files or contact your development team.
