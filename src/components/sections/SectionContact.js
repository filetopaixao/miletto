import React from 'react';
import { WhatsApp } from '@mui/icons-material';

const SectionContact = () => {
    const [nameInput, setNameInput] = React.useState('');

    return (
        <section className="section-contact">
            <h1>Entre em <span className="primary">Contato</span></h1>
            <div className="section-contact__form">
                <div className="section-contact__form__input">
                    <input name="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Seu Nome" />
                </div>
                <button>Entrar em Contato <WhatsApp /></button>
            </div>
        </section>
    )
}

export default SectionContact;