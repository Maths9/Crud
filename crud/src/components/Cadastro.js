import React, { useState, useEffect } from 'react'
import FormularioCadastro from './FormularioCadastro'
import fireDb from '../database/firebase'


const Cadastro = () => {

    const [dadosAlunos, setDadosAlunos] = useState({})

    let [idAtual, setIdAtual] = useState('')


    useEffect(() => {
        fireDb.child('cadastros').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosAlunos({
                    ...dbPhoto.val()
                })
            } else {
                setDadosAlunos({})
            }
        })
    }, [])

    const addEedit = obj => {

        if (idAtual == '') {
            console.log(obj)
            fireDb.child('cadastros').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDb.child(`cadastros/${idAtual}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }


    const deleteCadastro = idAtual => {
        if (window.confirm('Deseja deletar esse cadastro ?')) {
            fireDb.child(`cadastros/${idAtual}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }


    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">NOTAS 2021</h1>
                    <p className="lead"> TURMA DE MATEMÁTICA</p>
                </div>
            </div>

            <div className="row">

                <div className="col-md-4">
                    <FormularioCadastro {...({ addEedit, idAtual, dadosAlunos })} />
                </div>

                <div className="col-8">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <td>Nome</td>
                                <td>NotaUm</td>
                                <td>NotaDois</td>
                                <td>NotaTres</td>
                                <td>NotaQuatro</td>
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosAlunos).map(id => {
                                    return <tr key={id}>
                                        <td> {dadosAlunos[id].Nome}</td>
                                        <td> {dadosAlunos[id].NotaUm}</td>
                                        <td> {dadosAlunos[id].NotaDois}</td>
                                        <td> {dadosAlunos[id].NotaTres}</td>
                                        <td> {dadosAlunos[id].NotaQuatro}</td>

                                        <td>
                                            <a className="btn btn-outline-success" onClick={() => { setIdAtual(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>

                                            <a className="btn btn-danger" onClick={() => deleteCadastro(id)}>
                                                <i className=" far fa-trash-alt"></i>
                                            </a>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Cadastro