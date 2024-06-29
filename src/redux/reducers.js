import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH } from "./actionTypes";

const intialState = {
    todos: [],
    filter: "ALL",
    searchTerm: "",
}

const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TODO: return{
            todos: [...state.todos, {text: action.payload, completed: false}],
            filter : state.filter,
            searchTerm: state.searchTerm
        }
        case TOGGLE_TODO: return{
            todos: state.todos.map((todo, index) => index === action.payload ? {...todo, completed: !todo.completed} : todo),
            filter : state.filter,
            searchTerm: state.searchTerm
        }
        case REMOVE_TODO: return{
            todos: state.todos.filter((todo, index) => index !== action.payload),
            filter : state.filter,
            searchTerm: state.searchTerm
        }
        case MARK_COMPLETED: return{
            todos: state.todos.map((todo, index) => index === action.payload ? {...todo, completed: true} : todo),
            filter : state.filter,
            searchTerm: state.searchTerm
        }
        case MARK_INCOMPLETE: return{
            todos: state.todos.map((todo, index) => index === action.payload ? {...todo, completed: false} : todo),
            filter : state.filter,
            searchTerm: state.searchTerm
        }
        case FILTER_TODOS: return{
            todos: state.todos,
            filter: action.payload,
            searchTerm: state.searchTerm
        }
        case UPDATE_SEARCH: return{
            todos: state.todos,
            filter: state.filter,
            searchTerm: action.payload
        }
        case MARK_ALL_COMPLETED: return{
            todos: state.todos.map((todo) => ({...todo, completed: true})),
            filter: state.filter,
            searchTerm: state.searchTerm

        }
            
    
        default:
            return state;
    }
}

export default todoReducer;