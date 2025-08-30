import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import Gallery from "../components/Gallery";
import Gallery1 from "../components/Gallery1";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-lg">
      <section className="text-center my-12">
        <Hero />
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          PhotoGallery
        </h2>

        <PhotoGallery />
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Photo Gallery
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Gallery />
          </div>
          <div className="flex-1">
            <Gallery />
          </div>
        </div>
      </section>

      <section className="my-12">
        <Gallery1 />
      </section>
    </div>
  );
};

export default Home;
