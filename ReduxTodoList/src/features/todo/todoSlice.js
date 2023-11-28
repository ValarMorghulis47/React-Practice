import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'ValarMorghulis',   //slices have a name which appear in the redux dev tools in the chrome
    initialState,   //we have written the iniialstate above so we dont need to write it here
    reducers: {
        addTodo: (state, action) => {  //we can write the fucntions above and just use there reference here or write the whole function here.
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        toggleComplete: (state, action) => {
            state.todos= state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              )
        }   
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer