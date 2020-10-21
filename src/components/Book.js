import React from "react";
import bookCover from "../assets/dbcm.jpeg";

const Book = (props) => {
  console.log(props.singleBook);
  return (
    <article className="book">
      <div className="img-container">
        <img src={bookCover} alt="book" />
      </div>
      <div>
        <h4>{props.singleBook.authors}</h4>
        <h6>{props.singleBook.title}</h6>
        <h6>{props.singleBook.publisher}</h6>
        <p>{props.singleBook.year}</p>
      </div>
    </article>
  );
};

export default Book;

// import React, {Component} from 'react';

// class Book extends Component{
//   render(){
//     return(
//       <div>
//         <h4>This is from Book Component</h4>
//       </div>
//     )
//   }
// }
// export default Book;
