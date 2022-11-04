import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "../../css/login.css";
import Logo from "../../image/logo.png";
import { GrClose } from "react-icons/gr";
import { FaFacebookF, FaApple } from "react-icons/fa";

const Backdrop = (props) => {
  return <div className="login-popup-background" onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="login-popup">
      <div className="login-logo">
        <img className="logo-icon" src={Logo} alt="wanted-logo" />
        <GrClose onClick={props.closeModal} id="closeIcon" size={20} />
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
        <div className="login-email">
          <p>이메일</p>
          <input className={props.checkEmail ? "input-email" : "input-email-false"} ref={props.inputRef} onChange={props.onChange} type="email" id="email" placeholder="이메일을 입력해 주세요." />
          {props.checkEmail ? "" : <small id="emailCheck">올바른 이메일을 입력해주세요.</small>}
        </div>
        <div className="panel-buttons">
          {props.emailSubmit ? <input type="submit" onClick={props.showSignup} className="email-login-button" value="이메일로 계속하기" /> : <input type="submit" onClick={props.showSignup} className="email-login-button-false" value="이메일로 계속하기" disabled="disabled" />}
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

function Login(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeModal={props.closeModal} checkEmail={props.checkEmail} inputRef={inputRef} onChange={props.onChange} emailSubmit={props.emailSubmit} showSignup={props.showSignup}/>, document.getElementById("overlay-root"))}
    </div>
  );
}

export default Login;
