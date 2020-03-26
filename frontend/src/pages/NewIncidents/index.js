import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIncident(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value, setValue] = useState('')
    const history = useHistory()
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value,
        };
        try{
            await api.post('incidents',data,{
                headers:{
                Authorization: ongId
                }
            })

            history.push('/profile')
        }catch(err){
            alert('erro ao cadastrar caso')
        }
    }
    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={18} color="#E02043"></FiArrowLeft>
                   Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder='Tipo do Caso'
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />
                <textarea 
                placeholder='Descrição'
                value={description}
                onChange={e=> setDescription(e.target.value)}
                />
                <input 
                placeholder='Valores em Reais'
                value={value}
                onChange={e=> setValue(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}