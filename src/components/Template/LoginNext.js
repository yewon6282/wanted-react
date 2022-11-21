import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { closeModal, showLogin } from "../../modules/showModal";
import { useDispatch } from "react-redux";
import "../../css/loginNext.css";
import SavedId from "../../json/SavedId.json";
import { BsChevronLeft } from "react-icons/bs";

const Backdrop = (props) => {
  return <div className="login-next-popup-background" onClick={props.closeEveryModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="login-next-popup">
      <div className="login-next-head">
        <BsChevronLeft className="prev-icon" onClick={props.backToLogin} />
        <p>이메일로 로그인</p>
      </div>
      <div className="login-next-content">
        <form onSubmit={props.submitHandler}>
          <div className="login-password">
            <p>비밀번호</p>
            <input className={props.formIsValid ? "input-password" : "input-password-false"} ref={props.inputRef} onChange={props.passwordChangeHandler} type="password" id="loginPassword" placeholder="비밀번호를 입력해주세요." />
            {props.formIsValid ? "" : <small id="passwordCheck">비밀번호가 일치하지 않습니다.</small>}
          </div>
          <input className={props.submitButtonIsValid ? "password-login-button" : "password-login-button-false"} type="submit" value="다음" disabled={!props.submitButtonIsValid} />
        </form>
        <div className="initialization-password">
          <p>비밀번호 초기화/변경</p>
        </div>
      </div>
    </div>
  );
};

const LoginNext = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const savedData = SavedId.SavedIds.filter((el) => el.id === props.inputEmail)[0].password;
  const [passwordValue, setPasswordValue] = useState();
  const [formIsValid, setFormIsValid] = useState(true);
  const [submitButtonIsValid, setSubmitButtonIsValid] = useState(false);

  const passwordChangeHandler = (event) => {
    setFormIsValid(true);
    setSubmitButtonIsValid(true);

    if (savedData === event.target.value) {
      setPasswordValue(event.target.value);
    }
  };

  const dispatch = useDispatch();

  const backToLogin = () => {
    dispatch(showLogin());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (passwordValue !== undefined) {
      props.onLogin(props.inputEmail, passwordValue);
      dispatch(closeModal());
    } else {
      setFormIsValid(false);
      setSubmitButtonIsValid(false);
    }
  };

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop closeEveryModal={props.closeEveryModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeEveryModal={props.closeEveryModal} inputRef={inputRef} backToLogin={backToLogin} passwordChangeHandler={passwordChangeHandler} formIsValid={formIsValid} submitButtonIsValid={submitButtonIsValid} submitHandler={submitHandler} />, document.getElementById("overlay-root"))}
    </div>
  );
};

export default LoginNext;
