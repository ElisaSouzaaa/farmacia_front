import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Categoria apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar a Categoria')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl font-poppins text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-montserrat font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-dark-blue font-montserrat text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 font-montserrat h-full'>{categorias.descricao}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 font-montserrat bg-castanha-profunda hover:bg-red-900 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 font-montserrat bg-light-blue
                                   hover:bg-medium-blue flex items-center justify-center' onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria