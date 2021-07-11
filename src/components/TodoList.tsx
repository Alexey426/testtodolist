import React from 'react'
import { ITodo } from '../interfaces'
import {useDispatch} from "react-redux";
import {removeTodo} from "../redux/testSlice";

type TodoListProps = {
  todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
}) => {
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="center">Пока событий нет!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    dispatch(removeTodo(id));
  }
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label style={{ backgroundColor: Date.now() > todo.id ? '#ffe5e5' : '#e3ffe3' }}>
              <span
              className="truncate-text">
                {todo.title}
              </span>
              <strong>{new Date(todo.id).toLocaleDateString()}</strong>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      }
      )
      }
    </ul>
  )
}
