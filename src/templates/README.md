# Insurance Service Pages - Reusable Component

This directory contains a reusable component system for creating insurance service pages quickly and consistently.

## 🎯 How to Create a New Insurance Service Page

### Step 1: Copy the Template

1. Copy `InsuranceServiceTemplate.jsx` to `src/pages/`
2. Rename it to your service name (e.g., `MarineCargoInsurance.jsx`)

### Step 2: Customize the Content

Edit the following sections in your new file:

#### Service Data

```javascript
const serviceData = {
  category: "Your Category", // e.g., "Marine Insurance"
  title: "Your Service Title", // e.g., "Marine Cargo Insurance"
  subtitle: "Your service subtitle", // e.g., "Protect your cargo during transit"
  description: "Detailed description of your insurance service...",
};
```

#### Features (6 items recommended)

```javascript
const features = [
  {
    icon: "🚢", // Choose appropriate emoji
    title: "Feature 1",
    description: "Description of this feature...",
  },
  // ... add up to 6 features
];
```

#### Benefits (6 items recommended)

```javascript
const benefits = [
  {
    title: "Benefit 1",
    description: "Explain how this benefit helps customers...",
  },
  // ... add up to 6 benefits
];
```

#### Coverage (6 items recommended)

```javascript
const coverage = [
  {
    title: "Coverage Item 1",
    description: "Detailed description of what this coverage includes...",
  },
  // ... add up to 6 coverage items
];
```

#### Claims Process (4 steps recommended)

```javascript
const claimsProcess = [
  {
    step: "1",
    title: "Step 1",
    description: "Description of what happens in this step...",
  },
  // ... add 4 steps total
];
```

### Step 3: Add to App.jsx

1. Import your new component:

```javascript
import YourServiceName from "./pages/YourServiceName";
```

2. Add the route:

```javascript
<Route path="/what-we-do/your-service" element={<YourServiceName />} />
```

### Step 4: Update Navigation

Add your service to the `whatWeDoItems` array in `NavBar.jsx`:

```javascript
{ text: "Your Service", link: "/what-we-do/your-service" }
```

## 🎨 Component Features

The `InsuranceServicePage` component automatically includes:

- **Hero Section** - Service title, subtitle, and description
- **Features Section** - Key features with icons and descriptions
- **Benefits Section** - Why choose this service
- **Coverage Section** - What's covered in the policy
- **Claims Process** - Step-by-step claims process
- **Call to Action** - Quote request button

## 📱 Responsive Design

The component is fully responsive and includes:

- Mobile-first design
- Responsive grid layouts
- Hover effects and animations
- Consistent styling with your brand

## 🎯 Example Pages

See these examples for reference:

- `FireInsurance.jsx` - Property insurance example
- `MotorInsurance.jsx` - Vehicle insurance example

## 💡 Tips

1. **Use descriptive icons** - Choose emojis that clearly represent each feature
2. **Keep descriptions concise** - Aim for 1-2 sentences per description
3. **Be specific** - Include concrete benefits and coverage details
4. **Test responsiveness** - Check how your page looks on different screen sizes
5. **Consistent tone** - Match the professional tone of existing pages

## 🔧 Customization Options

You can customize:

- `ctaText` - Call-to-action button text
- `ctaLink` - Where the CTA button links to
- All content sections are optional (pass `null` to hide a section)

## 📋 Checklist

Before publishing your new page:

- [ ] All content is customized
- [ ] Icons are appropriate and consistent
- [ ] Descriptions are clear and professional
- [ ] Page is added to App.jsx routing
- [ ] Navigation link is added to NavBar.jsx
- [ ] Page works on mobile and desktop
- [ ] All links are working correctly

