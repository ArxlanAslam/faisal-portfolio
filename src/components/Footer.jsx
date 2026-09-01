import React from 'react';
import { contact } from '../data/contact';

/**
 * Copyright only. Contact lives in the nav button, the floating dock and the
 * contact section — a fourth set of links here was just noise.
 */
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-6 px-6">
    <p className="max-w-6xl mx-auto text-sm text-center">
      © 2026 Faisal Aslam · {contact.location}
    </p>
  </footer>
);

export default Footer;
