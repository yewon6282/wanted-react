const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";
const CANCELALLBOOKMARK = "CANCELALLBOOKMARK";

export const doBookmark = (id) => ({ type: DOBOOKMARK, id });
export const cancelBookmark = (id) => ({ type: CANCELBOOKMARK, id });
export const cancelAllBookmark = () => ({ type: CANCELALLBOOKMARK });

const initialState = { bookmarkId: [] };

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case DOBOOKMARK:
      return { bookmarkId: [...state.bookmarkId, action.id] };
    case CANCELBOOKMARK:
      return { bookmarkId: state.bookmarkId.filter((e) => e !== action.id) };
    case CANCELALLBOOKMARK:
      return { bookmarkId: [...state.bookmarkId, []] };
    default:
      return (state = initialState);
  }
}

export default bookmarking;
