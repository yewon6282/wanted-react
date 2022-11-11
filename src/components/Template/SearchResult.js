import React, { useEffect, useState } from "react";
import "../../css/searchResult.css";
import SearchResultTop from "../Organism/SearchResultTop";
import SearchResultBottom from "../Organism/SearchResultBottom";
import jobCard from "../../json/JobCard.json";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const [searchNothing, setSearchNothing] = useState();
  const location = useLocation();
  const [filteredData, setFilteredData] = useState([]);
  const [hasData, setHasData] = useState();

  useEffect(() => {
    if(jobCard.JobCards.filter((el) => el.companyTag.find((e) => e.tags.includes(location.state.tag))).length > 0) {
      setFilteredData([jobCard.JobCards.filter((el) => el.companyTag.find((e) => e.tags.includes(location.state.tag)))]);
      setHasData(true);
    } else {
      setHasData(false);

    }
  }, [location.state.tag]);

  return (
    <main>
      <SearchResultTop id={location.state.id} tag={location.state.tag} searchNothing={searchNothing} setSearchNothing={setSearchNothing}/>
      <SearchResultBottom filteredData={filteredData} hasData={hasData} searchNothing={searchNothing}/>
    </main>
  );
}

export default SearchResult;
