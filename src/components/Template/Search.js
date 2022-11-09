import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../css/search.css";
import searchTags from "../../json/searchTag.json";
import jobCard from "../../json/JobCard.json";
import { IoIosSearch } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";

const Backdrop = (props) => {
  return <div className="search" onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="search-background">
      <div className="search-bar">
        <form>
          <IoIosSearch size={20} id="searchIcon" />
          <input placeholder="#태그, 회사, 포지션 검색"></input>
        </form>
        <div className="recommend-tag">
          <div className="smaill-title">
            <span>추천태그로 검색해보세요</span>
            <div>
              <span id="toTagPage">기업태그 홈 이동하기</span>
              <BsChevronRight size={12} />
            </div>
          </div>
          <ul>
            {props.newList.map((first, key) => (
              <li key={key}>
                <button onClick={(e) => props.filtering(e.target.value)} className="filter-tag-button" style={{ backgroundColor: `${first[1].color}` }} value={first[0].tag}>
                  {first[0].tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function Header(props) {
  const [randomNumList, setRandomNumList] = useState([]);
  const [newList, setNewList] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const colors = [
    { id: 0, color: "#f0f8f8" },
    { id: 1, color: "#eeedf4" },
    { id: 2, color: "#e8edf3" },
    { id: 3, color: "#e9f4fb" },
    { id: 4, color: "#effbf3" },
  ];

  function makeNumList() {
    let randomNum = Math.floor(Math.random() * 28) + 1;
    setRandomNumList((prevRandomNumList) => [...prevRandomNumList, randomNum]);
  }

  useEffect(() => {
    if (finalList.length < 5) {
      makeNumList();

      let randomNumber = new Set(randomNumList);
      setFinalList([...randomNumber]);
    } else {
      for (let i = 0; i < 5; i++) {
        let addColorList = searchTags.tags.filter((e) => e.id === finalList[i]).concat(colors[i]);
        setNewList((prevNewList) => [...prevNewList, addColorList]);
      }
    }
  }, [randomNumList]);
  console.log(newList);

  const [filterdData, setFilteredData] = useState([]);
  function filtering(tag) {
    setFilteredData([jobCard.JobCards.filter((el) => el.companyTag.find((e) => e.tags.includes(tag)))]);
  }
  console.log(filterdData);

  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeModal={props.closeModal} newList={newList} filtering={filtering} />, document.getElementById("overlay-root"))}
    </>
  );
}

export default Header;
