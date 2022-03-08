const ContractTypeTag = ({ contractType }) => {


    return (
        <>
            <h6>{contractType !== null ? contractType : ""}</h6>
        </>
    )
}

export default ContractTypeTag