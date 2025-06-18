import React from "react";

const Card = (props) => {
    const handleFlipCard = () => {
        props.checkIsFlipped(!props.isFlipped);
    }

    return (
        <div className={`card ${props.isFlipped ? "flipped" : ""}`} onClick={handleFlipCard} style={{ backgroundColor: props.color }}>
            <div className="card-inner">
                <div className="front">
                    <img className='answer' src={props.question}></img>
                </div>
                <div className="back">
                    <div>
                        <p>{props.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;