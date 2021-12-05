import React, { useEffect } from 'react'
import WhoToFollowListItem from "./WhoToFollowListItem";
import { useDispatch, useSelector } from 'react-redux'
import { findAllWho } from '../../services/whoService'

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => findAllWho(dispatch), [])
    return (
        <ul className="list-group">
            <li className="list-group-item">
                Who to follow
            </li>
            {

                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    )
                })

            }
        </ul>
    );
}
export default WhoToFollowList;
