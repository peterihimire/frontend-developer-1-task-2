import React from "react";

const Form = (props) => {
  console.log(props);
  return (
    <section className="form-section">
      <div className="form-center">
        <div className="form-container">
          <form onSubmit={props.forForm}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter ISBN No."
                autoComplete="off"
                onChange={props.forInput}
              />
            </div>
            <button className="" type="submit">
              search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
