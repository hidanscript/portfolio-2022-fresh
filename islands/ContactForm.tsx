/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function ContactForm () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-20 text-gray-900 text-center sm:text-3xl sm:truncate`}>Contact</h3>
            <div class={tw`flex justify-center mt-10`}>
                <form class={tw`w-full max-w-lg`}>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-last-name`}>
                            First Name
                        </label>
                        <input class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-first-name" type="text" />
                        </div>
                        <div class={tw`w-full md:w-1/2 px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-last-name`}>
                            Last Name
                        </label>
                        <input class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" />
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-password`}>
                            E-mail
                        </label>
                        <input class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="email" type="email" />
                        <p class={tw`text-gray-600 text-xs italic`}>Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-password`}>
                            Message
                        </label>
                        <textarea class={tw` no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`} id="message"></textarea>
                        </div>
                    </div>
                    <div class={tw`flex items-center justify-center`}>
                        <button class={tw`shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-md hover:bg-gray-100`} type="submit" style={styles.button}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

const styles = {
    button: {
        border: '1px solid #000',
        color: '#000',
        width: '100%',
    }
}