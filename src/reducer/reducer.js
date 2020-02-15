export const initialState = {
  loading: false,
  error: false,
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "success":
    case "sortByName":
    case "sortByStrength":
      return { ...state, error: false, loading: false, data: action.payload };
    default:
      return state;
  }
};
