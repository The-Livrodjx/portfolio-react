import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import './styles.css'

export default function Contact() {

    return (

        <section className="contact">
            <h1>Entre em contato</h1>
            <p>Entre em contato, é rápido e simples , retornarei o mais breve possível.</p>

            <div className="first-inputs">

                <div className="input-name">
                    <p className="input-label">Nome</p>
                    <input type="text" />
                </div>

                <div className="input-email">
                    <p className="input-label">Endereço de E-mail</p>
                    <input type="text" />
                </div>
            </div>

            <div className="input-message">
                <p className="input-label">Mensagem</p>
                <input type="text" />
            </div>

            <a href="/" className="send-mail" >Enviar</a>

            <div className="sci">
                <FaDiscord style={{width: 50, height: 50, marginRight: 20}} />
                <FaGithub style={{width: 50, height: 50}}/>
            </div>
        </section >
    )
}