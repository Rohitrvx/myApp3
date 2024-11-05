import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-tag-box">
                    <div className="contact-tag">
                        <h1>
                            Contact Us
                        </h1>
                        <p>
                            Very us move be blessed multiply night
                        </p>
                    </div>
                    <div className="contact-tag2">
                        <a href="index.html">
                            Home /
                        </a>
                        <a href> Contact Us</a>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>
                        Get in Touch
                    </h2>
                    <div className="form">
                        <textarea defaultValue={""} />
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Name" />
                        <input
                            type="text"
                            placeholder="Enter Email Address" />
                        <br />
                        <br />
                        <input
                            className="subject"
                            type="text"
                            placeholder="Enter Subject" />
                        <br />
                        <button>
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
