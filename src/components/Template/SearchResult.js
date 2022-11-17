import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/searchResult.css";
import SearchResultTop from "../Organism/SearchResultTop";
import SearchResultBottom from "../Organism/SearchResultBottom";
import jobCard from "../../json/JobCard.json";
import searchTags from "../../json/searchTag.json";

function SearchResult() {
  const params = useParams();
  const tagsId = Number(params.SearchedResult);
  const filterTags = searchTags.tags.filter((el) => el.id === tagsId);
  const tagsTag = filterTags.map((el) => el.tag).join();
  const [searchNothing, setSearchNothing] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [hasData, setHasData] = useState();

  useEffect(() => {
    console.log(params);
    filteringData();
  }, [params]);

  function filteringData() {
    if (jobCard.JobCards.filter((el) => el.companyTag.find((e) => e.tags.includes(tagsTag))).length > 0) {
      setFilteredData([jobCard.JobCards.filter((el) => el.companyTag.find((e) => e.tags.includes(tagsTag)))]);
      setHasData(true);
    } else {
      setHasData(false);
    }
  }

  return (
    <main>
      <SearchResultTop id={tagsId} tag={tagsTag} searchNothing={searchNothing} setSearchNothing={setSearchNothing} setHasData={setHasData}/>
      <SearchResultBottom filteredData={filteredData} hasData={hasData} searchNothing={searchNothing} />
    </main>
  );
}

export default SearchResult;
