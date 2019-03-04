import { PureComponent } from 'react';
interface ICharactersProps {
    getCharacters: (a: any) => {};
    characters: {
        allIds: number[];
        byId: {};
        page: number;
        hasMore: boolean;
        isLoading: boolean;
    };
}
export declare class Characters extends PureComponent<ICharactersProps> {
    componentDidMount(): void;
    private fetch;
    private renderCharacter;
    render(): JSX.Element;
}
export declare const mapStateToProps: ({ characters }: {
    characters: any;
}) => {
    characters: any;
};
declare const _default: any;
export default _default;
