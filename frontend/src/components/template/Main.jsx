import React,{Fragment} from 'react'
import './Main.css'

import Header from './Header'

export default props=>{
    return <Fragment>
        <Header {...props}/>
        {/* Conteúdo */}
        <main className="content container-fluid">
            <div className='geral p-3 mt-4 ml-4 mr-4'>
                {props.children}
            </div>
        </main>
    </Fragment>
}