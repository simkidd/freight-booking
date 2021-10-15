import React from 'react'

const CargoInput = ({ label, unit }) => {
    return (
        <div className='input__outline'>
            <label>{label}</label>
            <div className="input__inputSpan">
                <input type="text" />
                <span>{unit}</span>
            </div>
        </div>
    )
}

export default CargoInput
