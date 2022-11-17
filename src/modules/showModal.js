const SHOWSEARCH = "SHOWSEARCH";
const SHOWLOGIN = "SHOWLOGIN";
const SHOWSIGNUP = "SHOWSIGNUP";
const SHOWLOGINNEXT = "SHOWLOGINNEXT";
const CLOSEMODAL = "CLOSEMODAL";

export const showSearch = () => ({ type: SHOWSEARCH });
export const showLogin = () => ({ type: SHOWLOGIN });
export const showSignup = () => ({ type: SHOWSIGNUP });
export const showLoginNext = () => ({ type: SHOWLOGINNEXT });
export const closeModal = () => ({ type: CLOSEMODAL });

const initialState = 0;

function showModal(state = initialState, action) {
  switch (action.type) {
    case SHOWSEARCH:
      return (state = 1);
    case SHOWLOGIN:
      return (state = 2);
    case SHOWLOGINNEXT:
      return (state = 3);
    case SHOWSIGNUP:
      return (state = 4);
    case CLOSEMODAL:
      return (state = 0);
    default:
      return state;
  }
}

export default showModal;
