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
    // How do I want to fetch the data? Do I want separate state for each data? different classes?
    // Perhaps a news, twitter, customer class etc.

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