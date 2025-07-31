import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useAgenda } from "./hooks/useAgenda.jsx";

export const useDeleteContact = () => {
    const { store } = useGlobalReducer();
    const [error, setError] = useState("");

    const deleteContact = (contactId) => {
        
        return fetch(`https://playground.4geeks.com/contact/agendas/AyeLec/contacts/${contactId}`, {
            method: "DELETE"
        })
            
            .then((res) => {
                if (!res.ok) throw new Error();      
                loadAgenda()
            })

            .catch(() => {
                setError("Error al eliminar contacto");
            });
    };

    return { deleteContact, error };
};