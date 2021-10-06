import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          name="phone"
          type="tel"
          pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
