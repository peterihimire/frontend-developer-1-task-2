import React, { Component } from "react";
import "./App.css";
// import Banner from './components/Banner';
// import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

class App extends Component {
  state = {
    books: [],
    sortedBooks: [],
    loading: true,
    bookOne: "",
  };

  // For the form submit
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(bookOne);

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.bookOne}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let bookList = data.items.map((item) => {
          let id = item.id;
          let authors = item.volumeInfo.authors;
          let rating = item.volumeInfo.averageRating;
          let categories = item.volumeInfo.categories;
          let description = item.volumeInfo.description;
          let language = item.volumeInfo.language;
          let pageCount = item.volumeInfo.pageCount;
          let publishedDate = item.volumeInfo.publishedDate;
          let publisher = item.volumeInfo.publisher;
          let title = item.volumeInfo.title;

          let book = {
            authors,
            id,
            rating,
            categories,
            description,
            language,
            pageCount,
            publishedDate,
            publisher,
            title,
          };
          console.log(book);
          return book;
        });
        // console.log(bookList)
        return bookList;
      })

      .then((booksData) => {
        console.log(booksData);
        this.setState(() => {
          return {
            books: booksData,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  // For the form input
  handleChange = (event) => {
    event.preventDefault();
    const bookg = event.target.value;

    this.setState({ bookOne: bookg });
    console.log(bookg);
  };

  render() {
    return (
      <>
        <Navbar />
        <Form forInput={this.handleChange} forForm={this.handleSubmit} />
        <BookList bookInfo={this.state.books} />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;

// const getBook = () => {
//   fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}')
//     .then(response => console.log(response))
// }
// getBook()
// return (
//   <div className="App">

//   </div>
// );
// 0747532699
// 9783161484100

// getBooks = () => {
//   fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let bookList = data.items[0];
//       console.log(bookList.volumeInfo.authors);

//       let id = bookList.id;
//       let authors = bookList.volumeInfo.authors;
//       let rating = bookList.volumeInfo.averageRating;
//       let categories = bookList.volumeInfo.categories;
//       let description = bookList.volumeInfo.description;
//       let language = bookList.volumeInfo.language;
//       let pageCount = bookList.volumeInfo.pageCount;
//       let publishedDate = bookList.volumeInfo.publishedDate;
//       let publisher = bookList.volumeInfo.publisher;
//       let title = bookList.volumeInfo.title;
//       let image = bookList.volumeInfo.imageLinks.thumbnail;

//       let book = {
//         authors,
//         id,
//         rating,
//         categories,
//         description,
//         language,
//         pageCount,
//         publishedDate,
//         publisher,
//         title,
//         image,
//       };
//       console.log(book);
//       return book;

//       // const books = bookList.map((item) => {
//       //   let id = item.id;
//       //   let authors = item.volumeInfo.authors;
//       //   let rating = item.volumeInfo.averageRating;
//       //   let categories = item.volumeInfo.categories;cod
//       //   let description = item.volumeInfo.description;
//       //   let language = item.volumeInfo.language;
//       //   let pageCount = item.volumeInfo.pageCount;
//       //   let publishedDate = item.volumeInfo.publishedDate;
//       //   let publisher = item.volumeInfo.publisher;
//       //   let title = item.volumeInfo.title;
//       //   let image = item.volumeInfo.imageLinks.thumbnail;

//       //   let book = {
//       //     authors,
//       //     id,
//       //     rating,
//       //     categories,
//       //     description,
//       //     language,
//       //     pageCount,
//       //     publishedDate,
//       //     publisher,
//       //     title,
//       //     image,
//       //   };
//       //   console.log(book);
//       //   return book;
//       // });
//       // return books;
//     })
//     .then((booksData) => {
//       console.log(booksData);
//       this.setState(() => {
//         return {
//           books: booksData,
//         };
//       });
//     })
//     .catch((err) => console.log(err));
// };

// componentDidMount() {
//   this.getBooks();
// }
