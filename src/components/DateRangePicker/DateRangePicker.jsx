import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.css";
import { useState } from "react";
import { format } from "date-fns";

const DateRangePicker = () => {
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [abvValue, setAbvValue] = useState("");
  const [aboveAbv, setAboveAbv] = useState(false);
  const [belowAbv, setBelowAbv] = useState(false);
  const handleAbvValue = (e) => {
    setAbvValue(e.target.value);
  };

  const handleStartDate = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDate = (date) => {
    setSelectedEndDate(date);
  };

  //   selectedStartDate && console.log(format(selectedStartDate, "MM/yyyy"));
  //   selectedEndDate && console.log(format(selectedEndDate, "MM/yyyy"));
  return (
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
          <input type="radio" value="Below" name="abvrange" />
          <span>Above</span>
          <input type="radio" value="Above" name="abvrange" />
          <span>Below</span>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
