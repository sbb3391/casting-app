/* eslint-disable no-fallthrough */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from '../../components/loading/loading.component'
import Icons from '../../assets/roleIcons'
import axios from 'axios';
import _, { map } from 'underscore' 
import { cloudinaryUpload } from "../../utils/backendFetches/cloudinary/cloudinary.fetches";

import { toggleEditImage, removeCastingRoleFromCasting, addCastingRoleToCasting, updateCasting } from '../../store/casting/casting.action'
import { selectCasting, isLoading, selectEditImage, selectCastingEdit } from '../../store/casting/casting.selector'

import AdditionalCastingDetailsEdit from '../../components/additionalCastingDetailsEdit/additionalCastingDetailsEdit.component'

import './editCasting.styles.scss'

export const getIsoDate = (dateString) => {
    if (!dateString) return null;
    const arr = dateString.split('-')
    arr[2] = arr[2].slice(0,2)
    
    return arr.join('-')
}

const EditCasting = () => {

    const navigate = useNavigate();

    const { castingId } = useParams();
    
    const dispatch = useDispatch();
    const casting = useSelector(selectCasting);
    const loading = useSelector(isLoading);
    const editImage = useSelector(selectEditImage)
    const castingEdit = useSelector(selectCastingEdit);

    const defaultEditedCasting = {
        additionalCastingDetails: casting.additionalCastingDetails,
        company: casting.company,
        castingDescription: casting.castingDescription,
        castingImageUrl: casting.castingImageUrl,
        pay: casting.pay,
        location: casting.location,
        startDate: getIsoDate(casting.startDate),
        endDate: getIsoDate(casting.endDate)
    }

    const [editedCasting, setEditedCasting] = useState(defaultEditedCasting)

    const [castingEditImageUrl, setCastingEditImageUrl] = useState(castingEdit.castingImageUrl)
    const [imageFile, setImageFile ] = useState(null)
    const [allRoles, setAllRoles] = useState(null);
    const [activeCastingRole, setActiveCastingRole] = useState(null);
    const [activeCastingDetail, setActiveCastingDetail] = useState(null);
    
    const defaultNewCastingRole = {casting: casting._id, role: '', gender: '', description: ''}
    const defaultNewCastingQuestion = { castingId: casting._id, text: '', questionType: ''};
    const [newCastingRole, setNewCastingRole] = useState(defaultNewCastingRole);
    const [newCastingQuestion, setNewCastingQuestion ] = useState(defaultNewCastingQuestion)
    const [newAdditionalCastingDetail, setNewAdditionalCastingDetail] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:4040/api/v1/roles')
        .then( resp => {
            const sorted = resp.data.sort((a,b) => {
                return a.name.localeCompare(b.name)
            });

            setAllRoles(sorted)
        })
    }, []);

    const updateEditedCasting = (event, action=null, initialValue=null) => {
        const newEditedCasting = {...editedCasting}
        let key = event.target.dataset.castingKey
        let arr = newEditedCasting[key];
        let target = event.target.value
        let index; 

        switch (action) {
            case 'add':
                let value = event.target.dataset.value
                newEditedCasting[key] = [...arr, value]

                setEditedCasting(newEditedCasting)
                setNewAdditionalCastingDetail("");
                break;
            case 'delete':
                index = arr.indexOf(initialValue);
                
                newEditedCasting[key] = [...arr.slice(0, index), ...arr.slice(index + 1)]
                setEditedCasting(newEditedCasting)
                break;
            case 'edit':
                index = arr.indexOf(initialValue);
                newEditedCasting[key] = [...arr].map( (e, i) => {
                    if (i === index) {
                        return target
                    } else {
                        return e
                    }
                })
                setEditedCasting(newEditedCasting)
                break;
            default: 
                newEditedCasting[key] = event.target.value
                setEditedCasting(newEditedCasting)

        }
    }

    const deleteCastingRole = (event) => {
        const cr = event.target.id
        axios.delete(`http://localhost:4040/api/v1/castingRoles/${cr}`)
            .then( res => {
                dispatch(removeCastingRoleFromCasting(res.data._id))
            })
    }

    const updateNewCastingRole = (event) => {
        newCastingRole[event.target.dataset.newCastingRoleKey] = event.target.value

        setNewCastingRole({...newCastingRole})
    }

    const updateNewCastingQuestion = (event) => {
        newCastingQuestion[event.target.dataset.newCastingQuestionKey] = event.target.value

        setNewCastingQuestion({...newCastingQuestion})
    }

    const updateNewAdditionalCastingDetail = (event) => {
        setNewAdditionalCastingDetail(event.target.value)
    }

    const addNewAdditionalCastingDetail = (event) => {
        const newAdditionalCastingDetailsArr = [...casting.additionalCastingDetails, newAdditionalCastingDetail]
        const updates = {}
        updates[event.target.dataset.tableKey] = newAdditionalCastingDetailsArr;
        axios.patch(`http://localhost:4040/api/v1/castings/${casting._id}`, updates)
            .then( resp => {
                setNewAdditionalCastingDetail("");
                dispatch(updateCasting(resp.data))   
            })
    }

    const addNewCastingRole = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:4040/api/v1/castings/${casting._id}/castingRoles`, newCastingRole)
            .then( resp => {
                setNewCastingRole(defaultNewCastingRole)
                dispatch(addCastingRoleToCasting(resp.data.castingRole))
            })
    }

    const addNewCastingQuestion = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:4040/api/v1/castings/${casting._id}/questions`, newCastingQuestion)
            .then( resp => {
                setNewCastingQuestion(defaultNewCastingQuestion)
                // dispatch(addCastingQuestionToCasting(resp.data.castingQuestion))
            })
    }

    const createRoleOptions = () => {
        if (allRoles) {
            const roleMap = allRoles.map( role => {
                return(
                    <option key={role._id} value={role._id}>{role.name}</option>
                )
            })

            return roleMap
        } else {
            return null;
        }
    }

    const onImageChange = (e) => {
        const newImageFile = [...e.target.files][0];

        setCastingEditImageUrl(URL.createObjectURL(newImageFile))
        setImageFile(newImageFile);
        updateEditedCasting(e)
        dispatch(toggleEditImage(!editImage));
    }

    const handleImageFileUpload = () => {
        return new Promise(resolve => {
            const uploadData = new FormData();
            uploadData.append("file", imageFile, "file");
            uploadData.append('public_id', `companies/${casting.company}`)
            setImageFile(null)
            cloudinaryUpload(uploadData)
            .then( resp => {
                const url = resp.data.result.secure_url
                const newEditedCasting = {...editedCasting}
                newEditedCasting.castingImageUrl = url
                setEditedCasting(newEditedCasting)
                resolve({ newUrl: url});
            })
            .catch( err => console.log(err.message))
        })
    }

    const returnToSavedImage = () => {
        setCastingEditImageUrl(castingEdit.castingImageUrl)
        dispatch(toggleEditImage(false))
    }

    const returnToPreviousImage = () => {
        if (imageFile) {
            setCastingEditImageUrl(URL.createObjectURL(imageFile))
        } else {
            setCastingEditImageUrl(castingEdit.castingImageUrl)
        }
        dispatch(toggleEditImage(false))
    }

    const renderImageOrChangeImagePrompt = () => {
        if (!editImage) {
            return(
                <>
                    <div className={`casting-card-logo-container`}>
                        <div className={`casting-card-logo`}>
                            <img className={`casting-card-logo-image`} src={castingEditImageUrl} alt={casting.company} />
                        </div>
                    </div>
                    {
                        castingEditImageUrl !== castingEdit.castingImageUrl && (
                            <>
                                {/* {
                                    imageFile && <span data-casting-key='castingImageUrl' value="newImage" onClick={updateEditedCasting}>save new image</span>
                                } */}
                                <span onClick={() => returnToSavedImage()}>return to saved image</span>
                            </>
                        )
                    }
                    <span onClick={() => dispatch(toggleEditImage(!editImage))}>change image</span>
                </>
            ) 
        } else {
            return(
                <>
                    <div className={`casting-card-logo-container`}>
                        <input type='file' accept="image/*" data-casting-key="castingImageUrl" onChange={onImageChange}/>
                    </div>
                    <span onClick={() => returnToPreviousImage()}>return to previous image</span>
                </>
            )
        }
    }

    const renderSaveButton = () => {
        if (_.isEqual(editedCasting, defaultEditedCasting)) {
            return null
        } else {
            return <button onClick={updateCastingDb} className="save-casting-button">Save Casting</button>
        }
    }

    const updateCastingDb = async () => {
        if (editedCasting.castingImageUrl !== casting.castingImageUrl) {

             handleImageFileUpload()
             .then( resp => {
                 const aNewEditedCasting = {...editedCasting, castingImageUrl: resp.newUrl}
                 axios.patch(`http://localhost:4040/api/v1/castings/${casting._id}`, aNewEditedCasting)
                 .then( (resp) => {
                     dispatch(updateCasting(resp.data))
                 })
             })

        } else {
            axios.patch(`http://localhost:4040/api/v1/castings/${casting._id}`, editedCasting)
            .then( (resp) => {
                dispatch(updateCasting(resp.data))
            })
        }
    }

    const renderAdditionalCastingDetails = () => {
        if (editedCasting?.additionalCastingDetails?.length > 0 ) {
            return editedCasting.additionalCastingDetails.map( (cd, i) => {
                return(
                    <div className="list-item-container"
                        onMouseOver={() => setActiveCastingDetail(cd)} 
                        onMouseLeave={() => setActiveCastingDetail(null)}
                    >          
                       <div className="list-item-buttons">
                            {
                                activeCastingDetail === cd && (
                                    <>
                                        <span className="remove"
                                        data-casting-key="additionalCastingDetails"
                                        onClick={(event) => updateEditedCasting(event, 'delete', cd)}
                                        >&#10060;</span>
                                        <span data-casting-key="additionalCastingDetails" 
                                        onClick={() => console.log('edit')}
                                        className="edit">&#9998;</span>
                                    </>
                                )
                            }
                        </div>
                    
                        <textarea type="text" value={cd} 
                            className="additional-casting-detail-input"
                            key={`casting-detail-${i}`}
                            data-casting-key="additionalCastingDetails"
                            onChange={(event) => updateEditedCasting(event, "edit", cd)} 
                            rows="2"
                        />
                    </div>
                )
            })
        } else {
            return(
                <span>No additional details. Add below</span>
            )
            
        }
    } 

    const renderCastingRoles = (castingRolesArr) => {
        return castingRolesArr.map( (cr, index) => {
            const CastingIcon = Icons[`${cr.role.roleImageUrl}`]
            return(
                <div 
                onMouseOver={() => setActiveCastingRole(cr._id)} 
                onMouseLeave={() => setActiveCastingRole(null)}
                className={`edit-casting-casting-role-container`} 
                data-casting-role-id={cr._id} key={index}>
                    <div className={`edit-casting-casting-role-icon`} data-casting-role-id={cr._id} >
                        { <CastingIcon data-casting-id={cr._id} />}
                    </div>
                    <span className={`edit-casting-casting-role-type`} data-casting-role-id={cr._id} >{cr.role.name}</span>
                    <span className={`edit-casting-casting-role-gender`} data-casting-role-id={cr._id} >{cr.gender}</span>
                        <div className='edit-casting-casting-role-edit-options'>
                            {
                                activeCastingRole === cr._id && (
                                    <>
                                        <span id={cr._id} onClick={deleteCastingRole}>delete</span>
                                        <span id={cr._id}>close/open</span>
                                        <span onClick={() => navigate(`/castingRoles/${cr._id}/edit`)}>edit</span>
                                    </>
                                )
                            }
                        </div>
                </div>
            )
        });
    }

    const renderCastingQuestions = (castingQuestionsArr) => {
        return castingQuestionsArr.map( (cq, index) => {
            return(
                <div key={cq._id} className="edit-casting-casting-question-container">
                    <div className="edit-casting-casting-question-text">
                        <span>{cq.text}</span>
                    </div>
                    <span className="edit-casting-casting-question-question-type">{cq.questionType}</span>
                </div>
            )
        })
    }

    return(
        <div className="casting-edit-container">
            <div className="save-casting-button-container">
                {renderSaveButton()}
            </div>
            { castingEdit._id && (
                    <div key={castingEdit._id} className={`casting-edit-card`} >
                        {renderImageOrChangeImagePrompt()}
                        <textarea maxLength="500" wrap="hard" rows="8"
                            data-casting-key="castingDescription" 
                            className={`casting-card-description-textarea`} 
                            value={editedCasting?.castingDescription}
                            onChange={updateEditedCasting}
                        ></textarea>
                        {
                            editedCasting && (
                                <AdditionalCastingDetailsEdit casting={editedCasting} update={updateEditedCasting}/>
                            )
                        }
                        <div className="casting-card-edit-casting-detail-list">
                            <h3>Edit additional casting details:</h3>
                                {renderAdditionalCastingDetails()}
                        </div>
                        <div className="add-additional-casting-detail">
                            <span data-value={newAdditionalCastingDetail} data-casting-key='additionalCastingDetails' className="add-btn" onClick={(event) => updateEditedCasting(event, "add")}>&#43;</span>
                            <textarea className="add-input" value={newAdditionalCastingDetail} onChange={updateNewAdditionalCastingDetail} rows="2" />
                        </div>
                        <div className={`casting-card-casting-roles-container`}>
                            <h1>Edit casting roles:</h1>
                            {renderCastingRoles(castingEdit.castingRoles)}
                        </div>
                        <div className="add-casting-role">
                            <h3>New Casting Role</h3>
                            <div className="add-casting-role-inputs">
                                <div className="select-role">
                                    <label>select role</label>
                                    <select value={newCastingRole.role} onChange={updateNewCastingRole} data-new-casting-role-key="role">
                                        <option hidden>choose role</option>
                                        {createRoleOptions()}
                                    </select>
                                </div>
                                <div className="new-casting-role-description">
                                    <label>description</label>
                                    <textarea onChange={updateNewCastingRole} value={newCastingRole.description} data-new-casting-role-key="description" rows="3" />
                                </div>  
                                <div className="new-casting-role-gender">
                                    <label>gender</label>
                                    <select value={newCastingRole.gender} data-new-casting-role-key="gender" onChange={updateNewCastingRole}>
                                        <option hidden>choose gender</option>
                                        <option>male</option>
                                        <option>female</option>
                                        <option>any</option>
                                    </select>
                                </div>
                            </div>
                            <button onClick={addNewCastingRole}>Add Casting Role</button>
                        </div>
                        <div className={`casting-card-casting-questions-container`}>
                            <h1>Edit casting questions:</h1>
                            {renderCastingQuestions(castingEdit.castingQuestions)}
                        </div>
                            <div className="add-casting-question">
                                <h3>New Casting Question</h3>
                                <div className="add-casting-question-inputs">
                                    <div className="new-casting-question-text">
                                        <label>question text</label>
                                        <textarea onChange={updateNewCastingQuestion} data-new-casting-question-key="text" rows="2" />
                                    </div>
                                    <div className="new-casting-question-type">
                                        <label>question type</label>
                                        <select onChange={updateNewCastingQuestion} data-new-casting-question-key="questionType">
                                            <option hidden>choose question type</option>
                                            <option>boolean</option>
                                            <option>short text</option>
                                            <option>long text</option>
                                            <option>number</option>
                                        </select>
                                    </div>  
                                </div>
                                <button onClick={addNewCastingQuestion}>Add Casting Question</button>
                            </div>
                    </div>
                )
            }
        </div>
    )
}

export default EditCasting;