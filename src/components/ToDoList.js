import React from 'react';
import TaskCard from "./TaskCard"

const ToDoList = (props) => {

    const renderToDoList = props.todos.map((todo) => {
        return (
            <TaskCard todo={todo}></TaskCard>
        );
    })
    return <div className="ui celled list">
        {renderToDoList}</div>;
}

export default ToDoList;
