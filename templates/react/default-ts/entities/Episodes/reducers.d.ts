declare const EpisodesReducer: (state: {
    byId: {};
    allIds: never[];
    page: number;
    hasMore: boolean;
    isLoading: boolean;
} | undefined, { type, payload: { results, info } }: {
    type: any;
    payload?: {
        results: any;
        info: any;
    } | undefined;
}) => {
    byId: {};
    allIds: never[];
    page: number;
    hasMore: boolean;
    isLoading: boolean;
} | {
    byId: {};
    allIds: never[];
    page: number;
    hasMore: boolean;
    isLoading: boolean;
};
export default EpisodesReducer;
