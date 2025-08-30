import React, { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [postActive, setPostActive] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}/api/gallery`);
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

  const handleImageClick = (index, e) => {
    if (activeImage !== null) return;

    const imgElement = e.currentTarget;
    const rect = imgElement.getBoundingClientRect();
    const galleryRect = galleryRef.current.getBoundingClientRect();

    setActiveImage({
      index,
      width: rect.width,
      height: rect.height,
      left: rect.left - galleryRect.left,
      top: rect.top - galleryRect.top,
      src: images[index].imageUrl,
    });
  };

  const handleCloseActiveImage = () => {
    if (activeImage) {
      setPostActive(activeImage);
      setActiveImage(null);

      setTimeout(() => {
        setPostActive(null);
      }, 500);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeImage && !e.target.closest(".img-c.active")) {
        handleCloseActiveImage();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeImage]);

  if (loading) {
    return (
      <div className="p-[30px_0] relative flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-[30px_0] relative">
      <div
        ref={galleryRef}
        className="gallery w-[600px] mx-auto rounded overflow-hidden relative"
      >
        {images.slice(10, 19).map((image, index) => (
          <div
            key={image._id || index}
            className={`img-c float-left relative overflow-hidden transition-all duration-400 ease-in-out
              ${activeImage?.index === index ? "active" : ""}
              ${postActive?.index === index ? "postactive" : ""}`}
            style={{
              width: activeImage?.index === index ? "100%" : "200px",
              height: activeImage?.index === index ? "100%" : "200px",
              left: activeImage?.index === index ? "0" : "",
              top: activeImage?.index === index ? "0" : "",
              zIndex: activeImage?.index === index ? 2 : "",
              position:
                activeImage?.index === index || postActive?.index === index
                  ? "absolute"
                  : "relative",
            }}
          >
            <div
              className="img-w w-full h-full bg-cover bg-center cursor-pointer transition-transform duration-300 ease-in-out"
              style={{ backgroundImage: `url(${image.imageUrl})` }}
              onClick={(e) => handleImageClick(index, e)}
            >
              <img src={image.imageUrl} alt={image.title} className="hidden" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .img-c {
          transition: width ease 400ms, height ease 350ms,
            left cubic-bezier(0.4, 0, 0.2, 1) 420ms,
            top cubic-bezier(0.4, 0, 0.2, 1) 420ms;
        }

        .img-c:hover .img-w {
          transform: scale(1.08);
          transition: transform cubic-bezier(0.4, 0, 0.2, 1) 450ms;
        }

        .img-c.active {
          width: 100% !important;
          height: 100% !important;
          position: absolute;
          z-index: 2;
        }

        .img-c.postactive {
          position: absolute;
          z-index: 2;
          pointer-events: none;
        }

        .img-c.active.positioned {
          left: 0 !important;
          top: 0 !important;
          transition-delay: 50ms;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
