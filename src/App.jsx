import React from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [current, setCurrent] = React.useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-10">
        Project 1: Carrousel
      </h2>
      <div className="flex justify-evenly items-center">
        <div
          className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.25 6.75L4.75 12L10.25 17.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 12H5"
            ></path>
          </svg>
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div
                key={image}
                className="w-full max-w-2xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={image}
                    alt="Carrousel image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
        )}
        <div
          className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.75 6.75L19.25 12L13.75 17.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 12H4.75"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
