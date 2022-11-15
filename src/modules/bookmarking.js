const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";

export const doBookmark = (id) => ({ type: DOBOOKMARK, id });
export const cancelBookmark = (id) => ({ type: CANCELBOOKMARK, id });

const initialState = [];

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case DOBOOKMARK:
      return state = [...state, action.id];
    case CANCELBOOKMARK:
      console.log(state.filter((e) => e !== action.id));
      return state.filter((e) => e !== action.id);
    default:
      return state;
  }
}

export default bookmarking;
