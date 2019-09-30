import React, {Fragment} from 'react';


const NewsList = (props) => {

    if (props.news) {
        return (
            <Fragment>
                <h1> News Feed </h1>
                {props.news.map((news_item, index) => {
                    return (
                        <div key={index}>
                            {news_item.news_headline}
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