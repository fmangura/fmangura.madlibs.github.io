import React, {useEffect, useState} from 'react'

/** A custom hook to handle *MOST* story options
 * 
 * Stories as an array of objects: {title (story), displayed text (script), what is used for rendering story component (generator)}
 */

const useScripts = () => {
    const [storyScript, setStoryScript] = useState()
    const [words, setWords] = useState({color:'', noun:'', noun2:'', adjective:''})
    const stories = [
        {
            story: 'Default',
            script: 'There was a [color] [noun] who loved a [adjective] [noun2]',
            generator: `There was a ${words.color} ${words.noun} who loved a ${words.adjective} ${words.noun2}`
        },
        {
            story: 'Space Mission',
            script: 'There was a [noun] on a [color] planet that looked for a [adjective] [noun2]',
            generator: `There was a ${words.noun} on a ${words.color} planet that looked for a ${words.adjective} ${words.noun2}`
        },
        {
            story: 'Cowboy',
            script: 'There lived a [adjective] [noun] that ate a [color] [noun2]',
            generator: `There lived a ${words.adjective} ${words.noun} that ate a ${words.color} ${words.noun2}`
        },
        {
            story: 'Space Cowboy',
            script: 'There was a [noun]-cowboy in space. They had a [color] spaceship. They soared looking for a [adjective] [noun2]',
            generator: `There was a ${words.noun}-cowboy in space. They had a ${words.color} spaceship. They soared looking for a ${words.adjective} ${words.noun2}`
        },
    ]
    
    // Aids <Madlib /> in generating incomplete script of the selected script
    const chooseStory = (story) => {
        let res = stories.find(script => script.story === story);
        setStoryScript(() => res.script)
    }

    // Aids <Story /> in generating complete script when rendered
    const writeScript = (noun, noun2, adjective, color, option) => {
        setWords({
            color : `${color}`,
            noun : `${noun}`,
            noun2 : `${noun2}`,
            adjective : `${adjective}`
        })
        let res = stories.find(script => script.story === option);
        setStoryScript(() => res.generator)
    }

    return [storyScript, chooseStory, words, writeScript];
}

export default useScripts