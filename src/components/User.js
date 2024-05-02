import React from 'react'

const User = (props) => {
    console.log(props.name);
    return (
        <section>
            <img src={props.img} alt={props.name} />
            <h1>Name: {props.name}</h1>
            <h3>Hobbies: {props.hobbies}</h3>
            {/* <p>Real Data: {props.realData.name} & Location:{props.realData.location }</p> */}

        </section>
    );
}


export default User