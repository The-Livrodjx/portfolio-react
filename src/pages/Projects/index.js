import React from 'react'
import './styles.css'
import './responsiveness.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaReact ,FaWrench } from 'react-icons/fa'
import { GiChart } from 'react-icons/gi'
import laptop from '../../assets/images/laptop.png'
import srpurificadores from '../../assets/images/srpurificadores.png'
import podcastr from '../../assets/images/example.png'
import finderlanches from '../../assets/images/finderlanches.png'

export default function Projects() {

    return (
        <>
            <section className="projects" id="projects">
                <div className="projects-about">
                    <h1>Projetos já realizados</h1>
                    <p>Alguns dos projetos que construi durante minha jornando, seja por estudo ou por serviços prestados.
                    </p>
                </div>
            </section>
            <section className="project1">

                <div className="content">

                    <div className="image-content">
                        <img src={srpurificadores} className="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div className="description">
                        <h2>Srpurificadores</h2>
                        <p>S&amp;R Purificadores é um site institucional realizado durante um freelance que descreve as informações sobre os serviços da empresa, 
                            junção com as redes sociais e formulário de contato.
                        </p>

                        <div className="icon-description">
                            <GiChart className="languageIcon" />
                            <h3>Marketing Digital</h3>
                        </div>

                        <div className="icon-description">
                            <FaWrench className="languageIcon" />
                            <h3>Suporte técnico</h3>
                        </div>

                        <div className="icon-description">
                            <img src={laptop} alt="" className="languageIcon computerIcon" />
                            <h3>Construção de Website</h3>
                        </div>

                        <div className="language-description">
                            <FaHtml5 color="#f16524" width="30px" height="30px" className="languageIcon" />
                            <FaCss3Alt color="#03ade1" width="30px" height="30px" className="languageIcon" />
                            <FaJsSquare color="#ffda3e" width="30px" height="30px" className="languageIcon" />
                            <FaNode color="#52ae5f" width="30px" height="30px" className="languageIcon" />

                        </div>

                        <a href="https://srpurificadores.com.br" target="_blank" rel="noreferrer" className="projectsBtn">Conhecer</a>
                    </div>
                </div>
            </section>

            <section className="project2">

                <div className="project2-content">

                    <div className="project2-image-content">
                        <img src={podcastr} className="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div className="project2-description">
                        <h2>NLW5 - Podcastr</h2>
                        <p>Podcastr é um aplicativo Web para os Devs amantes das notícias mais quentes sobre o mundo da programação. Projeto realizado durante a quinta edição da Next Level Week.</p>

                        <div className="icon-description">
                            <FaWrench className="languageIcon" />
                            <h3>Suporte técnico</h3>
                        </div>

                        <div className="icon-description">
                            <img src={laptop} alt="" className="languageIcon computerIcon" />
                            <h3>Construção de Website</h3>
                        </div>

                        <div className="language-description">
                            <FaHtml5 color="#f16524" width="30px" height="30px" className="languageIcon" />
                            <FaCss3Alt color="#03ade1" width="30px" height="30px" className="languageIcon" />
                            <FaReact color="#00d8ff" width="30px" height="30px" className="languageIcon" />
                        </div>

                        <a href="https://github.com/The-Livrodjx/NLW5-React" target="_blank" rel="noreferrer" className="projectsBtn">Conhecer</a>
                    </div>
                </div>
            </section>

            <section className="project1">

                <div className="content">

                    <div className="image-content">
                        <img src={finderlanches} className="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div className="description">
                        <h2>Finder-lanches</h2>
                        <p id="lastDescription">Finder Lanches é uma loja online de fast-food, é um projeto pessoal onde eu queria aplicar uma integração com a API do Mercado Pago, 
                            dando a possibilidade de se realizar pagamentos com diversos métodos.    
                        </p>



                        <div className="icon-description">
                            <FaWrench className="languageIcon" />
                            <h3>Suporte técnico</h3>
                        </div>

                        <div className="icon-description">
                            <img src={laptop} alt="" className="languageIcon computerIcon" />
                            <h3>Construção de Website</h3>
                        </div>

                        <div className="language-description">
                            <FaHtml5 color="#f16524" width="30px" height="30px" className="languageIcon" />
                            <FaCss3Alt color="#03ade1" width="30px" height="30px" className="languageIcon" />
                            <FaJsSquare color="#ffda3e" width="30px" height="30px" className="languageIcon" />
                            <FaNode color="#52ae5f" width="30px" height="30px" className="languageIcon" />
                            <FaReact color="#00d8ff" width="30px" height="30px" className="languageIcon" />

                        </div>

                        <a href="https://github.com/The-Livrodjx/finder-lanches" target="_blank" rel="noreferrer" className="projectsBtn">Conhecer</a>
                    </div>
                </div>
            </section>

        </>
    )
}