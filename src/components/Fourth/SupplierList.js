import React, {Fragment} from 'react';


const SupplierList = (props) => {

    if (props.suppliers) {
        return (
            <Fragment>
                <h1> Fourth Supplier List </h1>
                {props.suppliers.map((supplier, index) => {
                    return (
                        <div key={index}>
                            {supplier.supplier_name}
                        </div>

                    )})}
            </Fragment>
        )
    }

};

export default SupplierList;