import React from 'react';
import styled from 'styled-components' 

const CardChecked = ({ title, icon }) => {
    return (
        <Card>
            <div className="card__container">
                <h4>{title}</h4>
                <span>{icon}</span>
            </div>
        </Card>
    )
}

export default CardChecked

const Card = styled.div`
        border: 1px solid #fff;
        width: 100%;
        border-radius: 3px;
        .card__container{
            padding: 1.75rem 1rem;
            position: relative;
            display: flex;
            align-items: center;
            overflow: hidden;
            cursor: pointer;
            background: #3b5998;
            color: #fff;
            
            h4{
                font-weight: 500;
                font-size: 14px;
            }
            span{
                position: absolute;
                right: -16px;
                bottom: -20px;
                svg{
                    font-size: 4.1rem;
                }
            }
        }
`