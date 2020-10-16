
const reducers = (state = [], action) => {
    switch(action.type){
        default: 
            return state;
        case 'REGISTER_CLIENT':
            return{
                ...state,
                clients: action.payload,
            }
        }
}

export default reducers;