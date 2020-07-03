import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import './crudUser.css'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro do Usuário'
}

const urlBackend = 'http://localhost:3001/users'

// Com o uma cópia do estado eu posso guardálo para limpar determinadas informações,
// criar o estado, sobrescrever dados do usuário etc.
const iniState = {
    // Salvando o que o usuário estiver digitando no campo
    user: { name: '', email: '' },
    // Salvar os usuários cadastrados
    list: []
}



export default class User extends Component {
    state = { ...iniState }
    //Edit
    // Irá executar assim antes que os componentes sejam carregados
    componentWillMount() {
        axios(urlBackend).then(resp => {

            this.setState({ list: resp.data })
        })
    }
    // Quando clicar em cancelar o que está sendo armazenado no USER irá ser limpo
    cancel() {
        this.setState({ user: iniState.user })
    }
    // Vai ter que enviar ao backend os dados digitados
    save() {
        /*Inicialmente, quando preenchemos os campos ele não terão ID no user, fazendo com que
        a primeira vez que escrevemos e salvamos seja criado o id. A partir de quando clicamos no
        botao de editar, irá pegar o user da lista do estado do componente, esse terá o id criado
        pelo o envio POST ao clicar no botão salvar.

        Por isso quando clicamos no botao amarelo o próprio código já sabe que o id existe.
        */
        const user = this.state.user
        // PUT será quando o id existir,ou seja, quando o user já tiver sido cadastrado na lista do componente
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${urlBackend}/${user.id}` : urlBackend

        // O próprio axios quando realizar o post irá criar o ID no user
        axios[method](url, user).then(resp => {
            // User = User do stado, UserData=User pegado do backend
            // Para evitar com que o estado do componente receba usuários
            //repetido, irá ser realizado um filtro pelo o id.
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: iniState.user, list })
        })

    }
    getUpdatedList(user, add = true) {
        // Vai filtrar os valores analisando se o id do usuário que estou querendo enviar
        // é diferente do id armazenado em cada usuário da lista do estado
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }
    // Quando clicar no botão de editar irá preencher  os campos de nome e email do USER
    load(user) {
        console.log(user)
        this.setState({ user })
    }
    remove(user) {
        axios.delete(`${urlBackend}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })

    }
    // Pegar os valores digitados pelo o usuário quando altera o campo nome e email
    updateField(e) {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })

    }
    
    renderForm() {
        return (
            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Nome:</label>
                            <input className='form-control' name='name' value={this.state.user.name}
                                type="text" placeholder='Digite o nome...'
                                onChange={e => this.updateField(e)}
                            />


                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >E-mail:</label>
                            <input className='form-control' name='email' value={this.state.user.email}
                                type="text" placeholder='Digite o email...'
                                onChange={e => this.updateField(e)}
                            />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-success'
                            onClick={e => this.save()}
                        >Salvar</button>
                        <button className='btn btn-secondary ml-2'
                            onClick={e => this.cancel(e)}
                        >Cancelar</button>
                    </div>

                </div>
            </div>
        )
    }
    renderTable() {
        return (
            <table className='table mt-5'>
                <thead className='tableId'>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </table>
        )
    }
    renderRow() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td className='UserId p-4 ta-center'>{user.id}</td>
                    <td className='UserName p-4'>{user.name}</td>
                    <td className='UserEmail p-4'>{user.email}</td>
                    <td className='Buttons p-4'>
                        <button className='btn btn-warning'
                            onClick={e => this.load(user)}
                        >
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger ml-2'
                            onClick={e => this.remove(user)}
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })

    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }


}