import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase, type ContactFormData } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '',
    customCountryCode: '',
    role: '',
    companyName: '',
    companyWebsite: '',
    companySize: '',
    annualRevenue: '',
    projectBudget: '',
    services: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Prepare data for Supabase
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        country_code: formData.countryCode === 'custom' ? formData.customCountryCode : formData.countryCode,
        phone: formData.phone,
        role: formData.role,
        company_name: formData.companyName,
        company_website: formData.companyWebsite,
        company_size: formData.companySize,
        annual_revenue: formData.annualRevenue,
        project_budget: formData.projectBudget,
        services: formData.services,
        message: formData.message
      };

      const { error } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (error) {
        throw error;
      }

      setSubmissionStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        customCountryCode: '',
        role: '',
        companyName: '',
        companyWebsite: '',
        companySize: '',
        annualRevenue: '',
        projectBudget: '',
        services: '',
        message: ''
      });

      // Auto close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Get in Touch</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your name? *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your email? *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Country Code & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country Code *
              </label>
              <input
                type="text"
                name="countryCode"
                required
                value={formData.countryCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="e.g., +44"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (with Whatsapp) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="e.g., 75123 45678"
              />
            </div>
          </div>

          {/* Role & Company Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your role in the company? *
              </label>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="e.g., CEO, Marketing Manager"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter company name"
              />
            </div>
          </div>

          {/* Company Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Website *
            </label>
            <input
              type="url"
              name="companyWebsite"
              required
              value={formData.companyWebsite}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="https://yourcompany.com"
            />
          </div>

          {/* Company Size & Revenue */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size *
              </label>
              <select
                name="companySize"
                required
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select company size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company's Annual Revenue *
              </label>
              <select
                name="annualRevenue"
                required
                value={formData.annualRevenue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select annual revenue</option>
                <option value="<$100k">&lt;$100k</option>
                <option value="$100k-$1M">$100k–$1M</option>
                <option value="$1M-$10M">$1M–$10M</option>
                <option value="$10M+">$10M+</option>
              </select>
            </div>
          </div>

          {/* Budget & Services */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Budget *
              </label>
              <select
                name="projectBudget"
                required
                value={formData.projectBudget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select project budget</option>
                <option value="<$1k">&lt;$1k</option>
                <option value="$1k-$10k">$1k–$10k</option>
                <option value="$10k-$50k">$10k–$50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What services are you interested in? *
              </label>
              <select
                name="services"
                required
                value={formData.services}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select service</option>
                <option value="Inbound AI Calls">Inbound AI Calls</option>
                <option value="Outbound AI Calls">Outbound AI Calls</option>
                <option value="Custom AI Automations">Custom AI Automations</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
              placeholder="Tell us about your project and requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : submissionStatus === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : submissionStatus === 'error'
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-black hover:bg-gray-800'
            } text-white`}
          >
            {isSubmitting
              ? 'Submitting...'
              : submissionStatus === 'success'
              ? '✓ Form Submitted Successfully! 🎉'
              : submissionStatus === 'error'
              ? '❌ Error - Please Try Again'
              : 'Send Inquiry'}
          </button>

          {submissionStatus === 'success' && (
            <p className="text-green-600 text-center text-sm mt-2">
              Thank you for your inquiry! Our team will contact you soon.
            </p>
          )}

          {submissionStatus === 'error' && (
            <p className="text-red-600 text-center text-sm mt-2">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
