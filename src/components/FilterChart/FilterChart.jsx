import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterChart.css";
import { useState } from "react";

const FilterChart = () => {
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [abvValue, setAbvValue] = useState("");
  const [abvCondition, setAbvCondition] = useState("");
  const handleAbvValue = (e) => {
    setAbvValue(e.target.value);
  };

  const handleStartDate = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDate = (date) => {
    setSelectedEndDate(date);
  };

  return {
    selectedStartDate,
    selectedEndDate,
    abvValue,
    abvCondition,
    render: (
      <div className="container">
        <div className="dateRangeContainer">
          <label className="datepicker__title">From</label>
          <DatePicker
            selected={selectedStartDate}
            onChange={(date) => handleStartDate(date)}
            showYearDropdown
            scrollableMonthYearDropdown
            className="dataInput"
          />

          <label className="datepicker__title">To</label>
          <DatePicker
            selected={selectedEndDate}
            onChange={(date) => handleEndDate(date)}
            showYearDropdown
            scrollableMonthYearDropdown
            className="dataInput"
          />
        </div>

        <div className="abvContainer">
          <div className="abvBox">
            <input
              className="dataInput"
              type="text"
              value={abvValue}
              onChange={handleAbvValue}
            />
          </div>
          <div className="radioBtn">
            <input
              type="radio"
              value="above"
              onClick={(e) => setAbvCondition(e.target.value)}
              name="abvrange"
            />
            <span>Above</span>
            <input
              type="radio"
              value="below"
              onClick={(e) => setAbvCondition(e.target.value)}
              name="abvrange"
            />
            <span>Below</span>
          </div>
        </div>
      </div>
    ),
  };
};

export default FilterChart;
