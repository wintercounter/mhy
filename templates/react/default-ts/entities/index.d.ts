import { Reducer } from 'redux';
import * as Characters from '@/entities/Characters';
import * as Episodes from '@/entities/Episodes';
export { Characters, Episodes };
export declare const rootReducer: Reducer;
export declare const rootSaga: () => IterableIterator<Promise<void>>;
