import React from 'react'
import art from '../../assets/images/me.png'
import './styles.css'

export default function Home() {


    return (

        <section className="home">

            <div className="content">
                <h1>Olá, sou <span style={{ color: "#6e48ed" }}>Livrodjx</span></h1>

                <p>Me chamo Lucas Alexandre, tenho 19 anos estudo programação desde os 17, desde então eu comecei a aprender linguagens base de Web, como por exemplo, HTML e CSS.</p>

                <a href="/about" className="know-more">Quero conhecer</a>
            </div>

            <div className="illustration">
                <img src={art} alt="" />
            </div>
        </section>
    )
}