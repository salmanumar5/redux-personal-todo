import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH } from "./actionTypes"

export const addTodo = (text) => {
    return{
        type: ADD_TODO,
        payload:text
    }
}

export const toggleTodo = (id) => {
    return{
        type: TOGGLE_TODO,
        payload: id
    }
}

export const removeTodo = (id) => {
    return{
        type: REMOVE_TODO,
        payload: id
    }
}

export const markCompleted = (id) => {
    return{
        type: MARK_COMPLETED,
        payload: id
    }
}

export const markIncomplete = (id) => {
    return{
        type: MARK_INCOMPLETE,
        payload: id
    }
}

export const filterTodo = (filter) =>{
    return{
        type: FILTER_TODOS,
        payload: filter
    }
}

export const markAllCompleted = () => {
    return{
        type: MARK_ALL_COMPLETED,
    }
}

export const updateSearch = (searchTerm) => {
    return{
        type: UPDATE_SEARCH,
        payload: searchTerm
    }
}