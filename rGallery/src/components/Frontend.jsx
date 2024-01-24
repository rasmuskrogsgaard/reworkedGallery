// ParentComponent.js
import React, { useState } from "react";
import Fetcher from "../utils/fetching";
import { useEffect } from "react";

const Frontend = () => {
  const [parentPhotos, setParentPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startingPage, setStartingPage] = useState(1);

  useEffect(() => {
   
    setSearchQuery("");
    setStartingPage(1);
  }, []);


  const handleSearch = () => {
    setParentPhotos([]);
  };



  return (
    <div>
      <input
        type="text"
        placeholder="Search for photos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <Fetcher
        setParentPhotos={setParentPhotos}
        searchQuery={searchQuery}
        startingPage={startingPage}
      />

      {parentPhotos.map((photo) => (
        <img
          className="hover:opacity-70"
          key={photo.id}
          src={photo.src.original}
          alt={photo.photographer}
        />
      ))}
    </div>
  );
};

export default Frontend;
