
import { useNavigate } from "react-router-dom";
import Icons from '../../assets/roleIcons'

import './castingCardShort.styles.scss'


const CastingCardShort = ({ casting, fullCastingDetails}) => {

    const navigate = useNavigate();

    const goToCastingDetails= (event) => {
        navigate(`/castings/${event.target.dataset.castingId}`)
    }

    const renderCastingRoles = (castingRolesArr) => {
        return castingRolesArr.map( (cr, index) => {
            const CastingIcon = Icons[`${cr.role.roleImageUrl}`]
            return(
                <div className={`casting-card-short-casting-role-container`} data-casting-role-id={cr._id} key={index}>
                    <div className={`casting-card-short-casting-role-icon`} data-casting-role-id={cr._id} >
                        { <CastingIcon castingId={cr._id} />}
                    </div>
                    <span className={`casting-card-short-casting-role-type`} data-casting-role-id={cr._id} >{cr.role.name}</span>
                    <span className={`casting-card-casting-role-gender`} data-casting-role-id={cr._id} >{cr.gender}</span>
                </div>
            )
        });
    }

    return(
        <>
            { casting._id && casting.show && (
                    <div key={casting._id} className={`casting-card-short`} >
                        <div className={`casting-card-short-logo-container`} onClick={goToCastingDetails} data-casting-id={casting._id}>
                            <div className={`casting-card-short-logo`} data-casting-id={casting._id}>
                                <img className={`casting-card-short-logo-image`} src={casting.castingImageUrl} alt={casting.company} data-casting-id={casting._id}/>
                            </div>
                        </div>
                        <div className="casting-card-short-extra-details">
                            <div className="casting-card-short-extra-detail">
                                <span className="extra-detail-header">location</span>
                                <span className="casting-card-short-extra-detail-location">{casting.location}</span>
                            </div>
                            <div className="casting-card-short-extra-detail">
                                <span className="extra-detail-header">dates</span>
                                <span className="casting-card-short-extra-detail-dates">
                                    {new Date(casting.startDate).toLocaleDateString()} - {new Date(casting.endDate).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <span className={`casting-card-short-description`}>{casting.castingDescription}</span>
                        <div className={`casting-card-short-casting-roles-container`}>
                            {renderCastingRoles(casting.castingRoles)}
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default CastingCardShort;