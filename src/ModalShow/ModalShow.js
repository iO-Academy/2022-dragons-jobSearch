const Modal = ({modalShow, setModalShow}) => {

    const openModal = () => {
        setModalShow(true)
    }

    const closeModal = () => {
        setModalShow(false)
    }

    const overlay = () => {
        setModalShow(false)
    }

    const modalClick = (e) => {
        e.stopPropagation()
    }

    return (
        <>
            <div onClick={openModal} >open modal button</div>
            <div onClick={overlay} className={modalShow === false ? 'overlay' : 'overlay overlayOpen'}>
                <div onClick={modalClick} className={modalShow === true ? 'modalOpen' : 'modalClosed'}>
                    <p className='closeMe' onClick={closeModal}>close me</p>
                    <p>Modal content</p>
                </div>
            </div>
        </>
    )


}

export default Modal
