import React, { useEffect, useState } from "react";
import searchTags from "../../json/searchTag.json";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import EveryTag from "../Atom/EveryTag";

function SearchResultTop(props) {
  function clickSearchNothing() {
    props.setSearchNothing(true);
  }

  const [randomNumList, setRandomNumList] = useState([]);
  const [finalNumList, setFinalNumList] = useState([]);
  const [newList, setNewList] = useState([]);

  function makeNumList() {
    let randomNum = Math.floor(Math.random() * searchTags.tags.length) + 1;
    setRandomNumList((prevRandomNumList) => [...prevRandomNumList, randomNum]);
  }

  useEffect(() => {
    setNewList([]);
    props.setSearchNothing(false);
    if (props.id === -1) {
      if (finalNumList.length < 5) {
        makeNumList();

        let randomNumber = new Set(randomNumList);
        setFinalNumList([...randomNumber]);
      } else if (finalNumList.includes(props.id)) {
        setFinalNumList(finalNumList.filter((e) => e !== props.id));

        makeNumList();
      } else {
        for (let i = 0; i < 5; i++) {
          let filterSearchTags = searchTags.tags.filter((e) => e.id === finalNumList[i]);
          setNewList((prevNewList) => [...prevNewList, filterSearchTags]);
        }
      }
    } else {
      if (finalNumList.length < 4) {
        makeNumList();

        let randomNumber = new Set(randomNumList);
        setFinalNumList([...randomNumber]);
      } else if (finalNumList.includes(props.id)) {
        setFinalNumList(finalNumList.filter((e) => e !== props.id));

        makeNumList();
      } else {
        setNewList((prevNewList) => [...prevNewList, searchTags.tags.filter((e) => e.id === props.id)]);
        for (let i = 0; i < 4; i++) {
          let filterSearchTags = searchTags.tags.filter((e) => e.id === finalNumList[i]);
          setNewList((prevNewList) => [...prevNewList, filterSearchTags]);
        }
      }
    }
  }, [randomNumList, props.id]);
  console.log(newList);

  const [showTags, setShowTags] = useState();
  const salaryLevel = searchTags.tags.filter((e) => e.category === "업계연봉수준");
  const investment = searchTags.tags.filter((e) => e.category === "투자");
  const personnelGrowth = searchTags.tags.filter((e) => e.category === "인원성장률");
  const resignation = searchTags.tags.filter((e) => e.category === "퇴사율");
  const numOfPeople = searchTags.tags.filter((e) => e.category === "인원수");
  const businessYear = searchTags.tags.filter((e) => e.category === "업력");
  const workVacation = searchTags.tags.filter((e) => e.category === "근무·휴가");
  const compensation = searchTags.tags.filter((e) => e.category === "보상");
  const companyCulture = searchTags.tags.filter((e) => e.category === "기업문화");
  const mealSnack = searchTags.tags.filter((e) => e.category === "식사·간식");

  function showAllTags() {
    if (showTags) {
      setShowTags(false);
    } else {
      setShowTags(true);
    }
  }

  return (
    <>
      {props.searchNothing || props.id === -1 ? (
        <div className="main-tag-nothing">
          <p>태그를 선택해 기업을 찾아보세요!</p>
        </div>
      ) : (
        <div className="main-tag-name">
          <p>{props.tag}</p>
          <Link
            to="/SearchResult/-1"
            state={{
              id: -1,
              tag: -1,
            }}
          >
            <GrClose onClick={clickSearchNothing} id="cancelChoose" size={13} />
          </Link>
        </div>
      )}
      <div className="recommend-tags">
        <p>추천</p>
        <ul className="tags">
          {newList.map((list) => (
            <li key={list[0].id}>
              <Link
                className={list[0].id === props.id && !props.searchNothing ? "choosed-tag" : "each-tag"}
                to={`/SearchResult/${list[0].id}`}
                state={{
                  id: list[0].id,
                  tag: list[0].tag,
                }}
              >
                {list[0].tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showTags ? (
        <div onClick={showAllTags} className="show-all-filter-tags">
          <p>닫기</p>
          <BsChevronUp size={10} />
        </div>
      ) : (
        <div onClick={showAllTags} className="show-all-filter-tags">
          <p>전체보기</p>
          <BsChevronDown size={10} />
        </div>
      )}
      {showTags ? (
        <div className="all-filter-tags">
          <EveryTag everyTagCategory={salaryLevel} />
          <EveryTag everyTagCategory={investment} />
          <EveryTag everyTagCategory={personnelGrowth} />
          <EveryTag everyTagCategory={resignation} />
          <EveryTag everyTagCategory={numOfPeople} />
          <EveryTag everyTagCategory={businessYear} />
          <EveryTag everyTagCategory={workVacation} />
          <EveryTag everyTagCategory={compensation} />
          <EveryTag everyTagCategory={companyCulture} />
          <EveryTag everyTagCategory={mealSnack} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SearchResultTop;
