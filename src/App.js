// USED REACT-HOOK USE-STATE FOR STATE MANAGEMENT

import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
// import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Form from "./components/Form";

const App = (props) => {
  // For Menu Handler
  const [menuState, setMenuState] = useState({
    isOpen: false,
  });

  const openHandler = () => {
    setMenuState({
      isOpen: !menuState.isOpen,
    });
  };
  const closeHandler = () => {
    setMenuState({
      isOpen: false,
    });
  };

  // For Form-Result
  const [bookState, setBookState] = useState({
    bookOne: "",
  });
  const [booksState, setBooksState] = useState({
    books: [],
  });
  // Form Input Handler
  const changeHandler = (e) => {
    e.preventDefault();

    const bookg = e.target.value;

    setBookState({ bookOne: bookg });
    console.log(bookg);
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${bookState.bookOne}`
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
        setBooksState(() => {
          return {
            books: booksData,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <>
        <Navbar openMenu={openHandler} />
        <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
        <Banner />
        <Form forInput={changeHandler} forForm={submitHandler} />
        <BookList bookInfo={booksState.books} />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default App;

//  USED CLASS BASED COMPONENT FOR STATE MANAGEMENT

// import React, { Component } from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// // import Footer from "./components/Footer";
// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import MobileNav from "./components/MobileNav";
// import Form from "./components/Form";

// class App extends Component {
//   state = {
//     books: [],
//     sortedBooks: [],
//     loading: true,
//     bookOne: "",
//     isOpen: false,
//   };

//   // menu handler
//   openHandler = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//   closeHandler = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };

//   // Form submit Handler
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(bookOne);

//     fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.bookOne}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         let bookList = data.items.map((item) => {
//           let id = item.id;
//           let authors = item.volumeInfo.authors;
//           let rating = item.volumeInfo.averageRating;
//           let categories = item.volumeInfo.categories;
//           let description = item.volumeInfo.description;
//           let language = item.volumeInfo.language;
//           let pageCount = item.volumeInfo.pageCount;
//           let publishedDate = item.volumeInfo.publishedDate;
//           let publisher = item.volumeInfo.publisher;
//           let title = item.volumeInfo.title;

//           let book = {
//             authors,
//             id,
//             rating,
//             categories,
//             description,
//             language,
//             pageCount,
//             publishedDate,
//             publisher,
//             title,
//           };
//           console.log(book);
//           return book;
//         });
//         // console.log(bookList)
//         return bookList;
//       })

//       .then((booksData) => {
//         console.log(booksData);
//         this.setState(() => {
//           return {
//             books: booksData,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   // Form input Handler
//   handleChange = (event) => {
//     event.preventDefault();
//     const bookg = event.target.value;

//     this.setState({ bookOne: bookg });
//     console.log(bookg);
//   };

//   render() {
//     return (
//       <>
//         <Navbar openMenu={this.openHandler} />
//         <MobileNav
//           closeMenu={this.closeHandler}
//           openState={this.state.isOpen}
//         />
//         <Banner />
//         <Form forInput={this.handleChange} forForm={this.handleSubmit} />
//         <BookList bookInfo={this.state.books} />
//         {/* <Footer /> */}
//       </>
//     );
//   }
// }

// export default App;

// USED REACT-HOOK USEEFFECT IN THIS SECTION

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import MobileNav from "./components/MobileNav";

// const App = (props) => {
//   // For Menu Handler
//   const [menuState, setMenuState] = useState({
//     isOpen: false,
//   });

//   const openHandler = () => {
//     setMenuState({
//       isOpen: !menuState.isOpen,
//     });
//   };
//   const closeHandler = () => {
//     setMenuState({
//       isOpen: false,
//     });
//   };

//   // For Book Result
//   const [booksState, setBooksState] = useState({
//     books: [],
//   });

//   // Get Books Handler
//   const getBooks = (e) => {
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         let bookList = data.items.map((item) => {
//           let id = item.id;
//           let authors = item.volumeInfo.authors;
//           let rating = item.volumeInfo.averageRating;
//           let categories = item.volumeInfo.categories;
//           let description = item.volumeInfo.description;
//           let language = item.volumeInfo.language;
//           let pageCount = item.volumeInfo.pageCount;
//           let publishedDate = item.volumeInfo.publishedDate;
//           let publisher = item.volumeInfo.publisher;
//           let title = item.volumeInfo.title;

//           let book = {
//             authors,
//             id,
//             rating,
//             categories,
//             description,
//             language,
//             pageCount,
//             publishedDate,
//             publisher,
//             title,
//           }; 
//           console.log(book);
//           return book;
//         });
//         // console.log(bookList)
//         return bookList;
//       })

//       .then((booksData) => {
//         console.log(booksData);
//         setBooksState(() => {
//           return {
//             books: booksData,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getBooks();
//   }, []);

//   return (
//     <div>
//       <>
//         <Navbar openMenu={openHandler} />
//         <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
//         <Banner />
//         <BookList bookInfo={booksState.books} />
//       </>
//     </div>
//   );
// };

// export default App;

// // USED CLASS-BASED COMPONENT-DID-MOUNT FOR THIS SECTION

// import React, { Component } from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import MobileNav from "./components/MobileNav";

// class App extends Component {
//   state = {
//     books: [],
//     isOpen: false,
//   };

//   // menu handler
//   openHandler = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//   closeHandler = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };

//   // Form submit Handler
//   getBooks = () => {
//     // console.log(bookOne);

//     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         let bookList = data.items.map((item) => {
//           let id = item.id;
//           let authors = item.volumeInfo.authors;
//           let rating = item.volumeInfo.averageRating;
//           let categories = item.volumeInfo.categories;
//           let description = item.volumeInfo.description;
//           let language = item.volumeInfo.language;
//           let pageCount = item.volumeInfo.pageCount;
//           let publishedDate = item.volumeInfo.publishedDate;
//           let publisher = item.volumeInfo.publisher;
//           let title = item.volumeInfo.title;

//           let book = {
//             authors,
//             id,
//             rating,
//             categories,
//             description,
//             language,
//             pageCount,
//             publishedDate,
//             publisher,
//             title,
//           };
//           console.log(book);
//           return book;
//         });
//         // console.log(bookList)
//         return bookList;
//       })

//       .then((booksData) => {
//         console.log(booksData);
//         this.setState(() => {
//           return {
//             books: booksData,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   componentDidMount() {
//     this.getBooks();
//   }

//   render() {
//     return (
//       <>
//         <Navbar openMenu={this.openHandler} />
//         <MobileNav
//           closeMenu={this.closeHandler}
//           openState={this.state.isOpen}
//         />
//         <Banner />
//         <BookList bookInfo={this.state.books} />
//         {/* <Footer /> */}
//       </>
//     );
//   }
// }

// export default App;
// 0747532699
// 9783161484100
