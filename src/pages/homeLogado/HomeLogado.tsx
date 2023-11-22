function HomeLogado() {
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
                      <p className='text-center text-slate-600 font-semibold font-montserrat'>Seja Bem-vinde! Aqui você tem total autonomia sobre o seu negócio!</p>
                      <p className='text-center text-slate-600 font-semibold  font-montserrat'>Que tal dacadastrar um novo produto para seus clientes?</p>
                      <button className='bg-light-blue hover:bg-medium-blue text-white font-semibold rounded mx-60 my-10 w-40 h-10'>Novo Produto</button>
                  </div>
              </div>
  
          </div>
      </div>
  </>
    )
  }
  
  export default HomeLogado