import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className='container-contact'>
            <h1>Contactez-nous</h1>
            <p>Par e-mail : achraf.sena@gmail.com</p>
            <p>Par Téléphone : XX-XX-XX-XX-XX</p>
            <p>Rejoignez-nous sur les réseaux</p>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        </div>
    );
}

export default Contact;