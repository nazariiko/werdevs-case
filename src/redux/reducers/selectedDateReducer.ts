import { ISelectedDateState, SelectedDateAction, SelectedDateActionTypes } from '../types/selectedDate';

const initialState: ISelectedDateState = {
  selectedDate: '',
};

export const selectedDateReducer = (state = initialState, action: SelectedDateAction): ISelectedDateState => {
  switch (action.type) {
    case SelectedDateActionTypes.SELECT_DATE:
      return { selectedDate: action.payload };
    default:
      return state;
  }
};