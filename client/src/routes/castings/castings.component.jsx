import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from '../../components/loading/loading.component'
import Icons from '../../assets/roleIcons'
import axios from 'axios';
import CastingCardShort from "../../components/castingCardShort/castingCardShort.component";

import { getCastingsStart } from "../../store/castings/castings.action";
import { selectCastings, isLoading } from "../../store/castings/castings.selector";

import './castings.styles.scss'
import { filter } from "underscore";


const Castings = (props) => {
    const dispatch = useDispatch();
    const castings = useSelector(selectCastings)
    const loading = useSelector(isLoading)

    const [allRoles, setAllRoles] = useState(null)
    const [filteredCastings, setFilteredCastings] = useState(castings)

    useEffect( () => {
        dispatch(getCastingsStart())
    }, []);

    useEffect( () => {
        const newFilteredCastings = castings.map( (c) => {
            c.show = true
            return c
        })
        setFilteredCastings(newFilteredCastings)
    }, [castings])

    useEffect( () => {
        axios.get('http://localhost:4040/api/v1/roles')
        .then( resp => {
            const sorted = resp.data.sort((a,b) => {
                return a.name.localeCompare(b.name)
            });

            sorted.forEach( r => {
                r.show = true
            })

            setAllRoles(sorted)
        })
    }, []);

    const handleRoleFilterClick = (event) => {
        const checked = event.target.checked
        event.target.checked = false

        const newAllRoles = allRoles.map( ar => {
            if (ar._id === event.target.name) {
                ar.show = false
            }

            return ar
        })

        setAllRoles(newAllRoles)

        const newFilteredCastings = filteredCastings.map( c => {
            if (!c.castingRoles.find( cr => cr.role._id === event.target.name)) {
                c.show = false
            }
            return c
        })

        setFilteredCastings(newFilteredCastings)
    }

    const handleRoleSelect = (event) => {
        const value = event.target.value

        setAllRoles(allRoles.map( r => {
            if (r.name === value) {
                r.show = false;
                return r
            } else {
                return r
            }
        }))

        const rolesToFilter = allRoles.filter( r => !r.show)

        const newFilteredCastings = filteredCastings.map( c => {
            if ( c.castingRoles.find( cr => {
                return rolesToFilter.find( r => r._id === cr.role._id)
            })) {
                c.show = true;
                return c
            } else {
                c.show = false;
                return c
            }
        })

        setFilteredCastings(newFilteredCastings)
    }


    return(
        <div className="castings-container">
            <div className="castings-filter-container">
                <h1>Filters</h1>
                <div>
                    <h2>Show By Role</h2>
                    <select onChange={handleRoleSelect}>
                        <option hidden>choose role</option>
                        {
                            allRoles && allRoles.map( r => {
                                return r.show ? <option>{r.name}</option> : null
                            })
                        }
                    </select>
                    <div>
                        <ul>
                            {
                                allRoles && allRoles.map( r => {
                                    return !r.show ? <li>{r.name}</li> : null
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="casting-cards-short-container">
                {
                    loading ? <Loading /> 
                    : filteredCastings.map( casting => <CastingCardShort casting={casting} />)
                }
            </div>
        </div>

    )
};

export default Castings;