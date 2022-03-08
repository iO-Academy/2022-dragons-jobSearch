const ContractTypeTag = ({ contractType }) => {


    return (
        <>
            {contractType !== null &&
                <div><h6 className="typeTag">{contractType}</h6></div>
            }
        </>
    )
}

export default ContractTypeTag