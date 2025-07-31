import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useAddContact } from "../hooks/useAddContact"; // Asegurate de que exista este hook

export const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const { addContact, error } = useAddContact("AyeLec");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      address
    };

    addContact(newContact).then(() => {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    });
  };

  return (
    <div className="container">
      <h1>AGREGAR CONTACTO</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      <Link to="/">
        <button className="btn btn-secondary mt-3">Back home</button>
      </Link>
    </div>
  );
};