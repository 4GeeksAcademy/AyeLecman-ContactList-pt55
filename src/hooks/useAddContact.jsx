import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useAgenda } from "./useAgenda";

export const useAddContact = () => {
  const { store } = useGlobalReducer(); // 
  const [error, setError] = useState("");

  const addContact = (contactData) => {
    return fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...contactData})
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => loadAgenda())
      .catch(() => {
        setError("Error al agregar contacto");
      });
  };

  return { addContact, error };
};