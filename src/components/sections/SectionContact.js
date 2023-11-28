import React from 'react';
import { WhatsApp } from '@mui/icons-material';

const SectionContact = ({ sectionContactRef }) => {
    const [nameInput, setNameInput] = React.useState('');

    return (
        <section className="section-contact" ref={sectionContactRef}>
            <h1>Entre em <span className="primary">Contato</span></h1>
            <div className="section-contact__form">
                <div className="section-contact__form__input">
                    <input name="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Seu Nome" />
                </div>
                <a target="_blank" href={`https://api.whatsapp.com/send?phone=556335718463&text=Olá,%20me%20chamo%20${nameInput}`}>Entrar em Contato <WhatsApp /></a>
            </div>
        </section>
    )
}

export default SectionContact;