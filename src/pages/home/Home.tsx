function Home() {
    return (
        <>
            <div className='flex justify-center bg-steel-blue h-[100vh]'>
                <div>
                    <div className='max-w-7xl flex flex-col items-center my-6'>
                        <h2 className='font-poppins text-6xl text-slate-600 uppercase'>farmácia saúde!</h2>
                        <p className='font-montserrat text-slate-500'>Seu bem-estar é a nossa prioridade</p>

                    </div>
                    <div className='max-w-7xl flex justify-center items-center'>
                        <img src="..\src\assets\img\Pharmacist.gif" alt="Imagem da Home" />
                        <div>
                            <p className='text-center text-slate-600 font-semibold font-montserrat'>Farmácia Saúde é o lugar para construir sua farmácia online!</p>
                            <p className='text-center text-slate-600 font-semibold  font-montserrat'>Cadastre-se e registre seus produtos e lucre sem sair de casa!</p>
                            <button className='bg-light-blue hover:bg-medium-blue text-white font-semibold rounded mx-60 my-10 w-40 h-10'>Cadastre-se</button>
                            <p className='text-center text-slate-600 font-semibold  font-montserrat'>Já é cadastrado? Faça login!</p>
                            <button className='bg-light-blue hover:bg-medium-blue text-white font-semibold rounded mx-60 my-10 w-40 h-10'>Login</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home