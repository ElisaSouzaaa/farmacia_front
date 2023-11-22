function Navbar() {
    return (
        <>
            <div className='w-full h-10 bg-medium-blue flex justify-between text-lg text-white'>
                <div className="container flex justify-between text-lg mx-4 my-2">
                    <p className="font-montserrat font-semibold">Farmácia Saúde</p>

                    <div className="flex gap-4 mx-4">
                        Produtos |
                        Categorias |
                        Cadastrar categoria |
                        Perfil |
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar