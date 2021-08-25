import React, { useEffect } from 'react'
import logoImage from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logoDark2.png'
import './styles.css'


export default function Header() {

    useEffect(() => {



        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const navLink = document.querySelectorAll(".navlink")
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");

        menuBtn.addEventListener('click', () => {
            navbar.classList.add("show");
            menuBtn.classList.add("hide");
            body.classList.add("disabled");

            navLink.forEach(link => {

                link.addEventListener('click', () => {
                    body.classList.remove("disabled");
                    navbar.classList.remove("show");
                    menuBtn.classList.remove("hide");
                })

            })
        })


        cancelBtn.addEventListener('click', () => {
            body.classList.remove("disabled");
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
        })

        window.onscroll = () => {

            if (window.scrollY > 500) {
                navbar.classList.add("sticky")
                const logo = document.getElementById("logo")
                logo.setAttribute("src", logoDark)
                logo.style.width = "170px"
                logo.style.height = "90px"
            } else {
                navbar.classList.remove("sticky");
                const logo = document.getElementById("logo")
                logo.setAttribute("src", logoImage)
                logo.style.width = "200px"
                logo.style.height = "150px"
            }

        }

        window.onbeforeunload = (event) => {
            const e = event || window.event;

            e.preventDefault();
            if (e) {
                e.returnValue = '';
            }
            return '';
        };

    }, [])

    function handleScrollTo(event, elementId) {

        event.preventDefault();
        

        document.getElementById(`${elementId}`).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <nav className="navbar">

            <div className="content">


                <img src={logoImage}

                    className="logo"
                    id="logo"
                    alt="" />


                <ul className="menuList">
                    <div className="icon cancel-btn">
                        <i aria-hidden className="fas fa-times"></i>
                    </div>

                    <li><a href="/" onClick={e => handleScrollTo(e, 'home')} className="navLink"> Home </a></li>
                    <li><a href="/" onClick={e => handleScrollTo(e, 'about')} className="navLink"> Sobre </a></li>
                    <li><a href="/" onClick={e => handleScrollTo(e, 'projects')} className="navLink"> Projetos </a></li>
                    <li><a href="/" onClick={e => handleScrollTo(e, 'footer')} className="navLink"> Contato </a></li>

                </ul>

                <div className="icon menu-btn">
                    <i aria-hidden className="fas fa-bars"></i>
                </div>

            </div>
        </nav>
    )
}