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
                        class={
                            tw`text-xs ml-2 px-2.5 py-0.5 mt-1 rounded-full font-bold
                            ${ TECH_COLORS[tag].color || TECH_COLORS['default'] } 
                            ${ TECH_COLORS[tag].font || TECH_COLORS['default'] }`
                        }
                    >
                        { tag }
                    </span>
                );
            })}
        </>
    );
}
