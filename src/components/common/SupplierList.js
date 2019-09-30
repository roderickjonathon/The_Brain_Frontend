import React, {Fragment} from 'react';


const SupplierList = (props) => {

    if (props.suppliers.length > 0) {
        return (
            <Fragment>
                <h1> Suppliers List  </h1>
                {props.suppliers.map((supplier, index) => {
                    return (
                        <div key={index}>
                            {supplier.supplier_name}
                        </div>

                    )})}
            </Fragment>
        )
    } else {
        return (
            <div>
                "No data on suppliers available at this time"
            </div>
        )
    }

};

export default SupplierList;