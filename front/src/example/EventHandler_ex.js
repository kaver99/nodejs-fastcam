import { React } from 'react';

function EventHandler_ex() {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Button is Clicked.');
    }

    return (
        <button onClick={handleClick}>Button</button>
    );
}

export default EventHandler_ex;