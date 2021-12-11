import moment, { Moment } from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectDate } from '../../redux/action-creators/selectedDate';

interface DayProps {
  day: number;
  active: boolean;
  date: Moment | null;
}

const Day: React.FC<DayProps> = ({ day, active, date }) => {
  const dispatch = useDispatch();

  const checkIfIsCurrentDate = () => {
    return moment().format('L') === date?.format('L');
  };

  const handleSelectDate = () => {
    dispatch(selectDate(date?.format('L').split('/').join('-') as string));
  };

  return (
    <button
      className="day-cell"
      onClick={handleSelectDate}
      disabled={!active}
      data-is-current-date={checkIfIsCurrentDate()}>
      {day}
    </button>
  );
};

export default Day;
