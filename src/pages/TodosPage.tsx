import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {

    const todos = useSelector((state:RootState) => state.test.todos);
    return (
    <React.Fragment>
      <TodoForm  />
        <TodoList
        todos={todos}
      />
    </React.Fragment>
  )
}
