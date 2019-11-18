import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search profile"></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
