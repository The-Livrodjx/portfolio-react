import React from 'react'
import responsivenessIcon from '../../assets/images/responsive.png'
import marketingIcon from '../../assets/images/marketing.png'
import increaseIcon from '../../assets/images/increase.png'

import './styles.css'

export default function Contract() {

    return (

        <section className="hireMe">
            <h1>Por que me contratar ?</h1>

            <div className="all-the-reasons">

                <div className="reason-card">
                    <img src={responsivenessIcon} alt="" />
                    <h2>Seu site em qualquer tela</h2>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto</p>
                </div>

                <div className="reason-card">
                    <img src={increaseIcon} alt="" />
                    <h2>Aumento no Lucro</h2>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto</p>
                </div>

                <div className="reason-card">
                    <img src={marketingIcon} alt="" />
                    <h2>Presença da sua empresa</h2>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto</p>
                </div>
            </div>
        </section>
    )
}