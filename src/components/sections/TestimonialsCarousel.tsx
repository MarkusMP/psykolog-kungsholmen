import { ITestimonialsCarouselPayload } from "@/types/sections";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCarouselItem from "../other/TestimonialCarouselItem";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

const TestimonialsCarousel = ({
  testimonialItems,
  title,
}: ITestimonialsCarouselPayload) => {
  const [loaded, setLoaded] = useState(false);
  const [view, setview] = useState(1);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { ref: refView, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: {
      perView: 1,
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(max-width: 635px)": {
        slides: {
          perView: () => {
            setview(1);
            return 1;
          },
        },
      },
      "(min-width: 635px)": {
        slides: {
          perView: () => {
            setview(2);
            return 2;
          },
        },
      },
      "(min-width: 835px)": {
        slides: {
          perView: () => {
            setview(3);
            return 3;
          },
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: () => {
            setview(2);
            return 2;
          },
        },
      },
      "(min-width: 1184px)": {
        slides: {
          perView: () => {
            setview(3);
            return 3;
          },
        },
      },
    },
  });

  return (
    <section className="py-6" ref={refView}>
      <Transition
        show={inView}
        as="div"
        enter="transition-opacity duration-[800ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="max-w-full md:max-w-[75%]"
      >
        <h2 className="text-xl sm:text-2xl text-dark font-bold montserrat">
          {title && title}
        </h2>
      </Transition>

      <div
        className={`pr-0 pt-6 ${inView && "card-list"}`}
        style={{ overflowY: "visible" }}
      >
        <div
          ref={ref}
          className="keen-slider w-full "
          style={{ overflowY: "visible" }}
        >
          {testimonialItems &&
            testimonialItems.map((item, index) => (
              <TestimonialCarouselItem
                key={item._id}
                index={index}
                data={item}
              />
            ))}
        </div>
        {loaded &&
        instanceRef.current &&
        instanceRef.current.track.details.slides.length !== undefined &&
        instanceRef.current?.track.details.slides.length > view ? (
          <div className="dots">
            {[
              // @ts-ignore
              ...Array(
                view === 1
                  ? instanceRef.current?.track.details.slides.length
                  : view === 2
                  ? Math.ceil(
                      instanceRef.current?.track.details.slides.length / view
                    )
                  : view === 3
                  ? Math.ceil(
                      instanceRef.current?.track.details.slides.length / view
                    )
                  : 0
              ).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx * view);
                  }}
                  className={
                    "dot" +
                    (currentSlide >= idx * view &&
                    currentSlide < (idx + 1) * view
                      ? " active"
                      : "")
                  }
                ></button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
