import { Store } from 'redux';
declare type TConfigureStore = (preloadedState: any, history: any) => Store;
declare const configureStore: TConfigureStore;
export default configureStore;
