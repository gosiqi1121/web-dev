import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'
import { postNewTweet, fetchAllTweets } from '../../../../../services/twitterService'

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('')
    const dispatch = useDispatch()
    const tweetClickHandler = () => {
        // dispatch({
        //     type: 'create-tweet',
        //     whatsHappening
        // })
        console.log(1);
        postNewTweet(dispatch, { post: whatsHappening });

    }

    const createTweetHandler = (event) => {
        const post = event.target.value; /* get data from input field*/
        // const newTweet = {
        //     post: post
        // };
        console.log(2);
        setWhatsHappening(post);                   /* change local state todo variable */
    }



    return (
        <>

                <table style={{marginBottom: '16px'}}>
                    <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>
                            <img src={'https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg'}
                                 className="rounded-circle"
                                 style={{width: '48px', margin: '16px'}}/>
                        </td>
                        <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event)=> setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                            <hr/>
                            <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                            <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                                Tweet
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>

        </>
    )
}
export default WhatsHappening
