import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchTags from "../../json/searchTag.json";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import EveryTag from "../Atom/EveryTag";

const SearchResultTop = (props) => {
  const clickSearchNothing = () => {
    props.setSearchNothing(true);
  };

  const [randomNumList, setRandomNumList] = useState([]);
  const [finalNumList, setFinalNumList] = useState([]);
  const [newList, setNewList] = useState([]);

  const makeNumList = () => {
    let randomNum = Math.floor(Math.random() * searchTags.tags.length);
    setRandomNumList((prevRandomNumList) => [...prevRandomNumList, randomNum]);
  };

  useEffect(() => setRandomNumList([]), [props]);

  useEffect(() => {
    setNewList([]);
    props.setSearchNothing(false);
    if (props.id === -1) {
      props.setHasData(false);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, randomNumList]);

  const [showTags, setShowTags] = useState();
  const salaryLevel = searchTags.tags.filter((e) => e.category === "??????????????????");
  const investment = searchTags.tags.filter((e) => e.category === "??????");
  const personnelGrowth = searchTags.tags.filter((e) => e.category === "???????????????");
  const resignation = searchTags.tags.filter((e) => e.category === "?????????");
  const numOfPeople = searchTags.tags.filter((e) => e.category === "?????????");
  const businessYear = searchTags.tags.filter((e) => e.category === "??????");
  const workVacation = searchTags.tags.filter((e) => e.category === "??????????????");
  const compensation = searchTags.tags.filter((e) => e.category === "??????");
  const companyCulture = searchTags.tags.filter((e) => e.category === "????????????");
  const mealSnack = searchTags.tags.filter((e) => e.category === "??????????????");

  const showAllTags = () => {
    if (showTags) {
      setShowTags(false);
    } else {
      setShowTags(true);
    }
  };

  return (
    <>
      {props.searchNothing || props.id === -1 ? (
        <div className="main-tag-nothing">
          <p>????????? ????????? ????????? ???????????????!</p>
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
        <p>??????</p>
        <ul className="tags">
          {newList.map((list) => (
            <li key={list[0].id}>
              <Link className={list[0].id === props.id ? "choosed-tag" : "each-tag"} to={`/SearchResult/${list[0].id}`}>
                {list[0].tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showTags ? (
        <div onClick={showAllTags} className="show-all-filter-tags">
          <p>??????</p>
          <BsChevronUp size={10} />
        </div>
      ) : (
        <div onClick={showAllTags} className="show-all-filter-tags">
          <p>????????????</p>
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
};

export default SearchResultTop;
