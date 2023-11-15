import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  function handleSubmit(e) {
    if (
      name.length > 0 &&
      surname.length > 0 &&
      phone.length > 0 &&
      email.length > 0
    ) {
      setData(JSON.stringify({ name, surname, phone, email }));
    }
    e.preventDefault();
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
            type="text"
          />
          <input
            className="input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname..."
            type="text"
          />
          <input
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number..."
            type="number"
          />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            type="email"
          />
        </div>
        <button className="submit-btn">Sumbit</button>
      </form>
      {!!data && <div className="json">{data}</div>}
    </div>
  );
}

export default Contact;
