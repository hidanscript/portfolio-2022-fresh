/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { TECH_COLORS } from "../../utils/constants.ts";

type tagsProps = {
    tags: string[];
}

export default function Tags ({ tags }: tagsProps) {
    return (
        <>
            { tags && tags.map((tag: string, id: number) => {
                return (
                    <span
                        key={id}
                        class={tw`text-xs text-black ml-2 px-2.5 py-0.5 mt-1 rounded-full ${ TECH_COLORS[tag] || TECH_COLORS['default'] }`}
                    >
                        { tag }
                    </span>
                );
            })}
        </>
    );
}
