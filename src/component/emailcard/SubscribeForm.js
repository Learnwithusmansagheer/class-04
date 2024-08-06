import React from 'react'
import './SubscribeForm.css'
export default function SubscribeForm() {
    return (
        <>
            <div className="container-email">
                <div className="emailcard">
                    <div className="headingemail">
                        <div className="emailheading">
                            <h1>
                                Subscribe to our <span>Newsletter!</span>
                            </h1>
                        </div>
                        <div className="emailpara">
                            <p>Stay Connected and Informed with Exclusive Updates and Offers</p>
                        </div>
                        <div className="input-group">
                            <input type="email" id="emailInput" placeholder="Email" />
                            <button type="submit">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
