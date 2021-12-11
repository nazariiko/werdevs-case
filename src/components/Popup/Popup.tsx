import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypesSelector';
import { selectDate } from '../../redux/action-creators/selectedDate';
import { months } from '../../helpers/calendar';

const Popup = () => {
  const { selectedDate } = useTypedSelector((state) => state.selectedDate);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const popupRef = React.useRef(null);
  const dispatch = useDispatch();
  const date = moment(selectedDate, 'MM-DD-YYYY');

  const catchOutsideClick = (e: any) => {
    if (e.target.className === 'overlay') {
      dispatch(selectDate(''));
    }
  };

  const getMonth = () => {
    return months[date.month()];
  };

  const getDay = () => {
    return date.format('Do dddd');
  };

  React.useEffect(() => {
    setIsVisible(!!selectedDate);
  }, [selectedDate]);

  if (isVisible) {
    return (
      <div ref={popupRef} className="overlay" onClick={catchOutsideClick}>
        <div className="popup">
          <h2>Selected date:</h2>
          <div className="popup-info">
            <label>
              Month
              <input type="text" value={getMonth()} readOnly />
            </label>
            <label>
              Day
              <input type="text" value={getDay()} readOnly />
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Popup;
