/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function Projects () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-20 sm:text-3xl sm:truncate`}>💡 Projects</h3>
        </Container>
    );
}
