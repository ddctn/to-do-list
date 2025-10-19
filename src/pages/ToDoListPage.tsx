import { Header } from '../components/header/Header';
import { Form } from '../components/form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';

export const ToDoListPage = () => {
  return (
    // <React.Fragment> (needs to import React from "react") eqv to <></>
    <>
        <Header/>
        <Form/>
        <ToDoList/>
    </>
  )
}