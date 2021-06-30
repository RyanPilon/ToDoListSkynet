import React from 'react';

class AddToDo extends React.Component {
    state = {
        task:"",
    };

        add = (event) => {
            event.preventDefault();
            if (this.state.task === ""){
                alert("Task input is mandatory:).");
                return
            }
            this.props.addTaskHandler(this.state);
            this.setState({ task: ""});
        }
    render() {
        return(
            <div className="ui main">
                <h2>Add To Do</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>To Do</label>
                        <input
                            type="text"
                            name="to do"
                            placeholder="To Do"
                            value={this.state.task}
                            onChange={ (event) => this.setState({task: event.target.value})} 
                            />
                    </div>
                    <button className="ui button">Add</button>
                </form>
            </div>
        );
    }

}

export default AddToDo;
