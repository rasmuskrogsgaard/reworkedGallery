// ParentComponent.js
import React, { useState, useEffect } from "react";
import Fetcher from "../utils/fetching";

const Frontend = () => {
  const [parentPhotos, setParentPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nature");
  const [startingPage, setStartingPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchQuery("");
    setStartingPage(1);
  }, []);

  const handleSearch = () => {
    setParentPhotos([]);
    setLoading(true);
  };

  const handleDataLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for photos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        <Fetcher
          setParentPhotos={(photos) => {
            setParentPhotos(photos);
            handleDataLoaded();
          }}
          searchQuery={searchQuery}
          startingPage={startingPage}
        />

        {loading ? (
          <div>Loading...</div>
        ) : (
          parentPhotos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="hover:opacity-70 object-cover w-full h-full"
                src={photo.src.original}
                alt={photo.photographer}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Frontend;
