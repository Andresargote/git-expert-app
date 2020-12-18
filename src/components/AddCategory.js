import React, {useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(pastState => [inputValue, ...pastState ]);
            setInputValue("");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => handleInputChange(e.target.value)} 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired,
}