import React from 'react';

const TextTWO = () => {
    return (
        <div>
            <div className='font-bold text-5xl'>
                <Typewriter
                    words={[' for your Business', ' for your StartUp', ' for your Creative Ideas']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
        </div>
    );
};

export default TextTWO;