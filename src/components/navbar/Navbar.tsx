import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    return (
        <>
            <div className='w-full h-10 bg-medium-blue flex justify-between text-lg text-white'>
                <div className="container flex justify-between text-lg mx-4 my-2">

                    <Link to='./home'><p className="font-montserrat font-semibold">Farmácia Saúde</p></Link>

                    <div className="flex gap-4 mx-4">
                        <Link to='/produtos' className='hover:underline'>Produtos</Link> |
                        <Link to='/categorias' className='hover:underline'>Categorias</Link> |
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link> |
                        Perfil |
                        <Link to='' className='hover:underline' onClick={logout}>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar