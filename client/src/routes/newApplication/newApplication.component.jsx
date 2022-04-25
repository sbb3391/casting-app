import './newApplication.styles.scss'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { USER_DATA } from '../../components/user/userData';
import { CASTINGS_DATA }from '../castings/castingData.js';
import Question from '../../components/quesition/question.component';
import './newApplication.styles.scss'

import {  getCastingRoleStart } from '../../store/castingRole/castingRole.action'
import { getCastingsStart } from "../../store/castings/castings.action";
import { selectCastings, isLoading } from "../../store/castings/castings.selector";
import { selectCasting } from '../../store/casting/casting.selector';
import { selectCastingRole } from '../../store/castingRole/castingRole.selector';


const NewApplication = () => {
    const dispatch = useDispatch();
    const { castingRoleId } = useParams();
    const casting = useSelector(selectCasting);
    const castingRole = useSelector(selectCastingRole);

    useEffect(() => {
        if (castingRole._id !== castingRoleId) {
            dispatch(getCastingRoleStart(castingRoleId))
        }
    }, []);

    const renderQuestions = (questionsArr) => {
        return questionsArr && questionsArr.map( q => {
            return <Question key={q._id} responseType={q.questionType} text={q.text} name={q._id}/>
        })
    }

    return(
        <div className='new-application-container'>
            {
                castingRole._id && (
                <>
                    <div className='new-application-main-column'>
                        <h1>Application for {castingRole.role.name} -- {casting.company}</h1>
                        <h2>Additional Casting Details:</h2>
                            <ul>
                                <li>We are looking for someone with a small to medium build (size mens's large shirt)</li>
                                <li>Please do not apply if you are a paid professional mountain biker</li>
                            </ul>
                        <h2>Applicant Overview</h2>
                        <h2>General Casting Questions</h2>
                        <div className='questions-container'>
                            {renderQuestions(casting.castingQuestions)}
                        </div>
                        <h2>Role Specific Questions</h2>
                        <div className='questions-container'>
                            {castingRole && renderQuestions(castingRole.castingRoleQuestions)}
                        </div>
                        <div className='new-application-casting-role-questions'>
                        </div>
                    </div>
                    <div className='new-application-media-column'>
                        <h1>Media</h1>
                        <div className='new-application-upload-required'>
                            <h3>General Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>General Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>General Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>Headshot</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>Role Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>Role Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>Role Photo</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                        <div className='new-application-upload-required'>
                            <h3>30 second video</h3>
                            <div className='new-application-upload-required-input'>
                                <input type="file" />
                            </div>
                        </div>
                    </div>

                </>
                )
            }
        </div>

    )
};

export default NewApplication;