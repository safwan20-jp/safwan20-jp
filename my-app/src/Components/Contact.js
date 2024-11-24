import React, { useState } from 'react';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <section className="contact-section container mx-auto px-4 py-12 max-w-xl">
   
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[150px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
