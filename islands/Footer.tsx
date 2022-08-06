/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
    return (
        <footer class={tw`p-4 bg-gray-100 mt-6 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800`}>
            <span class={tw`text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline`}>David Marcano 2022<a />. All Rights Reserved.
            </span>
            <ul class={tw`flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0`}>
                <li>
                    <a
                        href="https://linkedin.com/in/david-marcano/"
                        rel="noopener noreferrer"
                        class={tw`mr-4 hover:underline md:mr-6`}
                    >
                        Linkedin
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/hidanscript"
                        rel="noopener noreferrer"
                        class={tw`mr-4 hover:underline md:mr-6`}
                    >
                        Github
                    </a>
                </li>
            </ul>
        </footer>
    )
}