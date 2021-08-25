import React from 'react'
import art from '../../assets/images/me.png'
import './styles.css'
import './responsiveness.css'

export default function Home() {

    function handleScrollTo(event, elementId) {

        event.preventDefault();
        

        document.getElementById(`${elementId}`).scrollIntoView({behavior: 'smooth'})
    }

    return (

        <section className="home" id="home">

            <div className="content">
                <h1>Olá, sou <span style={{ color: "#6e48ed" }}>Livrodjx</span></h1>

                <p>Me chamo Lucas Alexandre, tenho 19 anos estudo programação desde os 17, sou Desenvolvedor Web, trabalho com HTML, CSS, Javascript e amo Node.js.</p>

                <a href="/about" onClick={e => handleScrollTo(e, 'about')} className="know-more">Quero conhecer</a>
            </div>

            <div className="illustration">
                <img src={art} alt="" />
            </div>
        </section>
    )
}