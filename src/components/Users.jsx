// import React, { Component } from 'react';
 
// import { getUsers } from '../services/api';
 
// class Users extends Component { 
 
//     getUsers = async () => { 
//         const response = await getUsers() 
//         console.log({ response }) 
//     };
 
//     render() { 
//         return ( 
//             <button onClick={this.getUsers}>Buscar usuários</button> 
//         ) 
//     };
// } 
 
// export default Users;




// import React, { Component, Fragment } from 'react'
 
// import Loading from './Loading'
 
// import { getUsers } from '../services/api'
 
// class Users extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getUsers = async () => {
//         this.setState({ loading: true })
//         const response = await getUsers().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ response })
//     }
 
//     render() {
//         const { loading } = this.state
 
//         return (
//             <Fragment>
//                 <button onClick={this.getUsers}>Buscar usuários</button>
//                 <Loading loading={loading} message='Carregando usuários...' />
//             </Fragment>
//         )
//     }
// }
 
// export default Users




import React, { Component } from 'react';
 
import { getUsers } from '../services/api';
 
class Users extends Component {
 
    state = {
        loading: false
    };
 
    getUsers = async () => {
        const { showLoading, hideLoading } = this.props
 
        showLoading('Carregando usuários')
 
        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    };
 
    render() {
        return (
            <button onClick={this.getUsers}>Buscar usuários</button>
        )
    };
}
 
export default Users;