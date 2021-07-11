import React, { useRef } from 'react'
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/testSlice";

interface TodoFormProps {


}

export const TodoForm: React.FC<TodoFormProps> = props => {

  const ref = useRef<HTMLInputElement>(null);
  const dispatch =useDispatch();
  const keyPressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
          dispatch(addTodo({
              title: ref.current!.value,
              id: Date.now() + 604800000,
          }))
          ref.current!.value = '';
      }
  }
  return (
    <div className="input-field mt2">
      <input
          ref={ref}
        type="text"
        id="title"
        placeholder="Введите название события"
        maxLength={120}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название события
      </label>

    </div>
  )
}
