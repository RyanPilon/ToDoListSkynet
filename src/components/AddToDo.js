import React from 'react';

class AddToDo extends React.Component {
    render() {
        return(
            <div className="ui main">
                <h2>Add To Do</h2>
                <form className="ui form">
                    <div className="field">
                        <label>To Do</label>
                        <input type="text" name="to do" placeholder="To Do" />
                    </div>
                    <button className="ui button">Add</button>
                </form>
            </div>
        );
    }

}

export default AddToDo;
