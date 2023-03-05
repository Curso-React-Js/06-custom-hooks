
// { type: [todo remove], payload: id }
export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case '[TODO] Add Todo':
      // throw new Error('Action.type = ABC no esta implementadas');
      return [ action.payload, ...initialState ];
    case '[TODO] Remove Todo':
      const todoIdToDelete = action.payload; // id: 1
      return initialState.filter( todo => todo.id !== todoIdToDelete );
    case '[TODO] Toggle Todo':
      const todoIdToChangeToggle = action.payload; // id: 1
      return initialState.map( todo => {

        if (todo.id === todoIdToChangeToggle) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });
  
    default:
      return initialState;
  }

}