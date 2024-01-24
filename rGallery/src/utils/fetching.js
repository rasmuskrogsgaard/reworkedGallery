// Fetcher.js
import React, { useState, useEffect } from "react";

const Fetcher = ({ setParentPhotos }) => {
  const [photos, setPhotos] = useState([]);
  const apiKey = "EgGM3dGXhNdCCd6oG5cxop2VCNxtmzareICrg8qLfA7M2WgAxOZZ7U6x";
  const apiUrl = "https://api.pexels.com/v1/curated";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from Pexels API");
        }

        const data = await response.json();
        setPhotos(data.photos);
        setParentPhotos(data.photos);
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchData();
  }, [setParentPhotos]);

  return null; // You can return any component or null depending on your use case
};

export default Fetcher;
