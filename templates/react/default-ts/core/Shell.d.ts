import { Component } from 'react';
import History from 'history/createBrowserHistory';
interface IShell {
    history: History;
}
declare class Shell extends Component<IShell> {
    render(): JSX.Element;
}
export default Shell;
