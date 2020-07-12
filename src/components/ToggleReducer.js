const initialState = {
  searchOptions: [
    { value: "release_date", displayName: "Release Date" },
    { value: "rating", displayName: "Rating" },
  ],
  sortOptions: [
    { value: "title", displayName: "Title" },
    { value: "genre", displayName: "Genre" },
  ],
  searchQuery: "",
};

//ACTION creator toggling button by user

export const toggleChange = (value) => {
  return{
    type: "TOGGLE_CHANGE",
    value,
  }
}

const ToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CHANGE":
      return{
      ...state,
      toggledSearch: action.searchOptions.value,
      toggledSort: action.sortOptions.value
      }
    default:
      return state;
  }
};

export const TOGGLE_CHANGE='TOGGLE_CHANGE';
export default ToggleReducer;
