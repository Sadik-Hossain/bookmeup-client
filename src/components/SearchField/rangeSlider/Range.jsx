import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import PropTypes from "prop-types";
import "./range.css";
import { SearchContext } from "../../../context/SearchContext";

const Range = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="c mt-5 mb-4 py-1">
      <input
        type="range"
        min={min}
        max={max}
        // step={100}
        value={minVal}
        onChange={(event) => {
          // const value = Math.min(Number(event.target.value), maxVal - 100);
          const value = Math.min(Number(event.target.value), maxVal - 100);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        // step={100}
        value={maxVal}
        onChange={(event) => {
          // const value = Math.max(Number(event.target.value), minVal + 100);
          const value = Math.max(Number(event.target.value), minVal + 100);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value text-sm">min: ${minVal}</div>
        <div className="slider__right-value text-sm">max: ${maxVal}</div>
      </div>
    </div>
  );
};

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Range;
