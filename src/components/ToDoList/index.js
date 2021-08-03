import React, {useState} from "react"; 

const ToDoList = (props) => {
    const [input, setInput]= useState("");

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit= (event) => {
        event.PreventDefault();
   
    //     props.onSubmit({
    //     text:input
    // });
    setInput("");
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a To Do" value={input} name="text" onChange={onChangeHandler}/>
            <button>AddList</button>
        </form>

    )

}

export default ToDoList;