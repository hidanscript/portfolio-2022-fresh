/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function AboutMe () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-10 text-gray-900 sm:text-3xl sm:truncate`}>🐱 About me</h3>
            <p class={tw`text-base dark:text-white`} style={styles.higherText}>
                Hi I'm David Ortiz Marcano, a software developer based in Argentina,
                I'm a passionate and hard-working person who loves to learn new things.
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                I'm a full-stack developer with a passion for building web applications.
                High proficiency in JavaScript, TypeScript, React, NodeJS, and MongoDB.
            </p>
        </Container>
    );
}

const styles = {
    text: {
      marginTop: '1rem'
    },
    higherText: {
      marginTop: '2rem'
    }
};