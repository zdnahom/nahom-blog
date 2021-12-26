
import { createStore } from '../../package.json/redux'



const initialState={
    toDo:[],
    blogs:[]
}
const myReducer =(state=initialState,action)=>{
    if(action.type==='ADD_TODO'){
        return{
            todos:[...state.todos,action.todo]
        }
    }
}
const store=createStore(myReducer);
const todoAction={type:'ADD_TOO',todo:'Workout'}
store.dispatch(todoAction);
store.subscribe(()=>{
    console.log(store.getState())
})