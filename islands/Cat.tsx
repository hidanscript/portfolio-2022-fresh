/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Cat () {

    const meow = () => {
        const audio = new Audio("/meow.mp3");
        audio.volume = 0.05;
        audio.play();
    }

    return (
        <img src="/cat.png" alt="cat" class={tw`box-content mb-5 cursor-pointer`}  onClick={meow}/>
    );
}