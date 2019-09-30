import React, {Fragment} from 'react';


const TwitterList = (props) => {

    if (props.tweets) {
        return (
            <Fragment>
                <h1> Fourth Twitter Feed </h1>
                {props.tweets.map((tweet, index) => {
                    return (
                        <div key={index}>
                            {tweet.serialized_tweet_db.text}
                        </div>

                    )})}
            </Fragment>
        )
    }
};

export default TwitterList;