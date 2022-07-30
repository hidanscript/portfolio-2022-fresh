/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function ContactForm () {
    return (
        <form class={tw`w-full max-w-lg`}>
            <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                <div class={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
                <label class={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name`}>
                    First Name
                </label>
                <input class={tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-first-name" type="text" placeholder="Jane" />
                </div>
                <div class={tw`w-full md:w-1/2 px-3`}>
                <label class={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name`}>
                    Last Name
                </label>
                <input class={tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                <div class={tw`w-full px-3`}>
                <label class={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password`}>
                    E-mail
                </label>
                <input class={tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="email" type="email" />
                <p class={tw`text-gray-600 text-xs italic`}>Some tips - as long as needed</p>
                </div>
            </div>
            <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                <div class={tw`w-full px-3`}>
                <label class={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password`}>
                    Message
                </label>
                <textarea class={tw` no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`} id="message"></textarea>
                </div>
            </div>
            <div class={tw`flex items-center justify-center`}>
                <button class={tw`shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button`} style={styles.button}>
                    Send
                </button>
            </div>
        </form>
    );
}

const styles = {
    button: {
        border: '1px solid #000',
        color: '#000',
        width: '100%',
    }
}