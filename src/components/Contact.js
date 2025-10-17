import React, { useState } from "react";

const Contact = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
	setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	onSubmit(form);
	setSubmitted(true);
	setForm({ name: "", email: "", message: "" });
  };

  return (
	<section className="contact">
	  <h3>Contact Me</h3>
	  {submitted ? (
		<p className="success">Thanks for reaching out! I'll review your message soon.</p>
	  ) : (
		<form onSubmit={handleSubmit}>
		  <input
			name="name"
			placeholder="Your Name"
			value={form.name}
			onChange={handleChange}
			required
			autoComplete="off"
		  />
		  <input
			name="email"
			type="email"
			placeholder="Your Email"
			value={form.email}
			onChange={handleChange}
			required
			autoComplete="off"
		  />
		  <textarea
			name="message"
			placeholder="Your Message"
			value={form.message}
			onChange={handleChange}
			required
			rows={5}
		  />
		  <button type="submit">Send Message</button>
		</form>
	  )}     
	</section>
  );
};

export default Contact;
