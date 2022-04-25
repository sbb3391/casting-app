import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCasting, isLoading } from '../../store/casting/casting.selector'
import { getCastingStart } from "../../store/casting/casting.action";

import CastingCardFull from "../../components/castingCardFull/castingCardFull.component";
import Loading from '../../components/loading/loading.component'

const ShowCasting = (props) => {
    const { castingId } = useParams();

    const dispatch = useDispatch();
    const casting = useSelector(selectCasting);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(getCastingStart(castingId));
    }, []);


    return(
        <div className="casting-container">
            {
                loading ? <Loading />
                : <CastingCardFull casting={casting} fullCastingDetails={true} />
            }
        </div>

    )
};

export default ShowCasting;