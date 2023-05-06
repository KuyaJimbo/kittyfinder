import React from "react";

// This card is a function with properties (props) which are accessed easily by destructuring
const Card = ({name, email, id}) => {
    return (
        <div className='tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='kitty' src={`https:robohash.org/${id}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;