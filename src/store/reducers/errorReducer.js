const initialState = {
  errorDisplay: false,
  errorMessage: "",
};

const errorReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "error/setError":
      if (action.payload) {
        return { ...state, errorDisplay: action.payload };
      } else {
        return { ...state, errorDisplay: action.payload, errorMessage: "" };
      }
    case "error/setErrorMessage":
      console.log(state);
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

export default errorReducer;

const setDashboards = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "app/setDashboards":
      return { ...state, dashboards: action.payload };

    default:
      return state;
  }
};

export const setDashboards1 = (payload) => ({
  type: "app/setDashboards",
  payload: payload,
});

export const setDashboards2 = () => ({
  type: "app/setDashboards",
  payload: true,
});
