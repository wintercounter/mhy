import React from 'react';
interface ICharacterProps {
    image: string;
    name: string;
}
declare const Character: React.MemoExoticComponent<({ name, image }: ICharacterProps) => JSX.Element>;
export default Character;
