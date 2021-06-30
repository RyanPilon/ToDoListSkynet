import React from "react";

const TaskCard = (props) => {
    const { id, task } = props.task;
    return(
        <div className="item">
                <div className="content">
                    <div className="header">{task}</div>
                </div>
                <i 
                    className="trash alternate outline icon"
                        style={{ color:"red", marginTop:"7px" }}
                    onClick={() => props.clickHandler(id)}
                ></i>
            </div>
    );
}

export default TaskCard;
