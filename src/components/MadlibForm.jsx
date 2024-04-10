import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';

/** Component --- form component; 
 * 
 * contains handling of text input type AND select input type.
 * 
 * When submitted, all data is sent back to <Madlib />
 * 
 * Note: Does not do validation.
 */

function MadlibForm({createStory, storySample}) {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: '',
        option: '--SELECT A STORY--',
    }
    const storyOptions = [
        {story: 'Default'},
        {story: 'Space Mission'},
        {story: 'Cowboy'},
        {story: 'Space Cowboy'},
    ]
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const onSelect = (e) => {
        const {name, value} = e.target
        storySample(value);
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createStory(formData);
        setFormData(() => INITIAL_STATE)
    }

    return(
        <form onSubmit={handleSubmit} id='form'>
            <select name="option" id="story" onChange={onSelect}>
                <option value={formData.option}>{formData.option}</option>
                {storyOptions.map(({story}) => <option key={uuid()} value={story}>{story}</option>)}
            </select>
            <input type="text" placeholder='noun' name='noun' value={formData.noun} onChange={handleChange}/>
            <input type="text" placeholder='noun 2' name='noun2' value={formData.noun2} onChange={handleChange}/>
            <input type="text" placeholder='adjective' name='adjective' value={formData.adjective} onChange={handleChange}/>
            <input type="text" placeholder='color' name='color' value={formData.color} onChange={handleChange}/>
            <button>Get Story</button>
        </form>
    )
}

export default MadlibForm;