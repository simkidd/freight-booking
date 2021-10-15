import React from 'react'
import { styled } from '@material-ui/styles';
import { Switch } from '@material-ui/core'


const AdditionalCard = ({ title, content }) => {
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(() => ({
        width: 36,
        height: 20,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '0.3s',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#3b5998',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled +  .MuiSwitch-track': {
                    opacity: 0.5,
                }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#4a6192',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: '#f2f2f2'
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 16,
            height: 16,

        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            opacity: 1,
            backgroundColor: '#9c9c9c',


        }
    }));

    return (
        <>
            <div className='additional__card'>
                <IOSSwitch />
                <div className="text">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default AdditionalCard