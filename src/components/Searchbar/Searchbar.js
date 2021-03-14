//import { render } from "@testing-library/react";
import { Component } from "react";

// class SearchBar extends Component {
//   //   loginInputId = shortid.generate();
//   //   numberInputId = shortid.generate();
//   //   objId = shortid.generate();
//   state = {
//     name: "",
//     number: "",
//   };
//   handleChange = (event) => {
//     console.log(event.currentTarget);
//     console.log(event.currentTarget.name);
//     console.log(event.currentTarget.value);

//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };
//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm">
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             type="text"
//             name="query"
//             className="SearchForm-input"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;

class SearchForm extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Искать</button>
      </form>
    );
  }
}

export default SearchForm;
