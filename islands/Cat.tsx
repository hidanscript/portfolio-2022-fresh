/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Cat () {

    const meow = () => {
        const audio = new Audio("/meow.mp3");
        audio.play();
    }

    return (
        <img src="/cat.png" alt="cat" class={tw`box-content`} style={styles.cat} onClick={meow}/>
    );
}

const styles = {
    cat: {
        width: '40%',
        marginBottom: 20,
        cursor: 'pointer'
    },
}