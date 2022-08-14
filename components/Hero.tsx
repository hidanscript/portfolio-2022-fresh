/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Cat from "../islands/Cat.tsx";

export default function Hero () {
    return (
        <div class="hero">
            <nav class="bring-to-front" style={styles.navbar}>
                <a
                    href="https://linkedin.com/in/david-marcano/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class={tw`hover:bg-white text-black hover:text-black py-2 px-4 rounded ml-4`}
                    style={styles.button}
                >
                Projects
                </a>
                <a
                    href="https://github.com/hidanscript"
                    rel="noopener noreferrer" target="_blank"
                    class={tw`hover:bg-white text-black hover:text-black py-2 px-4 rounded ml-4`}
                    style={styles.button}
                >
                Github
                </a>
                <a
                    href="https://linkedin.com/in/david-marcano/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class={tw`hover:bg-white text-black hover:text-black py-2 px-4 rounded ml-4`}
                    style={styles.button}
                >
                Linkedin
                </a>
            </nav>

            <main class={tw`p-4 mx-auto mb-10 text-xl h-screen pb-20 glass`} style={styles.hero}>
                <div class={tw`p-4 mx-auto max-w-screen-lg text-xl flex justify-center items-center flex-col bring-to-front`}>
                    <Cat />
                    <h1 class={tw`text-2xl font-bold leading-7 sm:text-3xl sm:truncate`}>David Marcano</h1>
                    <div class="typewriter">
                    <p>Full-stack developer</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

const styles = {
    hero: {
      // backgroundColor: '#7aa9ff',
      display: 'flex',
      height: '50vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbar: {
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    button: {
      border: '2px solid black'
    }
  };