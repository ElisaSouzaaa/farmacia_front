import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()
    return (
        <>
            <div className='bg-dark-blue flex justify-center items-center'>
                <div className="container flex flex-col items-center py-4">
                    <p className="font-montserrat font-semibold text-white uppercase">Farmácia Saúde | Copyright: {data}</p>
                    <p className="font-montserrat font-semibold text-white">Nos acompanhe em nossas redes sociais!</p>

                    <div className="flex gap-2">
                    <LinkedinLogo size={48} weight='bold' />
                    <InstagramLogo size={48} weight='bold' />
                    <FacebookLogo size={48} weight='bold' />
                </div>
                </div>
            </div>
        </>

    )
}

export default Footer