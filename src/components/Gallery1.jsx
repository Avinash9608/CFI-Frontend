import React, { useState, useEffect } from "react";

const Gallery1 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.BASE_URL}/api/gallery`);
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
        <h1 className="relative mb-12 font-['Oswald'] text-4xl md:text-5xl uppercase text-gray-800">
          Gallery
        </h1>

        <div className="gallery-wrap flex w-full h-[70vh] rounded-lg overflow-hidden shadow-xl">
          {images.slice(0, 7).map((image) => (
            <div
              key={image._id}
              className="item flex-1 h-full bg-center bg-cover bg-no-repeat transition-all duration-800 ease-in-out cursor-pointer hover:flex-[7]"
              style={{ backgroundImage: `url(${image.imageUrl})` }}
              aria-label={image.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
