
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useAgenda } from "../hooks/useAgenda.jsx";
import { useDeleteContact } from "../hooks/useDeleteContact";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const resultado = useAgenda(dispatch);
	const error = resultado.error;

	const resultadoDelete = useDeleteContact();
	const deleteContact = resultadoDelete.deleteContact;
	const deleteError = resultadoDelete.error;	

	return (
		<div className="text-center mt-5">
			<h2>Contactos de {store.agenda}</h2>
			{error && <p className="text-danger">{error}</p>}
			<ul className="list-group">
				{store.contacts?.map(contact => (
					<li key={contact.id}>
						<ul className="mt-3">
						<li>{contact.name}</li>
						<li>{contact.phone}</li>
						<li>{contact.email}</li>
						<li>{contact.address}</li>
						</ul>
						<button className="btn btn-light btn-sm border-0 bg-transparent delete-btn" onClick={() => deleteContact(contact.id)}>
							<i className="bi bi-trash text-danger"></i>
						</button>
						{deleteError && <p className="text-danger">{deleteError}</p>}
					</li>
				))}
			</ul>
		</div>
	);
};
