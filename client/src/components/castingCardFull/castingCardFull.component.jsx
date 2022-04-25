import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../loading/loading.component'
import Icons from '../../assets/roleIcons'
import axios from 'axios'

import AdditionalCastingDetailsShow from '../additionalCastingDetailsShow/additionalCastingDetailsShow.component'

import './castingCardFull.styles.scss'

const CastingCardFull = ({ casting, fullCastingDetails}) => {

    const navigate = useNavigate();

    const goToCastingRole = (event) => {
        navigate(`/castingRoles/${event.target.dataset.castingRoleId}/applications/new`)
    }

    const editCasting = () => {
        navigate(`/castings/${casting._id}/edit`)
    }

    const renderCastingRoles = (castingRolesArr) => {
        return castingRolesArr.map( (cr, index) => {
            const CastingIcon = Icons[`${cr.role.roleImageUrl}`]
            return(
                <div onClick={goToCastingRole} className={`casting-card-casting-role-container`} data-casting-role-id={cr._id} key={index}>
                    <div className={`casting-card-casting-role-icon`} data-casting-role-id={cr._id} >
                        { <CastingIcon castingId={cr._id} />}
                    </div>
                    <span className={`casting-card-casting-role-type`} data-casting-role-id={cr._id} >{cr.role.name}</span>
                    <span className={`casting-card-casting-role-gender`} data-casting-role-id={cr._id} >{cr.gender}</span>
                </div>
            )
        });
    }

    const renderAdditionalCastingDetails = () => {
        return casting.additionalCastingDetails.map( cd => {
            return <li>{cd}</li>
        })
    }

    return(
        <div className="casting-full-container">
            { casting._id && (
                    <div key={casting._id} className={`casting-card-full`} >
                        <button className="edit-casting-button" onClick={editCasting}>Edit Casting</button>
                        <div className={`casting-card-full-logo-container`}>
                            <div className={`casting-card-full-logo`}>
                                <img className={`casting-card-full-logo-image`} src={casting.castingImageUrl} alt={casting.company} />
                            </div>
                        </div>
                        <div className={`casting-card-description`}>{casting.castingDescription}</div>
                        {<AdditionalCastingDetailsShow casting={casting}/>}
                        <div className="casting-card-details-list-container">
                            {
                                casting.additionalCastingDetails.length > 0 && (
                                    <>
                                        <h3>Additional Castings Details</h3>
                                        <ul>
                                            {renderAdditionalCastingDetails()}
                                        </ul>
                                    </>
                                )
                            }
                        </div>
                        <div className={`casting-card-casting-roles-container`}>
                            <h1>Want to apply? Select a role:</h1>
                            {renderCastingRoles(casting.castingRoles)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CastingCardFull;