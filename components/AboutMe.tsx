/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function AboutMe () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-32 sm:text-3xl sm:truncate`}>🐱 About me</h3>
            <p class={tw`text-base`} style={styles.higherText}>
                Hi I'm&nbsp;
                <a
                    href="https://linkedin.com/in/david-marcano"
                    target="_blank"
                    rel="noopener noreferrer"
                    class={tw`text-blue-400 hover:text-blue-700`}
                >
                    David Ortiz Marcano
                </a>, &nbsp;a software developer based in Argentina,
                I'm a passionate and hard-working person who loves to learn new things.
            </p>
            <p class={tw`text-base`} style={styles.text}>
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