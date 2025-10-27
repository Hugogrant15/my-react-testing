import React, {useState} from 'react'

const ColourPicker = () => {

   const [color, setColor] = useState("#ffff") 

    function handleColourChange (event) {
        setColor(event.target.value)
    }


  return (
    <>
        <h1>color picker</h1>
        <div className='colour-display' style={{backgroundColor: color}}>
            <p>selected colour: {color}</p>
        </div>
        <label htmlFor="">select a colour</label>
        <input type="color" value={color} onChange={handleColourChange} />
    </>
  )
}

export default ColourPicker
