import React, {useState} from "react";
import ToDoForm from "./ToDoForm";

const ToDoListAdd = () => {
    const [todos, setTodos]= useState("");

    return(
        <div>
            <ToDoForm></ToDoForm>
        </div>
    )

}

export default ToDoListAdd;