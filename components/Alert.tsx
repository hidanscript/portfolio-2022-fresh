/** @jsx h */
import { h } from 'preact';

type AlertProps = {
    message: string;
    type: 'success' | 'error';
}

export default function Alert(props: AlertProps) {
    return (
        <div class={`alert-${props.type}`}>
            { props.message }
        </div>
    );
}