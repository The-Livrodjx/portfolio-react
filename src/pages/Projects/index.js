import React from 'react'
import './styles.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaWrench } from 'react-icons/fa'
import { GiChart } from 'react-icons/gi'
import laptop from '../../assets/images/laptop.png'

export default function Projects() {

    return (
        <>
            <section className="projects" id="projects">
                <div className="projects-about">
                    <h1>Projetos já realizados</h1>
                    <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica
                    </p>
                </div>
            </section>
            <section className="project1">

                <div className="content">

                    <div className="image-content">
                        <img src="/images/srpurificadores.jpg" className="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div className="description">
                        <h2>Srpurificadores</h2>
                        <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção
                            gráfica, A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na
                            produção gráfica</p>

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

            <section class="project2">

                <div class="project2-content">

                    <div class="project2-image-content">
                        <img src="/images/projetoexemplo.PNG" class="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div class="project2-description">
                        <h2>Guiaperguntas</h2>
                        <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção
                            gráfica, A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na
                            produção gráfica</p>

                        <div className="icon-description">
                            <FaWrench className="languageIcon" />
                            <h3>Suporte técnico</h3>
                        </div>

                        <div className="icon-description">
                            <img src={laptop} alt="" className="languageIcon computerIcon" />
                            <h3>Construção de Website</h3>
                        </div>

                        <div class="language-description">
                            <FaHtml5 color="#f16524" width="30px" height="30px" className="languageIcon" />
                            <FaCss3Alt color="#03ade1" width="30px" height="30px" className="languageIcon" />
                            <FaJsSquare color="#ffda3e" width="30px" height="30px" className="languageIcon" />
                        </div>

                        <a href="/" class="projectsBtn">Conhecer</a>
                    </div>
                </div>
            </section>

            <section className="project1">

                <div className="content">

                    <div className="image-content">
                        <img src="/images/srpurificadores.jpg" className="platinumImage" alt="Purificadores de água e linha compact" />
                    </div>

                    <div className="description">
                        <h2>Srpurificadores</h2>
                        <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção
                            gráfica, A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na
                            produção gráfica</p>

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

        </>
    )
}