// Crea una "store" en el proyecto
import { createStore, combineReducers } from 'redux';
import loginReducer from './Login/LoginReducer';


// Creación de los reducers
const myReducers = combineReducers({
    loginReducer
});

export default () => {
    return {
        // Se devuelve un objeto que incluye el "store" creado con "createStore()"
        // que recibe como parámetros los "reducers" e información adicional ("Middleware")
        // Se incluye una línea para utilizar la extensión Redux DevTools
        ...createStore(myReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
    }
};

