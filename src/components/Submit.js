import React, { Component } from 'react'

let list = [];

class Submit extends Component {
  state = {
    input: "",
    record: "",
  }

  change = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  }

  submit = () => {
    this.setState({
      record: this.state.input,
      input: "",
    });
    list.push(this.state.input);
  }

  done = (index) => {
    this.setState({
      record: this.state.input,
    });
    list.splice(index, 1);
  }

  click = async ()  => {
    await this.submit();
  }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.change} value={this.state.input}/>
        <button onClick={this.click} className="button">Submit</button>
        {list.map((name, index) => {
            return <p>{list[index]}<button onClick={() => this.done(index)} className="done">Done</button></p>
          })}
      </div>

    )
  }
}

export default Submit
