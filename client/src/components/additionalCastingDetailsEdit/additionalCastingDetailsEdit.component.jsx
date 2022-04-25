import './additionalCastingDetailsEdit.styles.scss'

export const getIsoDate = (dateString) => {
    if (!dateString) return null;
    if (dateString[2].length === 2) return dateString;
    const arr = dateString.split('-')
    arr[2] = arr[2].slice(0,2)
    
    return arr.join('-')
}

const AdditionalCastingDetailsEdit = ({casting, update}) => {

    return(
        <>
            <h1>Edit Additional Casting Details</h1>
            <div className="casting-card-additional-details-container">
                <div className="casting-card-additional-detail">
                    <h3>Client</h3>
                    <input type="text" value={casting?.company} 
                    data-casting-key="company"
                    onChange={update} />
                </div>
                <div className="casting-card-additional-detail">
                    <h3>Dates</h3>
                    <label>Start Date</label>
                    <input type="date" value={getIsoDate(casting?.startDate)}
                    data-casting-key="startDate"
                    onChange={update} />
                    <br />
                    <label>End Date</label>
                    <input type="date" value={getIsoDate(casting?.endDate)}
                    data-casting-key="endDate"
                    onChange={update} />

                </div>
                <div className="casting-card-additional-detail">
                    <h3>Location</h3>
                    <input type="text" value={casting?.location} 
                    data-casting-key="location"
                    onChange={update} />
                </div>
                <div className="casting-card-additional-detail">
                    <h3>Pay</h3>
                    <input type="text" value={casting?.pay} 
                    data-casting-key="pay"
                    onChange={update} />
                </div>
            </div>
        
        </>
    )
}

export default AdditionalCastingDetailsEdit