import { Header } from '../components/header/Header';
import { Form } from '../components/form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { useState } from 'react';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
      const newToDo: ToDo = {
        id: todos.length,
        text: text,
        isDone: false
      }
      setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
      const newToDos = todos.map((todo) => {
        if(todo.id === toDoItem.id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      setTodos(newToDos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
      const newToDos = todos.filter((todo) => todo.id !== toDoItem.id)
      setTodos(newToDos)
    }

  return (
    // <React.Fragment> (needs to import React from "react") eqv to <></>
    <>
        <Header/>
        <Form createNewToDo={createNewToDo}/>
        <ToDoList todos={todos} updateToDo={updateToDo}  deleteToDo={deleteToDo}/>
    </>
  )
}