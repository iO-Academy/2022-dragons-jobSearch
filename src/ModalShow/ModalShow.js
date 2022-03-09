const Modal = ({modalShow, setModalDisplay}) => {

    const openModal = () => {
        setModalDisplay(true)
    }

    const closeModal = () => {
        setModalDisplay(false)
    }

    const overlay = () => {
        setModalDisplay(false)
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
