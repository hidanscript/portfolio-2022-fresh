/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import Container from "../components/Container.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import Alert from "../components/Alert.tsx";

export default function ContactForm () {
    const initialStatus = { success: false, error: false };
    const [data, setData] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const [status, setStatus] = useState(initialStatus);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatus(initialStatus);
        const resp = await fetch(`/api/send-email?email=${data.email}&firstName=${data.firstName}&lastName=${data.lastName}&message=${data.message}`, { method: "POST" });
        if (resp.status === 200) {
            setData({ firstName: "", lastName: "", email: "", message: "" });
            setStatus({ success: true, error: false });
            setLoading(false);
        } else {
            setStatus({ success: false, error: true });
            setLoading(false);
        }
    }

    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-20 text-gray-900 text-center sm:text-3xl sm:truncate`}>Contact</h3>
            { status.success && <Alert message="Email sent successfully" type="success" /> }
            { status.error && <Alert message="Something went wrong" type="error" /> }
            { loading && <LoadingSpinner /> }
            
            <div class={tw`flex justify-center mt-10`}>
                <form class={tw`w-full max-w-lg`} onSubmit={handleSubmit}>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-last-name`}>
                            First Name
                        </label>
                        <input
                            class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="grid-first-name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            type="text"
                            disabled={loading}
                        />
                        </div>
                        <div class={tw`w-full md:w-1/2 px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-last-name`}>
                            Last Name
                        </label>
                        <input
                            class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="grid-last-name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            type="text"
                            disabled={loading}
                        />
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-password`}>
                            E-mail
                        </label>
                        <input
                            class={tw`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            type="email"
                            disabled={loading}
                        />
                        <p class={tw`text-gray-600 text-xs italic`}>Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-password`}>
                            Message
                        </label>
                        <textarea
                            class={tw` no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`}
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={data.message}
                            disabled={loading}
                        >
                        </textarea>
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