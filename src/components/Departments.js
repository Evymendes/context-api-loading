// import React, { Component } from 'react';
 
// import { getDepartments } from '../services/api';
 
// class Departments extends Component { 
 
//     getDepartments = async () => { 
//         const response = await getDepartments() 
//         console.log({ response }) 
//     }; 
 
//     render() { 
//         return ( 
//             <button onClick={this.getDepartments}>Buscar departamentos</button> 
//         ) 
//     };
// } 
 
// export default Departments;


// import React, { Component, Fragment } from 'react'
 
// import Loading from './Loading'
 
// import { getDepartments } from '../services/api'
 
// class Departments extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getDepartments = async () => {
//         this.setState({ loading: true })
//         const response = await getDepartments().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ response })
//     }
 
//     render() {
//         const { loading } = this.state
 
//         return (
//             <Fragment>
//                 <button onClick={this.getDepartments}>Buscar departamentos</button>
//                 <Loading loading={loading} message='Carregando departamentos...' />
//             </Fragment>
//         )
//     }
// }
 
// export default Departments;


import React, { Component } from 'react';
 
import { getDepartments } from '../services/api';
 
class Departments extends Component {
 
    state = {
        loading: false
    };
 
    getDepartments = async () => {
        const { showLoading, hideLoading } = this.props
 
        showLoading('Carregando departamentos')
 
        const response = await getDepartments().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    };
 
    render() {
        return (
            <button onClick={this.getDepartments}>Buscar departamentos</button>
        )
    };
}
 
export default Departments;