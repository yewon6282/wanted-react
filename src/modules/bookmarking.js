const DOBOOKMARK = "DOBOOKMARK";
const CANCELBOOKMARK = "CANCELBOOKMARK";

export const doBookmark = () => ({ type: DOBOOKMARK });
export const cancleBookmark = () => ({ type: CANCELBOOKMARK });

const initialState = [{ value: "" }];

function bookmarking(state=initialState, action) {
  switch(action.type) {
    case DOBOOKMARK :
      return state;
    case CANCELBOOKMARK :
      return state;
    default :
      return state;
  }
}

export default bookmarking;