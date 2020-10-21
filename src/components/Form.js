import React from "react";

const Form = (props) => {
  console.log(props)
  return (
    <section className='form-section'>
      <div className='form-center'>
        <form onSubmit={props.forForm}>
          <div className="form-group">
            <label>Book Search : </label>
            <br />
            <input
              type="text"
              placeholder="enter ISBN No."
              autoComplete="off"
              onChange={props.forInput}
            />
          </div>
          <button className="" type="submit">
            search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
