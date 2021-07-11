import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../interfaces";

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        todos: [
            {
                title: 'Прогулка',
                id: 1593629008000,
            },
            {
                title: 'Футбольный матч',
                id: 1326164213000,
            }
        ],
    },

    reducers: {
        clearEvents: (state) => {
           state.todos = [];
        },
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state,action: PayloadAction <number>) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }

    },
})
export const { clearEvents, addTodo, removeTodo } = testSlice.actions
export default testSlice.reducer
