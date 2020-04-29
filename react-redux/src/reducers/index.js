const initialState = {
  title: "here's the title",
  editing: false,
  loading: false,
  dog: "https://images.dog.ceo/breeds/poodle-toy/n02113624_681.jpg",
};

export const  titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDITING":
      return { ...state, editing: true };

    case "DONE_EDITING":
      return { ...state, editing: false };

    case "LOADING":
      return { ...state, loading: true };

    case "NEW_DOG":
      return { ...state, dog: action.payload };

    default:
      return state;
  }
};
