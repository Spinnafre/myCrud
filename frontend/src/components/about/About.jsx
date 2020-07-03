import React from 'react'
import Main from '../template/Main'
import Img from '../../assets/imgs/js.jpg'
import './About.css'
export default props =>
    <Main title='Sobre' subtitle='Sobre o projeto' icon='address-card'>
        <div className='princ'>
            <div className='conteudoImg'>
                <img src={Img} alt="Imagem experiencia" className='img' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eos
                perferendis saepe sunt, odit quasi laudantium voluptatum non ad libero at porro
                 tempore magni vel aliquid sit. Laudantium, cum magni!</p>

            </div>
            <div className='conteudo'>
                <h1>Ferramentas:</h1>

                <ul className='listas'>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>Bootstrap</li>
                    <li>Axios</li>
                    <li>Font-awesome</li>
                </ul>
            </div>



        </div>
    </Main>