/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Cat() {
  const meow = () => {
    const audio = new Audio("/meow.mp3");
    audio.volume = 0.05;
    audio.play();
  };

  return (
    <img
      src="/img/cat.png"
      alt="cat"
      width={232}
      height={154}
      class={tw`box-content mb-5 cursor-pointer cat`}
      onClick={meow}
    />
  );
}
