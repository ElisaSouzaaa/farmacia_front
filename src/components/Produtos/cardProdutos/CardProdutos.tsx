import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutosProps {
    post: Produto
}

function CardProdutos({post}: CardProdutosProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between mx-2'>
                
            <div>
                <div className="flex w-full bg-dark-blue py-2 px-4 items-center gap-4">
                    <img src={post.usuario?.foto} className='h-12 rounded-full' alt="Imagem do usuário" />
                    <h3 className='text-lg text-white font-poppins font-bold text-center uppercase'>{post.usuario?.nome}</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-poppins font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <p>Categoria: {post.categorias?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))} </p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarProduto/${post.id}`} className='w-full text-white font-semibold bg-light-blue
                    hover:bg-medium-blue flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${post.id}`} className='text-white font-semibold bg-castanha-profunda
                    hover:bg-red-900 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos