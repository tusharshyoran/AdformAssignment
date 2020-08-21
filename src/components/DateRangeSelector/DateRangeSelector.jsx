import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import './DateRangeSelector.css';

const DateRangeSelector = (props) => {
  const { dateRange, showMonthDropdown, showYearDropdown, onChange } = props;
  const [dateError, setDateError] = useState(false);
  const [startDate, setStartDate] = useState(
    (dateRange && dateRange.startDate) || null
  );
  const [endDate, setEndDate] = useState(
    (dateRange && dateRange.endDate) || null
  );

  useEffect(() => {
    if (startDate && endDate && moment(endDate).isAfter(moment(startDate))) {
      setDateError(false);
      onChange({ startDate, endDate });
    } else if (startDate == null || endDate == null) {
      setDateError(false);
    } else {
      if (
        startDate &&
        endDate &&
        moment(endDate).isSameOrBefore(moment(startDate))
      ) {
        setDateError(true);
        onChange(null);
      }
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <DatePicker
        placeholderText="Start Date"
        selected={startDate}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        onChange={handleStartDateChange}
      />

      <div className={dateError ? 'date-error' : ''}>
        <DatePicker
          placeholderText="End Date"
          selected={endDate}
          showMonthDropdown={showMonthDropdown}
          showYearDropdown={showYearDropdown}
          onChange={handleEndDateChange}
        />
      </div>
      {dateError && (
        <span className="date-error-text">Please check the order of dates</span>
      )}
    </>
  );
};
DateRangeSelector.propTypes = {
  dateRange: PropTypes.object,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  onChange: PropTypes.func,
};
DateRangeSelector.defaultProps = {
  dateRange: { startDate: null, endDate: null },
  showMonthDropdown: true,
  showYearDropdown: true,
};

export default DateRangeSelector;
