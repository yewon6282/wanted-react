import React, { useEffect, useReducer, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { showLoginNext, showSignup } from "../../modules/showModal";
import "../../css/login.css";
import Logo from "../../image/logo.png";
import SavedId from "../../json/SavedId.json";
import { GrClose } from "react-icons/gr";
import { FaFacebookF, FaApple } from "react-icons/fa";

const Backdrop = (props) => {
  return <div className="login-popup-background" onClick={props.closeEveryModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="login-popup">
      <div className="login-logo">
        <img className="logo-icon" src={Logo} alt="wanted-logo" />
        <GrClose onClick={props.closeEveryModal} id="closeIcon" size={20} />
      </div>
      <div className="login-content">
        <div className="login-comment">
          <h1>
            직장인을 위한 <br />
            커리어 플랫폼, 원티드!
          </h1>
          <h2>
            커리어 성장과 행복을 위한 여정 <br />
            지금 원티드에서 시작하세요.
          </h2>
        </div>
        <form onSubmit={props.submitHandler}>
          <div className="login-email">
            <p>이메일</p>
            <input className={props.emailIsValid ? "input-email" : "input-email-false"} ref={props.inputRef} onChange={props.emailChangeHandler} type="email" id="email" placeholder="이메일을 입력해 주세요." />
            {props.emailIsValid ? "" : <small id="emailCheck">올바른 이메일을 입력해주세요.</small>}
          </div>
          <input type="submit" className={props.emailBtnDisabled ? "email-login-button" : "email-login-button-false"} value="이메일로 계속하기" disabled={!props.emailBtnDisabled} />
        </form>
        <div className="login-else">
          <p>or</p>
          <div className="continue-next-account">다음 계정으로 계속하기</div>
          <div className="another-social-buttons">
            <div className="social-button">
              <div className="kakao-button">
                <i className="fa-sharp fa-solid fa-comment fa-lg"></i>
              </div>
              <p>Kakao</p>
            </div>
            <div className="social-button">
              <div className="facebook-button">
                <FaFacebookF size={20} />
              </div>
              <p>Facebook</p>
            </div>
            <div className="social-button">
              <div className="google-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1920px-Google_%22G%22_Logo.svg.png" alt="google-icon" />
              </div>
              <p>Google</p>
            </div>
            <div>
              <div className="apple-button">
                <FaApple size={20} />
              </div>
              <p>Apple</p>
            </div>
          </div>
        </div>
        <p className="popup-bottom-comment">
          걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
          <br />
          회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
        </p>
      </div>
    </div>
  );
};

const emailReducer = (state, action) => {
  const emailCheck = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  if (action.type === "EMAIL_INPUT") {
    return { value: action.val, isValid: emailCheck.test(action.val), btnDisabled: emailCheck.test(action.val) };
  }
  return { value: "", isValid: false, btnDisabled: false };
};

function Login(props) {
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: true, btnDisabled: false });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (SavedId.SavedIds.filter((el) => el.id === emailState.value).length === 0) {
      dispatch(showSignup());
    } else {
      dispatch(showLoginNext());
    }
    props.setInputEmail(emailState.value);
  };

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop closeEveryModal={props.closeEveryModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeEveryModal={props.closeEveryModal} inputRef={inputRef} submitHandler={submitHandler} emailIsValid={emailState.isValid} emailBtnDisabled={emailState.btnDisabled} emailChangeHandler={emailChangeHandler} />, document.getElementById("overlay-root"))}
    </div>
  );
}

export default Login;
