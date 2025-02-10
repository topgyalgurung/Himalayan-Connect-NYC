import {useState} from 'react'

const Input = ({onChangeCallback}) => {
    // state to handle input value
    const [value, setValue] = useState("");

    const handleChange = (e) =>{
        const inputValue = e.target.value;
        setValue(inputValue);
        // if the component receives a callback, call it,
        // and pass the input value as an argument
        onChangeCallback && onChangeCallback(inputValue)
    }
  return (
   <input
    id="search"
    type="text"
    placeholder="Search services..."
    value={value}
    onChange={handleChange}
  />
  )
}

export default Input;