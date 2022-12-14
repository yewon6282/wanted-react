import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobDetailImage from "../Atom/JobDetailImage";
import JobDetailTag from "../Atom/JobDetailTag";
import TechnologyStack from "../Atom/TechnologyStack";
import AboutCompany from "../Atom/AboutCompany";

const DevelopDetailTopLeft = (props) => {
  const location = useLocation();
  const [stack, setStack] = useState(false);

  useEffect(() => {
    if (location.state.technologyStack === undefined) {
      setStack(false);
    } else {
      setStack(true);
    }
  }, [location.state.technologyStack]);

  return (
    <div>
      <div className="develop-detail-image">
        <JobDetailImage imgAddress={location.state.imgAddress} imgAlt={location.state.imgAlt} />
      </div>
      <div className="develop-detail-middle">
        <span className="develop-detail-category">{location.state.category}</span>
        <div className="develop-detail-company">
          <span className="develop-detail-company-name">{location.state.companyName}</span>
          <div className="develop-job-card-hover">
            <div className="develop-job-card">{location.state.responseRate}</div>
            <span className="develop-job-card-massage">{location.state.responseMessage}</span>
          </div>
          <div className="company-location">{location.state.companyLocation}</div>
        </div>
        <div className="company-benefits">
          <JobDetailTag companyTag={location.state.companyTag} />
        </div>
        <div className="about-company">
          <AboutCompany companyIntroduction={location.state.companyIntroduction} />
          {stack ? (
            <div className="technology-stack-tool">
              기술스택 · 툴
              <div className="technology-stack-tool-type">
                <TechnologyStack technologyStack={location.state.technologyStack} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="jobs-information">
          <div className="jobs-deadline">
            <span>마감일</span>
            <p>상시</p>
          </div>
          <div className="jobs-region">
            <span>근무지역</span>
            <p>경기도 성남시 분당구 판교역로 152 알파돔타워 11층</p>
          </div>
        </div>
        <div className="company-information">
          <div className="company-information-block">
            <img src={location.state.companyImage} alt={location.state.companyName} />
            <div>
              <h5>{location.state.companyName}</h5>
              <h6>IT, 컨텐츠</h6>
            </div>
          </div>
          <button>팔로우</button>
        </div>
        <div className="stealing-warning">
          <div className="stealing-warning-top">
            <div className="stealing-warning-top-left">
              <div className="exclamation-icon">
                <i className="fa fa-exclamation" aria-hidden="true"></i>
              </div>
              <p>
                본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의
                <br />
                용도로 사용할 수 없습니다.
              </p>
            </div>
            {props.warning ? (
              <div className="angle-up-icon" id="angle-up-icon" onClick={props.warningOff}>
                <i className="fa-solid fa-angle-up"></i>
              </div>
            ) : (
              <div className="angle-down-icon" id="angle-down-icon" onClick={props.warningOn}>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            )}
          </div>
          {props.warning && (
            <div className="stealing-warning-bottom" id="stealing-warning-bottom">
              <p>
                본 채용 정보는 <span>{location.state.companyName}</span>에서 제공한 자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로 사용될 수
                없습니다. 원티드랩은 <span>{location.state.companyName}</span>에서 게재한 자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다. &lt; 저작권자 (주)원티드랩. 무단전재-재배포금지 &gt;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevelopDetailTopLeft;
