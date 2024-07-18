import React, {useState} from "react";
import {CirclePicker} from "react-color";

export const PdfForm = ({onSubmitForm}) => {
    const [color, setColor] = useState();
    const [isVisible, setIsVisible] = useState(false);

    const onClickColor = (color) => {
        setColor(color)
        setIsVisible(false);
    }

    const toggleColorPicker = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append('color', color?.hex)
        onSubmitForm(formData)
    }
    return (
        <form onSubmit={onSubmit} className='pdf-form'>
            <input className='pdf-input' name='firstName' placeholder={'first name'}/>
            <input className='pdf-input' name='lastName' placeholder={'last name'}/>
            <input className='pdf-input' name='role' placeholder={'role'}/>
            <button className='pdf-button' style={{backgroundColor: color?.hex}} type='button' onClick={toggleColorPicker}>Color</button>
            {isVisible && <CirclePicker onChange={onClickColor} />}
            <button className='pdf-button' type='submit' title='submit'>Generate</button>
        </form>
    )
};