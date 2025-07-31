import { useCallback, useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const useAgenda = (dispatch) => {
	const [error, setError] = useState("");
    const { store } = useGlobalReducer();

	const loadAgenda = useCallback(() => {
		fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}`)
			.then(res => {
				if (!res.ok) {
					return fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify([])
					});
				}
				return res;
			})
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "load_contacts",
					payload: data.contacts
				});
			})
			.catch(() => setError("Error al verificar o crear usuario"));
	}, [dispatch, store.agenda]);

	useEffect(() => {
		loadAgenda();
	}, [loadAgenda]);

	return { error };
};