import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailData = {
            email: 'odeya.sadoun@gmail.com', 
            subject: `New contact from ${name}`,
            text: `
                <p>Name: ${name}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
            `,
        };

        try {
            const response = await axios.post('http://localhost:5000/send-email', emailData);
            if (response.status === 200) {
                alert('Email sent successfully');
            }
        } catch (error) {
            alert(error)
            alert('Failed to send email');
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center contact-container p-3">
            <h1 className="mb-4 p-3">יצירת קשר</h1>
            <form onSubmit={handleSubmit} className="w-75">
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="שם"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="טלפון"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="תוכן הפניה"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">שליחה</button>
            </form>
        </div>
    );
};

export default Contact;
