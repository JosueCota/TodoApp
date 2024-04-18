import { useState } from "react"
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo(){


    const [todos, setTodos] = useState([]);

   

    return <div>
        <Form setTodos={setTodos} todos={todos}></Form>
        <div>
            {todos.map(todo =>
                <TodoItem key={`${todo}${Math.random()}`} todo={todo}/>
            )}
        </div>
    </div>

}