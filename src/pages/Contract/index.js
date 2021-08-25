import React from 'react'
import responsivenessIcon from '../../assets/images/responsive.png'
import marketingIcon from '../../assets/images/marketing.png'
import increaseIcon from '../../assets/images/increase.png'

import './styles.css'
import './responsiveness.css'

export default function Contract() {

    return (

        <section className="hireMe">
            <h1>Por que me contratar ?</h1>

            <div className="all-the-reasons">

                <div className="reason-card">
                    <img src={responsivenessIcon} alt="" />
                    <h2>Seu site em qualquer tela</h2>
                    <p>Todos os sites e sistemas são feitos de maneira responsiva, ou seja, se encaixam na maioria dos dispositivos e nos navegadores mais modernos.</p>
                </div>

                <div className="reason-card">
                    <img src={increaseIcon} alt="" />
                    <h2>Aumento no Lucro</h2>
                    <p>Ao criar o seu site ou sistema você está expondo o seu negócio 24 horas por dia e 7 dias por semana, dando visibilidade aos seus serviços e atraindo clientes.</p>
                </div>

                <div className="reason-card">
                    <img src={marketingIcon} alt="" />
                    <h2>Presença da sua empresa</h2>
                    <p>Com seus serviços na internet fica impossível não ser reconhecido, ter seu negócio na internet significa passar credibilidade e profissionalismo.</p>
                </div>
            </div>
        </section>
    )
}