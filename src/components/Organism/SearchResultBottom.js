import React from "react";
import SearchResultTag from "../Atom/SearchResultTag";

function SearchResultBottom(props) {
  return (
    <>
      <div className="searched-result">
        <div className="searched-company-list">
          {props.hasData && !props.searchNothing ? (
            <ul>
              {props.filteredData[0].map((data) => (
                <li key={data.id} className="company-item">
                  <div className="company-item-card">
                    <div className="company-card-header">
                      <img src="https://static.wanted.co.kr/images/wdes/851_5_logo_globe.jpg" alt="text" />
                      <p>{data.jobCompanyName}</p>
                      <button>팔로우</button>
                    </div>
                    <div className="company-tag-list">
                      <SearchResultTag companyTag={data.companyTag} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-result">태그 검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResultBottom;
