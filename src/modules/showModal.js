const SHOWSEARCH = "SHOWSEARCH";
const SHOWLOGIN = "SHOWLOGIN";
const SHOWSIGNUP = "SHOWSIGNUP";
const CLOSEMODAL = "CLOSEMODAL";

export const showSearch = () => ({ type: SHOWSEARCH });
export const showLogin = () => ({ type: SHOWLOGIN });
export const showSignup = () => ({ type: SHOWSIGNUP });
export const closeModal = () => ({ type: CLOSEMODAL });

const initialState = 0;

function showModal(state = initialState, action) {
  switch (action.type) {
    case SHOWSEARCH:
      return (state = 1);
    case SHOWLOGIN:
      return (state = 2);
    case SHOWSIGNUP:
      return (state = 3);
    case CLOSEMODAL:
      return (state = 0);
    default:
      return state;
  }
}

export default showModal;
