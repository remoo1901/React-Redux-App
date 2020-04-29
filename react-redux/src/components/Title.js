import React, { useState } from "react";
import { connect } from "react-redux";
import { setEditTrue, setEditFalse } from "../actions/index";

function Title(props) {
  const { newTitleText, setNewTitleText } = useState("");

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1
          onClick={() => {
            props.setEditTrue();
          }}
        >
          {props.title}
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              props.setEditFalse();
            }}
          >
            Update title
          </button>
        </div>
      )}
      {props.loading ? <h1>LOADING</h1> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    editing: state.editing,
  };
};

const mapDispatchToProps = {
  setEditTrue: setEditTrue,
  setEditFalse: setEditFalse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
