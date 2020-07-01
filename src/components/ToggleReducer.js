const initialState = {
  names: "Search by",
  searchBy: "release_date",
  searchByOptions: [
    { value: "release_date", displayName: "Release date" },
    { value: "rating", displayName: "Rating" },
  ],
};

const ToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      return state.searchBy;
    default:
      return state;
  }
  return state;
};
export default ToggleReducer;
