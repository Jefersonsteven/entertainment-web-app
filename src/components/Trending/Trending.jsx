import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Trending.scss";

function Trending() {
  const data = useSelector((state) => state.app.trending);
  const containerRef = useRef(null);
  const [dragStart, setDragStart] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  function handleMouseDown(e) {
    e.preventDefault();
    setDragStart(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    if (dragStart !== null) {
      const delta = e.clientX - dragStart;
      containerRef.current.scrollLeft = scrollLeft - delta;
    }
  }

  function handleMouseUp(e) {
    e.preventDefault();
    setDragStart(null);
    setScrollLeft(null);
  }

  return (
    <div className="Trending">
      <h2>Trending</h2>
      <div
        className="Trending__container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {data?.map((item) => {
          return (
            <Card
              className="CardTrending"
              key={item?.title}
              title={item?.title}
              year={item?.year}
              category={item?.category}
              rating={item?.rating}
              thumbnail={item?.thumbnail}
              isBookmarked={item?.isBookmarked}
              isTrending={item.isTrending}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Trending };
