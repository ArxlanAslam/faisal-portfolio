/**
 * Single source of truth for contact details.
 * Imported by the hero, contact section, footer, command palette and the
 * chat assistant so a number or handle is only ever changed in one place.
 */

export const contact = {
  email: 'faisal76867@gmail.com',
  // Display form, with spaces for readability.
  phone: '+92 300 9272292',
  // wa.me requires digits only: country code + number, no '+', spaces or dashes.
  whatsappNumber: '923009272292',
  linkedin: 'https://www.linkedin.com/in/faisal-aslam-790238242/',
  github: 'https://github.com/faysal-aslam',
  location: 'Lahore, Pakistan'
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Faisal, I found your portfolio and I'd like to talk about an opportunity.";

/**
 * Builds a wa.me deep link. Opens the WhatsApp app on mobile and
 * WhatsApp Web on desktop, with the message pre-typed but not sent.
 */
export const whatsappLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject = 'Opportunity for you') =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

/** Resume download — shared so the hero and command palette can't drift apart. */
export const RESUME_PATH = '/resume.pdf';
export const RESUME_FILENAME = 'Faisal_Aslam_Senior_AI_ML_Engineer_Resume.pdf';
