import React from 'react';
interface IEpisodeProps {
    name: string;
    airDate: number;
    episode: number;
}
declare const Episode: React.MemoExoticComponent<({ name, airDate, episode }: IEpisodeProps) => JSX.Element>;
export default Episode;
