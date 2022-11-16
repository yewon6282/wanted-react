const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";
const CANCELALLBOOKMARK = "CANCELALLBOOKMARK";

export const doBookmark = (id) => ({ type: DOBOOKMARK, id });
export const cancelBookmark = (id) => ({ type: CANCELBOOKMARK, id });
export const cancelAllBookmark = (id) => ({ type: CANCELALLBOOKMARK, id });

const initialState = [];

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case DOBOOKMARK:
      return state = [...state, action.id];
    case CANCELBOOKMARK:
      return state.filter((e) => e !== action.id);
    case CANCELALLBOOKMARK:
      return state = [];
    default:
      return state;
  }
}

export default bookmarking;
