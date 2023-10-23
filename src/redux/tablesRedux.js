//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api'

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id === id); 

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

//action creators 
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload});

export const fetchTables = () => {
  return (dispatch) => {
      fetch(API_URL + '/tables')
          .then(res => res.json())
          .then(tables => {
              dispatch(updateTables(tables));
          })
          .catch((error) => {
              console.error(error);
          })
  };
};

export const editTableRequest = (updateTables) => {
  return (dispatch) => {
    if(updateTables.status === 'Free'){
      updateTables.peopleAmount = 0;
      updateTables.maxPeopleAmount = 0;
    }
    const options = {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTables)
    } 
    fetch(API_URL + '/tables/' + updateTables.id, options)
            .then(() => dispatch(editTable(updateTables)))
  }
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};
export default tablesReducer;