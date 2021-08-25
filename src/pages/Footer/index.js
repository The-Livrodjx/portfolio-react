import React from 'react'
import {FaHeart} from 'react-icons/fa'
import './styles.css'

export default function Footer () {

    return (

        <section className="footer" id="footer">
            <p>Todos os direitos reservados © 2021 / Made with <span><FaHeart color="red" /></span> by: <a href="https://github.com/The-Livrodjx" rel="noreferrer" target="_blank">Livrodjx</a></p>
        </section>
    )
}