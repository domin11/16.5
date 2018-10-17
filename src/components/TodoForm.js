import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: '',
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

  }
  onSubmitHandler(event) {
    event.preventDefault();
    const data = this.state.inputForm;
    this.props.add(this.state.inputForm);
  }
  onChange(event) {
    console.log(event.target.value);
    this.setState({inputForm: event.target.value});
  }

  render() {
    return (
      <div className={style.TodoForm}>
          <form onSubmit={this.onSubmitHandler}>
          <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)}/>
          <button>Add task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
