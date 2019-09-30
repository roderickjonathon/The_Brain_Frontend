import React, {Fragment} from 'react';


const NewsList = (props) => {

    if (props.news.length > 0) {
        return (
            <Fragment>
                <h1> News Feed </h1>
                {props.news.map((news_item, index) => {
                    return (
                        <div key={index}>
                            <br/>
                            <a href={news_item.news_link}>{news_item.news_headline} </a>
                            <br/>
                            <br/>
                        </div>
                    )})}
            </Fragment>
        )
    } else {
        return (
            <div>
                "No news available at this time"
            </div>
        )
    }

};

export default NewsList;