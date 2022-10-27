import React from "react";
import { useLocation } from "react-router-dom";
import JobDetailImage from "../Atom/JobDetailImage";

function DevelopDetailTopLeft({ warning, warningOn, warningOff }) {
  const location = useLocation();

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
          <button>#식비</button>
          <button>#사내식당</button>
          <button>#어린이집</button>
          <button>#건강검진</button>
          <button>#의료비</button>
          <button>#인공지능</button>
          <button>#IT, 컨텐츠</button>
        </div>
        <div className="about-company">
          [회사소개]
          <br />
          카카오픽코마는 작품과 독자의 연결을 통해 독자에게는 일상의 즐거움을, 콘텐츠 산업에서는 작품의 가치가 더욱 빛날 수 있는 세상을 만들고자 합니다. 세계 최대의 일본 만화 시장과 프랑스에서 디지털 만화, 소설 플랫폼 '픽코마'를 전개하고 있으며, 나아가 작품이 국경을 초월하여 보다 넓은 세상의 독자들과 만날 수 있는 세계를 꿈꾸고 있습니다.
          <br />
          <br />
          [조직소개]
          <br />
          카카오픽코마 한국오피스 Global개발그룹은 독자적인 S/W 개발 역량을 갖추어 여러가지 새로운 가능성들을 현실화할 수 있는 조직이 되고자 하는 목표를 가지고 있습니다. 조금 더 구체적으로는, 성공적인 서비스 런칭과 성장을 목표로 S/W 개발을 주요 업무로 하는 곳입니다. 픽코마 서비스로 신 시장을 개척하여 전 세계 사람들이 만화를 보며 행복해지는 꿈을 꿉니다. 그래서 함께 고민하고 처음부터 다시
          만들어나가는 마음가짐으로 도전하고 성장하는 인재를 찾고 있습니다.
          <br />
          <br />
          주요업무
          <br />
          [어떤 역할을 해주셔야 하나요]
          <br />
          <br />
          이런 일을 합니다
          <br />
          • 이미지 컨텐츠를 매끄럽게 고객에게 제공합니다
          <br />
          • 신규 요구사항을 분석하고 설계하여 개발합니다
          <br />
          • 기존 서버 API들을 재 사용하는 공수 최적화 설계합니다
          <br />
          • 재 사용성을 극대화 하는 UI 컴포넌트 및 상태 설계합니다
          <br />
          • 설계, 개발, 빌드, 배포 파이프라인을 구축합니다
          <br />
          <br />
          이런 마음가짐이 필요합니다
          <br />
          • 장인 또는 리더로 성장 할 다짐
          <br />
          • 어려운 문제는 함께 고민하고, 쉬운 문제는 능동적으로 해결
          <br />
          • 빠른 기술 변화에 대한 적극적인 학습 태도
          <br />
          • 동료의 성장을 도울 수 있다는 믿음
          <br />
          <br />
          자격요건
          <br />
          이런 경험이 필요합니다
          <br />
          • JavaScript 또는 TypeScript 사용 경험이 있으신 분<br />
          • 순수 HTML & CSS에 대한 경험이 있으신 분<br />
          • 모던 웹 프레임워크 / 라이브러리 1개 이상 사용 경험이 있으신 분<br />
          • 모던 웹 상태 관리 개념 및 원리를 잘 알고 계신 분<br />
          • 모던 CSS 속성 사용 경험이 있으신 분<br />
          • 비동기 호출을 위한 네트워크 모듈(XHR, Web Fetch) 에 대한 이해 및 경험이 있으신 분<br />
          • 해외 출장에 결격 사유가 없는 분<br />
          <br />
          우대사항
          <br />
          이런 경험이 있다면 더더욱 좋습니다
          <br />
          • 성능 이슈, 메모리 누수, 네트워크 프로파일링 경험이 있으신 분<br />
          • UI 컴포넌트 테스팅 경험이 있으신 분<br />
          • SSR / CSR 방식 등 다양한 렌더링을 사용하여 웹 어플리케이션 개발 경험이 있으신 분<br />
          • Next.js, Tailwind CSS 사용 경험이 있으신 분<br />
          • Atomic Design에 대해 알고계신 분<br />
          • AWS ECS / Cloudfront에 대해 경험이 있으신 분<br />
          • 오픈소스 기여 경험이 있으신 분<br />
          <br />
          혜택 및 복지
          <br />
          • 파격적인 안식 휴가 제공: 3년 근무 시, 30일 유급휴가 및 200만원의 휴가비를 지원해 드립니다.
          <br />
          • 업무 도서 지원: 업무에 필요하거나 도움이 될 수 있는 도서 구매를 전액 지원받을 수 있습니다. <br />
          • 매월 식비 지원: 사내식당 점심 지원 및 분기별 30만원 씩 기본 연봉과 별도로 포인트 형태로 지급해 드립니다.
          <br />
          • 종합 건강 검진 지원: 매년 1회 건강검진을 시행하며, 검진비용을 지원해 드립니다.
          <br />
          • 카카오 어린이집 운영: 추첨을 통해 원아를 모집하고 있습니다.
          <br />
          • 경조사 지원: 본인/배우자/가족 등의 경조사에 대한 경조사비/화환/용품 등을 지원해 드립니다.
          <br />
          • 가족 상해 보험 지원: 본인, 배우자, 자녀, 본인과 배우자의 부모까지 보장성 보험료와 실손의료비를 지원해 드립니다.
          <br />
          <br />
          [전형안내]
          <br />
          서류 전형 ＞1차 인터뷰 ＞ 2차 인터뷰 ＞ 처우 협의 ＞ 최종 합격
          <br />
          <br />
          * 직무 및 상황에 따라 전형 절차는 변경될 수 있습니다.
          <br />* 지원서 내용 중 허위사실이 있는 경우에는 합격이 취소될 수 있습니다.
        </div>
        <div className="technology-stack-tool">
          기술스택 · 툴
          <div className="technology-stack-tool-type">
            <p>Git</p>
            <p>iOS</p>
            <p>C / C++</p>
            <p>HTML</p>
            <p>Java</p>
            <p>JavaScript</p>
            <p>Kotlin</p>
            <p>ObjectiveC</p>
            <p>Python</p>
            <p>TypeScript</p>
            <p>MVVM</p>
            <p>AWS</p>
            <p>C++</p>
            <p>Jenkins</p>
            <p>NoSQL</p>
            <p>NodeJS</p>
            <p>Spring Framework</p>
            <p>GCP</p>
            <p>KOL 개발</p>
          </div>
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
            <img src="https://static.wanted.co.kr/images/wdes/0_5.df97857f.png" alt="카카오픽코마" />
            <div>
              <h5>카카오픽코마</h5>
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
            {warning ? (
              <div className="angle-up-icon" id="angle-up-icon" onClick={warningOff}>
                <i className="fa-solid fa-angle-up"></i>
              </div>
            ) : (
              <div className="angle-down-icon" id="angle-down-icon" onClick={warningOn}>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            )}
          </div>
          {warning && (
            <div className="stealing-warning-bottom" id="stealing-warning-bottom">
              <p>
                본 채용 정보는 카카오픽코마에서 제공한 자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로 사용될 수 없습니다. 원티드랩은
                카카오픽코마에서 게재한 자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다. &lt; 저작권자 (주)원티드랩. 무단전재-재배포금지 &gt;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DevelopDetailTopLeft;
