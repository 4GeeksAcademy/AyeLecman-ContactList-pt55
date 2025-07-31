export const initialStore = () => ({
  contacts: [],
  agenda: "AyeLec",
});

const storeReducer = (state, action) => {
  switch (action.type) {
    case "load_contacts":
      return {
        ...state,
        contacts: action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;






// export default function storeReducer(store, action = {}) {
//   switch(action.type){
//     case 'add_task':

//       const { id,  color } = action.payload

//       return {
//         ...store,
//         todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
//       };
//     default:
//       throw Error('Unknown action.');
//   }    
// }
