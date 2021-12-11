import React from 'react';
import moment from 'moment';

import Day from './Day';

import { months } from '../../helpers/calendar';

import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

const Calendar = () => {
  const [date, setDate] = React.useState(moment());

  const handleLeftClick = () => {
    setDate(date.clone().subtract(1, 'month'));
  };

  const handleRightClick = () => {
    setDate(date.clone().add(1, 'month'));
  };

  const getRenderDaysArray = () => {
    let visibleDays = [];
    let startDateOfMonth = date.clone().startOf('month');
    let tempDate = startDateOfMonth.clone().subtract(1, 'days');
    let dayOfWeek = startDateOfMonth.isoWeekday() - 1;

    while (dayOfWeek) {
      tempDate = startDateOfMonth.clone().subtract(dayOfWeek, 'days');

      visibleDays.push({
        day: tempDate.date(),
        date: null,
        active: false,
      });

      dayOfWeek--;
    }

    tempDate?.add(1, 'days');

    while (tempDate?.month() === date.month()) {
      visibleDays.push({
        day: tempDate.date(),
        date: tempDate.clone(),
        active: true,
      });
      tempDate?.add(1, 'days');
    }

    while (tempDate.isoWeekday() !== 1) {
      visibleDays.push({
        day: tempDate.date(),
        date: null,
        active: false,
      });
      tempDate?.add(1, 'days');
    }

    return visibleDays;
  };

  return (
    <div className="calendar">
      <div className="months-wrapper">
        <div className="left-arrow" onClick={handleLeftClick}>
          <img src={leftArrow} alt="left-arrow" />
        </div>
        <div className="current-date-wrapper">
          <span>
            {months[date.month()]} {date.year()}
          </span>
        </div>
        <div className="right-arrow" onClick={handleRightClick}>
          <img src={rightArrow} alt="left-arrow" />
        </div>
      </div>

      <div className="days-wrapper">
        {getRenderDaysArray().map((visibleDay, index) => (
          <Day day={visibleDay.day} active={visibleDay.active} date={visibleDay.date} key={index} />
        ))}
      </div>

      <div className="daysOfWeek-wrapper">
        <div>MO</div>
        <div>TU</div>
        <div>WE</div>
        <div>TH</div>
        <div>FR</div>
        <div>SA</div>
        <div>SU</div>
      </div>
    </div>
  );
};

export default Calendar;
