import './additionalCastingDetailsShow.styles.scss'

import { getIsoDate } from '../additionalCastingDetailsEdit/additionalCastingDetailsEdit.component';

const AdditionalCastingDetailsShow = ({casting}) => {
    return(
        <div className="casting-card-additional-details-container">
            <div className="casting-card-additional-detail">
                <h3>Client</h3>
                <span>{casting.company}</span>
            </div>
            <div className="casting-card-additional-detail">
                <h3>Dates</h3>
                <span>{new Date(casting.startDate).toLocaleDateString()} - {new Date(casting.endDate).toLocaleDateString()}</span>
            </div>
            <div className="casting-card-additional-detail">
                <h3>Location</h3>
                <span>{casting.location}</span>
            </div>
            <div className="casting-card-additional-detail">
                <h3>Pay</h3>
                <span>{casting.pay}</span>
            </div>
        </div>
        
    )
}

export default AdditionalCastingDetailsShow;