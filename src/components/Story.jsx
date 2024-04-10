import React, {useEffect, useState} from 'react'
import useScripts from './useScripts';

function Story({ noun, noun2, adjective, color, option }) {
    const [storyScript, chooseStory, words, writeScript] = useScripts();
    const [script, setScript] = useState();

    useEffect(() => {
        writeScript(noun, noun2, adjective, color, option);
    },[storyScript])

    return (
        <div>
            <p>{storyScript}</p>
        </div>
    )
}

export default Story;