export interface ISelectedDateState {
  selectedDate: string;
}

export enum SelectedDateActionTypes {
  SELECT_DATE = 'SELECT_DATE',
}

interface ISelectDateAction {
  type: SelectedDateActionTypes.SELECT_DATE;
  payload: string;
}

export type SelectedDateAction = ISelectDateAction;