import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${errors.company ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="licenseType">License Type</label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${errors.licenseType ? 'border-red-500' : 'border-gray-700'}`}
              >
                <option value="">Select a license type</option>
                <option value="microsoft">Microsoft</option>
                <option value="adobe">Adobe</option>
                <option value="autodesk">Autodesk</option>
                <option value="other">Other</option>
              </select>
              {errors.licenseType && <p className="text-red-400 text-sm mt-1">{errors.licenseType}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 