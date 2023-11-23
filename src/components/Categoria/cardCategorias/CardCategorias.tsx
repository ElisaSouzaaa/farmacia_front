import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps {
    categorias: Categoria
}

function CardCategorias({categorias}: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-dark-blue text-white font-poppins font-bold text-2xl'>Tema</header>
            <p className='p-8 text-3xl bg-slate-200 font-montserrat h-full'>{categorias.descricao}</p>
            
            <div className="flex">
                <Link to={`/editarCategoria/${categorias.id}`} 
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button className='bg-light-blue'>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categorias.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button className='bg-castanha-profunda'>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias