import Popup from 'reactjs-popup';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-medium-blue'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormularioProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;