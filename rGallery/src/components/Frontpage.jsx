// ParentComponent.js
import React, { useState, useEffect } from "react";
import Fetcher from "../utils/fetching";

<<<<<<< HEAD:rGallery/src/components/Frontpage.jsx
const Frontpage = () => {
=======

const Frontend = () => {
>>>>>>> 6b9653aa5fc50103ad149d44c1e2ac9e01718db7:rGallery/src/components/Frontend.jsx
  const [parentPhotos, setParentPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nature");
  const [startingPage, setStartingPage] = useState("1");
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setSearchQuery("");
    setStartingPage(1);
  }, []);

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setParentPhotos([]);
    setLoading(true);
  };

  const handleDataLoaded = () => {
    setLoading(false);
  };

  return (
    <>
<<<<<<< HEAD:rGallery/src/components/Frontpage.jsx


      {/*Search Nav  */}

      <ul class="flex flex-row">
        <input
          type="text"
          placeholder="Search for photos..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </ul>
=======
      <input
        
        type="text"
        placeholder="Search for photos..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button class="inline-block cursor-pointer" onClick={handleSearch}>Search</button>
>>>>>>> 6b9653aa5fc50103ad149d44c1e2ac9e01718db7:rGallery/src/components/Frontend.jsx
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

export default Frontpage;
