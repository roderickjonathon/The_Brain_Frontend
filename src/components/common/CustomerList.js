import React, {Fragment} from 'react';


const CustomerList = (props) => {

        if (props.customers.length > 0) {
            return (
                <Fragment>
                    <div className="customerList">
                    <h1> Customer List </h1>
                    {props.customers.map((customer, index) => {
                        return (
                            <div className="customer" key={index}>
                                {customer.customer_name}
                            <br />
                            </div>

                        )
                    })}
                </div>
                </Fragment>
            )
        } else {
            return (
                <div>
                    "No data on customers available at this time"
                </div>
            )
        }

};

export default CustomerList;