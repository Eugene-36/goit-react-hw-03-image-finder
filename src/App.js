import { Component } from "react";
import "./App.css";

//todo: Третье  дз Phone book

// import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/Filter/ContactList/ContactList";
// import Properties from "./components/Form/justcheck";

//import axios from "axios";
import getFetch from "./servecies/pexelsApi";
import SearchForm from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImagGalleryItem/ImagGalleryItem";
import Articles from "./components/ArticlesView/Articles";
import NewsApi from "./servecies/news-api";
const { fetchArticles } = NewsApi;
console.log(fetchArticles);
//getFetch("moto", 2).then((photos) => console.log(photos));
console.log(SearchForm);
//const { getFetch } = x;
//getFetch("moon", 1).then((photos) => console.log(photos));

class App extends Component {
  state = {
    query: "moto",
    page: 1,
    formObject: null,
    gallery: [],
    msg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`Я обновился`, this.state.query);
    const { query, page } = this.state;

    getFetch(query, page).then((photos) => console.log(photos));
    // .then((result) => {
    //   console.log(result.json());
    //   console.log(result);

    //   if (result.length) {
    //     this.setState((prev) => ({
    //       gallery: [...prev.gallery, ...result],
    //     }));
    //   } else {
    //     this.setState({ msg: "Nothing to show by your request" });
    //     alert(this.state.msg);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  getFormObject = (obj) => {
    this.setState({
      formObject: obj,
    });
  };

  getQuery = (query) => {
    console.log(query);
    this.setState({ query });
  };
  formSubmitHandler = (data) => {
    console.log(data);
    const newGallery = this.state.gallery.gallery(data);
    this.setState((prevState) => {
      return { ...prevState, gallery: newGallery };
    });
  };
  render() {
    const { gallery } = this.state;
    return (
      <div className="App">
        <SearchForm onSubmit={this.formSubmitHandler} />
        <ImageGallery />
        <ImageGalleryItem gallery={gallery} />
        <Articles />
        {/* <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
          <Properties newProp={convey} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContact} onDelete={this.deletContact} />
        </div> */}
      </div>
    );
  }
}

export default App;
