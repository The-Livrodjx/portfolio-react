import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import './styles.css'
import './responsiveness.css'

export default function Contact() {

    return (

        <section className="contact">
            <h1>Entre em contato</h1>
            <p>Entre em contato, é rápido e simples , retornarei o mais breve possível.</p>

            
            <div className="sci">
                <a href="https://discord.gg/aQKyHT5BKv" target="_blan" rel="noreferrer"><FaDiscord style={{width: 50, height: 50, marginRight: 20}} /></a>
                <a href="https://github.com/The-Livrodjx" target="_blank" rel="noreferrer"><FaGithub style={{width: 50, height: 50, marginRight: 20}}/></a>
                <div className="email-sci">
                    <AiOutlineMail style={{width: 50, height: 50}}/>
                    <span>lucasoliverbr@gmail.com</span>
                </div>
                
                
            </div>
        </section >
    )
}