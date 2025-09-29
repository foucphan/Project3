import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newletters and stay updates</p>
            <div>
                <input type="email" placehoder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewLetter
