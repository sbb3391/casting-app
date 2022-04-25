import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from '../../components/loading/loading.component'
import Icons from '../../assets/roleIcons'
import axios from 'axios';

import {  getCastingRoleStart } from '../../store/castingRole/castingRole.action'
import { selectCastingRole, isLoading } from '../../store/castingRole/castingRole.selector'

import './editCastingRole.styles.scss'

const EditCastingRole = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const castingRoleParamsId = params.castingRoleId
    const castingRole = useSelector(selectCastingRole)

    if (castingRole._id !== castingRoleParamsId) {
        dispatch(getCastingRoleStart(castingRoleParamsId))
    }

    return(
        <div>
            <h2>Edit Casting Role Details:</h2>
            <div>
                <div>
                    
                </div>
                <div>
                    <label>description</label>
                </div>
                <div>
                    <label>gender</label>
                </div>
            </div>
            <h2>Edit casting role questions</h2>
            <h2>Edit required casting role media</h2>
            <div className="edit-casting-role-casting-questions">

            </div>
        </div>
    )
}

export default EditCastingRole;