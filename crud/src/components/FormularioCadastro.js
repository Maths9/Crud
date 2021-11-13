import React, { useEffect, useState } from 'react';
import fire from '../database/firebase'
const FormularioCadastro = (props) =>{

    

    const CamposIniciaisDeValores = {
        Nome:'',
        NotaUm:'',
        NotaDois:'',
        NotaTres: '',
        NotaQuatro:''
      
    }

    const [ values, setValues] = useState(CamposIniciaisDeValores)
    
    useEffect( () =>{
        if(props.idAtual == ''){
            setValues({
                ...CamposIniciaisDeValores
            })
        }
        else {
            setValues({
                ...props.dadosAlunos[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosAlunos])

    const manipuladorOnChange = e =>{
        let {name, value} = e.target
        
        setValues({
            ...values,
            [name]:value
        },[])
    }

    const manipuladorFormEnvio = e =>{
        e.preventDefault() 
        console.log(values)
        props.addEedit(values) 
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group col-md-10">
                <div className="input-grou-prepen">
                    <div className="input-group-text">
                    
                    </div>
                </div>

                <input className="form-control" type="text" placeholder="Nome" name="Nome" value={values.Nome}
                    
                onChange={manipuladorOnChange}/>
            </div>

        
            <div className="">
               
                <div className="form-group input-group col-md-5">
                    <div className="input-grou-prepen">
                        <div className="input-group-text">
                        
                        </div>
                    </div>

                    <input className="form-control"  type="number" placeholder="NotaUm" name="NotaUm" value={values.NotaUm}
                    onChange={manipuladorOnChange}/>
                </div>

                <div className="form-group input-group col-md-5">
                    <div className="input-grou-prepen">
                        <div className="input-group-text">
                          
                        </div>
                    </div>
                    <input className="form-control" type="number" placeholder="NotaDois" name="NotaDois" value={values.NotaDois}
                    onChange={manipuladorOnChange}/>
                </div>
            </div>

            <div className="form-group input-group col-md-5">
                    <div className="input-grou-prepen">
                    <div className="input-group-text">
                        
                       
                    </div>
                </div>

                <input className="form-control" type="number" placeholder="NotaTres" name="NotaTres" value={values.NotaTres}
                onChange={manipuladorOnChange}/>
            </div>
           
            <div className="form-group input-group col-md-5">
                    <div className="input-grou-prepen">
                        <div className="input-group-text">
                       
                    </div>
                </div>

                <input className="form-control" type="number" placeholder="NotaQuatro" name="NotaQuatro" value={values.NotaQuatro}
                onChange={manipuladorOnChange}/>
            </div>

            <div className="form-group">
                <input type="submit" value={props.idAtual == '' ? 'Cadastrar' : 'atualizar'} className="btn btn-secondary btn-block" />
            </div>
        </form>

    )
}

export default FormularioCadastro