// ParentComponent.js
import React, { useState } from "react";
import Fetcher from "../utils/fetching";

const Frontend = () => {
  const [parentPhotos, setParentPhotos] = useState([]);

  return (
    <div class="grid grid-cols-3 m-auto gap-5">
      {/* Other components or UI elements */}
      <Fetcher setParentPhotos={setParentPhotos} />
      {/* Use parentPhotos in your component as needed */}
      {parentPhotos.map((photo) => (
        <img class="hover:opacity-70" key={photo.id} src={photo.src.original} alt={photo.photographer} />
      ))}
    </div>
  );
};

export default Frontend;
