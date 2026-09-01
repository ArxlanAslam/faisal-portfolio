import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import FadeIn from './FadeIn';
import { contact, whatsappLink } from '../data/contact';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    // Without a configured key, hand the message off to the visitor's mail client
    // so the form never silently fails.
    if (!accessKey) {
      openMailClient();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formData.name,
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio enquiry from ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Could not send directly — opening your email app instead.');
      openMailClient();
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(
      formData.subject || `Portfolio enquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast.success('Opening your email app with the message ready to send');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    toast.success('Email copied to clipboard!');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    toast.success('Phone number copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto text-center">
            If you need AI chatbots, computer vision systems, RAG solutions, or automation using LLMs — feel free to contact me.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeIn delay={300}>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none text-slate-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={400}>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                      <button
                        onClick={copyEmail}
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-left"
                      >
                        {contact.email}
                      </button>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Click to copy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone / WhatsApp</p>
                      <button
                        onClick={copyPhone}
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-left"
                      >
                        {contact.phone}
                      </button>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Click to copy · or{' '}
                        <a
                          href={whatsappLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 dark:text-green-400 font-semibold hover:underline"
                        >
                          chat on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                      <p className="text-slate-900 dark:text-white font-semibold">Lahore, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Availability</p>
                      <p className="text-slate-900 dark:text-white font-semibold">Open to Remote &amp; Relocation</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Remote with EU / US overlap, or relocation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Connect With Me</h3>
                <div className="space-y-3">
                  {/* Fastest route to a reply — kept first and visually distinct */}
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1eb855] transition-all shadow-lg hover:scale-105"
                  >
                    <FaWhatsapp size={22} />
                    <span className="flex-1">Message on WhatsApp</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/25">
                      Fastest
                    </span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:scale-105"
                  >
                    <Mail size={20} />
                    <span>Send an Email</span>
                  </a>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-105">
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all shadow-lg hover:scale-105">
                    <Github size={20} />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
