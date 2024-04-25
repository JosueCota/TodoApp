import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){


    const [todos, setTodos] = useState([]);

    let totalTodos = todos.length;
    let completedTodos = todos.filter(todo => {
        return todo.done
    }).length;

    return <div>
        <Form setTodos={setTodos} todos={todos}></Form>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>

}