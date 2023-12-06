import React from "react";
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";

const slides = [
  {
    icon: "build",
    text: "Building robust software solutions.",
  },
  {
    icon: "bug_report",
    text: "Expert at debugging complex issues.",
  },
  {
    icon: "palette",
    text: "User interface design and animation.",
  },
  {
    icon: "lock",
    text: "Implementing secure applications.",
  },
  {
    icon: "dns",
    text: "Dev ops and web infrastructure.",
  },
  {
    icon: "person",
    text: "Top-level communication skills.",
  },
  {
    icon: "terminal",
    text: "Coding advanced web applications.",
  },
];

export const Carousel = () => {
  const [options, setOptions] = React.useState<Options>({
    perPage: 5,
    arrows: true,
    pagination: true,
  });

  React.useEffect(() => {
    const handleResize = () => {
      // Update perPage based on screen width
      let perPageValue = 5;
      if (window.innerWidth < 600) {
        perPageValue = 2;
      } else if (window.innerWidth < 900) {
        perPageValue = 3;
      }
      // Update state only if perPage changes
      if (options.perPage !== perPageValue) {
        setOptions({ ...options, perPage: perPageValue });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [options]);

  return (
    <>
      <nav>My Skills</nav>
      <div className="wrapper">
        <div className="splide">
          <Splide options={options} aria-label="My Favorite Images">
            {slides.map((slide, index) => (
              <SplideSlide key={index}>
                <div className="slide">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};
