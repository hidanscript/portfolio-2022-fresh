/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Cat from "./Cat.tsx";

export default function Hero () {
    return (
        <div>
            <nav style={styles.navbar}>
                <a
                    href="https://github.com/hidanscript"
                    rel="noopener noreferrer" target="_blank"
                    class={tw`bg-teal-500 hover:bg-white text-black py-2 px-4 rounded`}
                    style={styles.button}
                >
                Github
                </a>
                <a
                    href="https://linkedin.com/in/david-marcano/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class={tw`bg-teal-500 hover:bg-white text-black py-2 px-4 rounded ml-4`}
                    style={styles.button}
                >
                Linkedin
                </a>
            </nav>

            <main class={tw`p-4 mx-auto mb-10 bg-sky-500/50 text-xl h-screen bg-emerald-200 pb-20`} style={styles.hero}>
                <div class={tw`p-4 mx-auto max-w-screen-lg bg-sky-500/50 text-xl flex justify-center items-center flex-col`}>
                    <Cat />
                    <h1 class={tw`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate`}>David Marcano</h1>
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
      backgroundColor: '#86efac',
      display: 'flex',
      height: '50vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbar: {
      padding: '0.5rem 1rem',
      backgroundColor: '#86efac',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    button: {
      border: '1px solid black'
    },
    text: {
      marginTop: '1rem'
    },
    higherText: {
      marginTop: '2rem'
    },
    showMore: {
      cursor: 'pointer',
      color: '#86efac',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: 30,
    }
  };