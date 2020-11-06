import React from "react";
import Book from "../components/Book";

const BookList = (props) => {
  console.log(props.bookInfo)
  return (
    <section className="booklist">
      <div className="booklist-center">
        <div className="booklist-container">
          {props.bookInfo.map(book => {
            console.log(book, book.id)
            return <Book key={book.id} singleBook={book} />
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
