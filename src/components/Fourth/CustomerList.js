import React, {Fragment} from 'react';


const CustomerList = (props) => {

    if (props.customers) {
        return (
            <Fragment>
                <h1> Fourth Customer List </h1>
                {props.customers.map((customer, index) => {
                return (
                    <div key={index}>
                        {customer.customer_name}
                    </div>

                    )})}
            </Fragment>
        )
    }

};

export default CustomerList;