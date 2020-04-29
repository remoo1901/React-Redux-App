import React from "react";
import { connect } from "react-redux";
import { getDog } from "../actions/index";

function DogPic(props) {
  return (
    <div>
      {props.loading ? <h3>Loading</h3> : <div><img width="400px" height="400px" src={props.dog} alt="dog" /></div>}
      <button className="btn"
        onClick={() => {
          props.getDog();
        }}
      >
        Get Random Dog
      </button>
    </div>
  );
}

export default connect(
  state => {
    return { loading: state.loading, dog: state.dog };
  },
  { getDog }
)(DogPic);
