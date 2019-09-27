import React, {Component} from 'react';
import Request from '../helpers/request.js';
import CustomerList from '../components/customers/CustomerList';

class MainContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            tweets: [],
            suppliers: [],
            customers: [],
            news: []
        };
        //binding goes here
    }


    componentDidMount() {
           const request = new Request();
           const promise = request.get('fourth/fourth_customers.php');

           console.log(promise);

    }

    render(){
    return <div>
        "hi"
    </div>
    }
}

export default MainContainer;