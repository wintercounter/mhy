import { PureComponent } from 'react';
interface IEpisodes {
    getEpisodes: (a: any) => {};
    episodes: {
        allIds: number[];
        byId: {};
        page: number;
        hasMore: boolean;
        isLoading: boolean;
    };
}
export declare class Episodes extends PureComponent<IEpisodes> {
    componentDidMount(): void;
    private fetch;
    private renderEpisode;
    render(): JSX.Element;
}
export declare const mapStateToProps: ({ episodes }: {
    episodes: any;
}) => {
    episodes: any;
};
declare const _default: any;
export default _default;
