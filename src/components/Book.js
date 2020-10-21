import React from "react";
import bookCover from "../assets/dbcm.jpeg";

const Book = (props) => {
  console.log(props.singleBook);
  return (
    <article className="book">
      <div className="img-container">
        <img src={bookCover} alt="book" />
      </div>
      <div className='book-info'>
        <h4>{props.singleBook.title}</h4>
        <h6>Author(s) :<span>{props.singleBook.authors}</span>  </h6>
        <h6>Published :<span>{props.singleBook.publishedDate}</span> </h6>
      
      </div>
    </article>
  );
};

export default Book;

