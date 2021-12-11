export type Page = '/' | '/about';

export interface IPageState {
  currentPage: Page;
}

export enum PageActionTypes {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

interface ISetPageAction {
  type: PageActionTypes.SET_CURRENT_PAGE;
  payload: any;
}

export type PageAction = ISetPageAction;