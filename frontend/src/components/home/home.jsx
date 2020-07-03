import React from 'react'
import Main from '../template/Main'

export default props=>{
    return <Main icon='spinner' title='inicio' subtitle='Teste React'>
        <div className='display-3'>Bem vindo!</div>
        <hr />
        <p className='mb-0'>Bem vindo ao teste de cadastro idealizado pelo
        o Davi, desenvolvido através do React Js, utilizando bootstrap e font-awesome.
        </p>
    </Main>
}