import { useGlobalContext } from './context'

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext()

    return (
        <div>
            <div className ={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-container'}`}>
                <h3>modal content</h3>
                <button onClick={closeModal}>close</button>
            </div>
        </div>
    )
}

export default Modal