import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "../../css/search.css";
import searchTags from "../../json/searchTag.json";
import { IoIosSearch } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { closeModal } from "../../modules/showModal";

const Backdrop = (props) => {
  return <div className="search" onClick={props.closeEveryModal}></div>;
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
            {props.newList.map((data, key) => (
              <li key={key}>
                <Link to={`/SearchResult/${data[0].id}`} onClick={props.selectTag} value={data[0].tag} style={{ backgroundColor: `${data[1].color}` }} className="filter-tag-button">
                  {data[0].tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Search = (props) => {
  const dispatch = useDispatch();

  const [randomNumList, setRandomNumList] = useState([]);
  const [finalNumList, setFinalNumList] = useState([]);
  const [newList, setNewList] = useState([]);
  const colors = [
    { id: 0, color: "#f0f8f8" },
    { id: 1, color: "#eeedf4" },
    { id: 2, color: "#e8edf3" },
    { id: 3, color: "#e9f4fb" },
    { id: 4, color: "#effbf3" },
  ];

  function makeNumList() {
    let randomNum = Math.floor(Math.random() * searchTags.tags.length);
    setRandomNumList((prevRandomNumList) => [...prevRandomNumList, randomNum]);
  }

  useEffect(() => {
    if (finalNumList.length < 5) {
      makeNumList();

      let randomNumber = new Set(randomNumList);
      setFinalNumList([...randomNumber]);
    } else {
      for (let i = 0; i < 5; i++) {
        let addColorList = searchTags.tags.filter((e) => e.id === finalNumList[i]).concat(colors[i]);
        setNewList((prevNewList) => [...prevNewList, addColorList]);
      }
    }
  }, [finalNumList, randomNumList]);

  function selectTag() {
    dispatch(closeModal);
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeEveryModal={props.closeEveryModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeEveryModal={props.closeEveryModal} newList={newList} selectTag={selectTag} />, document.getElementById("overlay-root"))}
    </>
  );
};

export default Search;
