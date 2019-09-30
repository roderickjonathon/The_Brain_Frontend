import React, {Fragment} from 'react';


const TwitterList = (props) => {

    if (props.tweets.length > 0) {
        return (
            <Fragment>
                <h1> Twitter Feed </h1>
                {props.tweets.map((tweet, index) => {
                    return (
                        <div key={index}>
                            {tweet.serialized_tweet_db.text}
                            <br />
                            <br />
                        </div>

                    )})}
            </Fragment>
        )
    } else {
        return (
            <div>
                "No tweets available at this time"
            </div>
        )
    }
};

export default TwitterList;