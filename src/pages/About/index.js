import React from 'react'
import me from '../../assets/images/me.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaGitAlt } from 'react-icons/fa'
import vscodeLogo from '../../assets/images/vscode.png'
import './styles.css'
export default function About() {

    return (

        <section className="about">
            <div className="section">

                <p className="line">Ficou interessado ? Saiba mais sobre mim :)</p>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                    <path fill="#222" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="sectionAboutMe">
                <h1>Quem sou eu ?</h1>

                <img src={me} alt="" />

                <p className="quotation">Me chamo Lucas Alexandre, tenho atualmente 18 anos de idade e sou apaixonado por programação desde os 16. Comecei a programar e entender seus conceitos com a linguagem Python, mas após brincar bastante com a linguagem percebi que a minha vocação era realmente a área Web, desde então eu comecei a aprender linguagens base de Web, como por exemplo, HTML e CSS, logo após isso comecei a estudar PHP e assim comecei alguns projetos, mas tive que deixar a programação um pouco de lado e focar no ENEM, após passar na faculdade estou atualmente cursando sup. técnologo em Análise e desenvolvimento de sistemas pela Unip e voltei a fazer projetos mas dessa vez utilizando o framework Bootstrap.</p>

                <a href="/" className="projectsBtn">Ver projetos</a>
            </div>

            <div className="sectionAboutLanguages">
                <h1>Linguagens e Ferramentas que uso</h1>
                <div className="languages">
                    <div className="language-card">
                        <FaHtml5 className="common-icon" color="#f16524" />
                        <h2>HTML</h2>
                        <p>HTML é a linguagem base da Web, responsável por escrever a estrutura de
                            um site servinvod para dar significado e
                            organizar as informações de uma página para que o navegador entenda.
                        </p>
                    </div>

                    <div className="language-card">
                        <FaCss3Alt className="common-icon" color="#03ade1" />
                        <h2>CSS</h2>
                        <p>O CSS é o estilo de todas as páginas Web, sendo responsável
                            por alterar as cores de texto, tamanho, background, adicionar bordas, espaçamentos
                            entre títulos e textos dentre outras coisas que deixam o site muito mais bonito.
                        </p>
                    </div>
                    <div className="language-card">
                        <FaJsSquare className="common-icon" color="#ffda3e" />
                        <h2>Javascript</h2>
                        <p>
                            JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web,
                            se algum elemento da sua página tem uma animação gráfica, ou então te mostra um pop-up ele com certeza foi feito
                            com JS.
                        </p>
                    </div>

                    <div className="language-card">
                        <FaNode className="common-icon" color="#52ae5f" />
                        <h2>Node.js</h2>
                        <p>Node.js é um software que permite executar Javascript fora de um navegador, tendo suporte para modularização e integração com
                            frameworks bastante conhecidos como o Express (usado para a construção de servidores) nos dando flexibidade e velocidade para criar sistemas
                            Web.
                        </p>
                    </div>

                    <div className="language-card">
                        <img src={vscodeLogo} width="200px" height="200px" alt="" />
                        <h2>Visual Studio Code</h2>
                        <p>O Visual Studio Code é um editor de código,
                            Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe,
                            complementação inteligente de código, snippets e refatoração de código.
                        </p>
                    </div>
                    
                    <div className="language-card">
                        <FaGitAlt className="common-icon" color="#f05033" />
                        <h2>Git</h2>
                        <p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software,
                            mas pode ser usado para registrar o histórico de edições de
                            qualquer tipo de arquivo (Exemplo: alguns livros digitais são disponibilizados no
                            GitHub e escrito aos poucos publicamente).
                        </p>
                    </div>

                   
                </div>
            </div>
        </section>
    )
}