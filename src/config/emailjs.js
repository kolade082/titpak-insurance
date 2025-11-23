import emailjs from "@emailjs/browser";

// Replace the placeholder strings below with your EmailJS credentials
// DO NOT commit `src/config/emailjs.js` with real credentials — that's why
// we provide this template.
// Read credentials from Vite env vars (set these in .env.local or your hosting platform)
export const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
export const CLAIMS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLAIMS_TEMPLATE_ID;
export const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!PUBLIC_KEY) {
  console.error("❌ EmailJS public key missing. Add VITE_EMAILJS_PUBLIC_KEY to .env or hosting panel.");
} else {
  emailjs.init(PUBLIC_KEY);
}


export async function sendContactEmail(formData) {
  try {
    const templateParams = {
      name: formData.name || "",
      email: formData.email || "",
      phone: formData.phone || "",
      subject: formData.subject || "",
      message: formData.message || "",
    };

    const response = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error("sendContactEmail error:", error);
    return { success: false, error };
  }
}

export async function sendClaimsEmail(formData) {
  try {
    const templateParams = {
      fullName: formData.fullName || "",
      policyNumber: formData.policyNumber || "",
      dateOfLoss: formData.dateOfLoss ? String(formData.dateOfLoss) : "",
      email: formData.email || "",
      phone: formData.phone || "",
      location: formData.location || "",
      natureOfLoss: formData.natureOfLoss || "",
      narration: formData.narration || "",
    };

    const response = await emailjs.send(
      SERVICE_ID,
      CLAIMS_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error("sendClaimsEmail error:", error);
    return { success: false, error };
  }
}

// If you need a named default, you can also export an object:
export default { sendContactEmail, sendClaimsEmail };