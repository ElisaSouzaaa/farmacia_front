import './Login.css';

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center bg-steel-blue font-bold ">
            <div className="fundoLogin hidden lg:block"></div>

                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-slate-700 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className='text-slate-500 font-montserrat font-semibold'>Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
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
                    <button
                        type='submit'
                        className="rounded bg-light-blue flex justify-center
                                   hover:bg-medium-blue text-white w-1/2 py-2">
                        <span className='text-white font-bold font-montserrat'>Entrar</span>
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p className='text-slate-500 font-montserrat font-bold'>
                        Ainda não tem uma conta?{' '}
                        Cadastre-se
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login