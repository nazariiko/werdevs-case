import { SelectedDateActionTypes  } from '../types/selectedDate';

export const selectDate = (date: string) => {
  return {
    type: SelectedDateActionTypes.SELECT_DATE,
    payload: date,
  };
};