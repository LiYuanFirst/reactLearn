import {createStore, combineReducers} from 'redux';
import {SET_NAME,ADD_AGE} from '../action'
//创建存储
function reducer1(state = {name:'blue',age:18},action){
    console.log(action)
    switch (action.type) {
        case SET_NAME:
            let newState = {
                ...state,
                name:action.name
            }
            return newState;
            break;
        case ADD_AGE:
            return{
                ...state,
                age:state.age+action.age
            }
            break;

        default:
            return state
            break;
    }
    
    
}
function reducer2(state = {name:'company',age:18},action){
    console.log(action)
    switch (action.type) {
        case SET_NAME:
            let newState = {
                ...state,
                name:action.name
            }
            return newState;
            break;
        case ADD_AGE:
            return{
                ...state,
                age:state.age+action.age
            }
            break;

        default:
            return state
            break;
    }
    
    
}

let arr = combineReducers({
    user:reducer1,
    company:reducer2
})

//2.创建存储对象
export default createStore(arr);

