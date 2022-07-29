/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <div class={tw`p-4 mx-auto bg-sky-500/50 text-xl h-screen h-96 bg-emerald-200`}>
        <div class={tw`p-4 mx-auto max-w-screen-lg bg-sky-500/50 text-xl`}>
          <h1 class={tw`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate`}>David Marcano</h1>
          <p class={tw`text-base dark:text-white`}>Hello this is a text message on a ´fresh´ app.</p>          
        </div>
      </div>
      <div class={tw`p-4 mx-auto max-w-screen-md bg-sky-500/50 text-xl`}>
          <h3 class={tw`text-2xl font-bold leading-7 mt-6 text-gray-900 sm:text-3xl sm:truncate`}>About me</h3>
          <p class={tw`text-base dark:text-white`}>Hello this is a text message on a ´fresh´ app.</p>
      </div>
    </div>
  );
}
