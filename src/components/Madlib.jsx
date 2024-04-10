import React, { useState, useEffect } from 'react'
import MadlibForm from './MadlibForm'
import Story from './Story'
import useScripts from './useScripts';

/** Component --- parent comp; displays both form & incomplete story OR complete story ONCE formData has been submitted. */
function Madlib() {
    // States for accessing form data & changing displayed script
    const [formData, setFormData] = useState();
    const [script, chooseStory] = useScripts();

    // Handles when form is submitted
    function createStory(sentData){
        setFormData(sentData);
    }

    // Restart button
    function restart() {
        setFormData();
    }

    // uses custom hook to access the different stories
    function storySample(story) {
        chooseStory(story);
    }

    return (
        <div>
            <h1>MadLib</h1>
            {formData ? 
            <div>
                <Story noun={formData.noun} noun2={formData.noun2} adjective={formData.adjective} color={formData.color} option={formData.option}/>
                <button onClick={restart}>Restart</button>
            </div>
             : 
             <div>
                <p>{script}</p>
                <MadlibForm createStory={createStory} storySample={storySample}/>
            </div>
            }
        </div>
    )
}

export default Madlib