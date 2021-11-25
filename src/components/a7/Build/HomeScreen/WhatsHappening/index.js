import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'

const WhatsHappening = () => {
    const tweets = useSelector(state => state.tweetsA7)

    let [whatsHappening, setWhatsHappening] = useState('')
    const dispatch = useDispatch()
    const tweetClickHandler = () => {
        dispatch({
            type: 'create-tweet',
            whatsHappening
        })
    }

    const createTweetHandler = (event) => {
        const post = event.target.value; /* get data from input field*/
        const newTweet = {
            post: post
        };
        setWhatsHappening(newTweet);                   /* change local state todo variable */
    }


    return (
        <>
            <div className="row">
                <div className="row">
                    <div className="col-2 m-0 p-0">
                        <img src="https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg"
                        className="rounded-circle flex-wrap" width="50px" height="50px"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <textarea className="bg-black text-white form-control me-0 ps-0 pe-0"  value={whatsHappening.post}
                                      onChange={createTweetHandler}
                                        placeholder="What`s happening...">
                            </textarea>
                        </div>
                        <div className="mb-4">
                            <button className="btn btn-primary float-end flex-wrap rounded-pill" onClick={tweetClickHandler}>
                                <span>Tweet</span>
                            </button>
                        </div>
                    </div>


                </div>


                <ul className="list-group">
                    {tweets.map(item => {
                            return(
                                <PostItem item={item}/>
                            )
                        }

                    )}
                </ul>

            </div>
        </>
    )
}
export default WhatsHappening
