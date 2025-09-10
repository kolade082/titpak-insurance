# EmailJS Setup Guide

This guide will help you configure EmailJS for the contact and claims forms in your insurance website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Contact Form Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template ID: `contact_template` (or any name you prefer)
4. Configure the template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your company email

### Claims Form Template

1. Create another template with ID: `claims_template` (or any name you prefer)
2. Configure the template with these variables:
   - `{{full_name}}` - Claimant's full name
   - `{{policy_number}}` - Policy number
   - `{{date_of_loss}}` - Date of loss
   - `{{from_email}}` - Claimant's email
   - `{{phone}}` - Claimant's phone
   - `{{location}}` - Location of loss
   - `{{nature_of_loss}}` - Nature of loss
   - `{{narration}}` - Event narration
   - `{{to_email}}` - Your company email

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

1. Open `/src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
const EMAILJS_SERVICE_ID = "your_actual_service_id";
const EMAILJS_TEMPLATE_ID_CONTACT = "your_contact_template_id";
const EMAILJS_TEMPLATE_ID_CLAIMS = "your_claims_template_id";
const EMAILJS_PUBLIC_KEY = "your_actual_public_key";
```

## Step 6: Test the Forms

1. Start your development server: `npm run dev`
2. Navigate to the Contact page and fill out the form
3. Navigate to the Claims page and fill out the form
4. Check your email to confirm the forms are working

## Template Examples

### Contact Form Email Template

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Titpak Insurance website contact form.
```

### Claims Form Email Template

```
Subject: New Claim Submission - Policy {{policy_number}}

Claimant Name: {{full_name}}
Policy Number: {{policy_number}}
Date of Loss: {{date_of_loss}}
Claimant Email: {{from_email}}
Phone: {{phone}}
Location: {{location}}
Nature of Loss: {{nature_of_loss}}

Narration:
{{narration}}

---
This claim was submitted through the Titpak Insurance website.
```

## Troubleshooting

- Make sure all template variables match exactly (case-sensitive)
- Verify your email service is properly connected
- Check the browser console for any error messages
- Ensure your public key is correct
- Test with a simple template first before adding complex formatting

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in client-side code
- EmailJS handles the email sending securely on their servers
