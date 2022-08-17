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
            <h3 class={tw`text-2xl font-bold leading-7 mt-20 text-center sm:text-3xl sm:truncate`}>Contact</h3>
            { status.success && <Alert message="Email sent successfully" type="success" /> }
            { status.error && <Alert message="Something went wrong" type="error" /> }
            { loading && <LoadingSpinner /> }
            
            <div class={tw`flex justify-center mt-10`}>
                <form class={tw`w-full max-w-lg`} onSubmit={handleSubmit}>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
                        <label class={tw`block uppercase tracking-wide text-gray-200 text-xs mb-2" for="grid-last-name`}>
                            First Name
                        </label>
                        <input
                            class={tw`appearance-none bg-transparent block w-full text-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                            id="grid-first-name"
                            name="firstName"
                            required
                            onChange={handleChange}
                            value={data.firstName}
                            type="text"
                            disabled={loading}
                            style={ loading ? { opacity: 0.5 } : {} }
                        />
                        </div>
                        <div class={tw`w-full md:w-1/2 px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-200 text-xs mb-2" for="grid-last-name`}>
                            Last Name
                        </label>
                        <input
                            class={tw`appearance-none bg-transparent block w-full text-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500`}
                            id="grid-last-name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            type="text"
                            disabled={loading}
                            style={ loading ? { opacity: 0.5 } : {} }
                        />
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-200 text-xs mb-2" for="grid-password`}>
                            E-mail
                        </label>
                        <input
                            class={tw`appearance-none block w-full bg-transparent text-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500`}
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            type="email"
                            required
                            disabled={loading}
                            style={ loading ? { opacity: 0.5 } : {} }
                        />
                        <p class={tw`text-gray-200 text-xs italic`}>Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class={tw`flex flex-wrap -mx-3 mb-6`}>
                        <div class={tw`w-full px-3`}>
                        <label class={tw`block uppercase tracking-wide text-gray-200 text-xs mb-2" for="grid-password`}>
                            Message
                        </label>
                        <textarea
                            class={tw` no-resize appearance-none bg-transparent block w-full text-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none`}
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={data.message}
                            required
                            disabled={loading}
                            style={ loading ? { opacity: 0.5 } : {} }
                        >
                        </textarea>
                        </div>
                    </div>
                    <div class={tw`flex items-center justify-center`}>
                        <button
                            class={tw`shadow focus:shadow-outline focus:outline-none py-2 px-4 rounded-md border border-solid border-gray-200 w-full text-white ${ !loading ? "hover:text-gray-900 hover:bg-gray-100" : "" }`}
                            type="submit"
                            disabled={loading}
                            style={ loading ? { opacity: 0.5 } : {} }
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}