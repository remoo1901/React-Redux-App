import axios from "axios";

export const setEditTrue = () => {
  return { type: "EDITING" };
};

export const setEditFalse = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "DONE_EDITING" });
    }, 7000);
  };
};

export const getDog = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        dispatch({ type: "NEW_DOG", payload: res.data.message });
      })
      .catch((err) => console.log("ERROR", err));
  };
};
