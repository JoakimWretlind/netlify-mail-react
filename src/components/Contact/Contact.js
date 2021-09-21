import React from 'react'
import {
    ContactSection,
    InnerContainer,
    ContactH1,
    Form
} from './Contact.style'

const Contact = () => {
    return (
        <ContactSection>
            <InnerContainer>
                <ContactH1>Contact</ContactH1>
                <Form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </Form>
            </InnerContainer>
        </ContactSection>
    )
}

export default Contact
