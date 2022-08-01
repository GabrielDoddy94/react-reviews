import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

export function Review() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  function checkNumber(number: number) {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;

    return number;
  }

  function nextPerson() {
    setIndex(prevState => {
      const newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  function prevPerson() {
    setIndex(prevState => {
      const newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }

  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) randomNumber = index + 1;

    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}
