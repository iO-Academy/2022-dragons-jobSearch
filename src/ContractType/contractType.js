const ContractTypeTag = ({ contractType }) => {


    return (
        <>
            {contractType !== null &&
            <h6 className="typeTag">{contractType}</h6>
            }
        </>
    )
}

export default ContractTypeTag