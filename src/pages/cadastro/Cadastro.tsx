import './Cadastro.css'
import { useNavigate } from 'react-router-dom'

function Cadastro() {

  const navigate = useNavigate()

  function back() {
    navigate('/login')
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-steel-blue font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
          <h2 className='text-slate-700 font-poppins text-5xl '>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className='text-slate-500 font-montserrat font-semibold'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
             
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='text-slate-500 font-montserrat font-semibold'>Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className='text-slate-500 font-montserrat font-semibold'>Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='text-slate-500 font-montserrat font-semibold'>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='text-slate-500 font-montserrat font-semibold'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded font-montserrat font-semibold text-white bg-castanha-profunda hover:bg-red-700 w-1/2 py-2' onClick={back}>
              Cancelar
            </button>
            <button 
                type='submit'
                className='rounded font-montserrat font-semibold text-white bg-light-blue 
                           hover:bg-medium-blue w-1/2 py-2' 
                >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro