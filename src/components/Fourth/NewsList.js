import React, {Fragment} from 'react';


const NewsList = (props) => {

    if (props.news) {
        return (
            <Fragment>
                <h1> Fourth News List </h1>
                {props.news.map((news_item, index) => {
                    return (
                        <div key={index}>
                            {news_item.news_headline}
                        </div>

                    )})}
            </Fragment>
        )
    }

};

export default NewsList;