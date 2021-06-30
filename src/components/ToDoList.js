import React from 'react';
import TaskCard from "./TaskCard"

const ToDoList = (props) => {

        const deleteTaskHandler = (id) => {
            props.getTaskId(id);
        };

    const renderToDoList = props.todos.map((task) => {
        return (
            <TaskCard
                task={task}
                clickHandler={deleteTaskHandler}
                key= {task.id}
                ></TaskCard>
        );
    })
    return <div className="ui celled list">
        {renderToDoList}</div>;
}

export default ToDoList;
