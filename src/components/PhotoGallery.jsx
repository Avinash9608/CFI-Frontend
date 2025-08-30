import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [lightboxId, setLightboxId] = useState(null);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxId !== null) {
        if (e.key === "Escape") {
          setLightboxId(null);
        } else if (e.key === "ArrowRight") {
          const nextId = lightboxId < images.length - 1 ? lightboxId + 1 : 0;
          setLightboxId(nextId);
        } else if (e.key === "ArrowLeft") {
          const prevId = lightboxId > 0 ? lightboxId - 1 : images.length - 1;
          setLightboxId(prevId);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxId, images.length]);

  useEffect(() => {
    if (lightboxId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxId]);

  // Function to determine grid classes based on index
  const getGridClasses = (index) => {
    // Create a pattern that works well for 29 images
    const patterns = [
      "col-span-2 row-span-2", // Larger items for visual interest
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2", // Tall items
      "col-span-2 row-span-1", // Wide items
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-2", // Larger items
      "col-span-1 row-span-1",
      "col-span-1 row-span-2", // Tall items
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1", // Wide items
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2", // Tall items
      "col-span-1 row-span-1",
      "col-span-2 row-span-2", // Larger items
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2", // Tall items
      "col-span-2 row-span-1", // Wide items
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-2", // Larger items
      "col-span-1 row-span-2", // Tall items
      "col-span-1 row-span-1",
    ];

    return patterns[index % patterns.length] || "col-span-1 row-span-1";
  };

  if (loading) {
    return (
      <div className="grid grid-cols-6 grid-rows-6 gap-2 h-[calc(100vh-10px)] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div
        id="gallery"
        className="grid grid-cols-6 auto-rows-[minmax(100px,auto)] gap-2 min-h-[calc(100vh-10px)] p-4"
      >
        {images.map((image, index) => (
          <div
            key={image._id}
            className={`relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${getGridClasses(
              index
            )}`}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105"
            />
            <button
              className="absolute inset-0 flex items-center justify-center text-black bg-black font-bold text-2xl helvetica mix-blend-difference opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              style={{
                textShadow:
                  "0 -1px 5px #fff, -1px 0px 5px #fff, 0 1px 5px #fff, 1px 0px 5px #fff",
              }}
              onClick={() => setLightboxId(index)}
              aria-label={`View ${image.title} in lightbox`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>

      {lightboxId !== null && images[lightboxId] && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          style={{
            opacity: lightboxId !== null ? 1 : 0,
            pointerEvents: lightboxId !== null ? "auto" : "none",
          }}
          onClick={() => setLightboxId(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] group">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
              onClick={() => setLightboxId(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                const prevId =
                  lightboxId > 0 ? lightboxId - 1 : images.length - 1;
                setLightboxId(prevId);
              }}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                const nextId =
                  lightboxId < images.length - 1 ? lightboxId + 1 : 0;
                setLightboxId(nextId);
              }}
              aria-label="Next image"
            >
              ›
            </button>

            <img
              src={images[lightboxId].imageUrl}
              alt={images[lightboxId].title}
              className="w-full h-full object-contain max-h-[80vh] mx-auto transition-filter duration-300 ease-in-out"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">
                {images[lightboxId].title}
              </h3>
              {images[lightboxId].description && (
                <p className="text-gray-300">
                  {images[lightboxId].description}
                </p>
              )}
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-400">
                  {lightboxId + 1} of {images.length}
                </span>
                {images[lightboxId].category && (
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded">
                    {images[lightboxId].category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
