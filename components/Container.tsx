/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

type ContainerProps = {
  children: ComponentChildren;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section
      class={tw`p-4 mx-auto max-w-screen-sm bg-sky-500/50 text-xl w-full relative`}
    >
      {children}
    </section>
  );
}
