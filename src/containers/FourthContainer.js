import React, {Component, Fragment} from 'react';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../components/Fourth/CustomerList';
import NewsList from '../components/Fourth/NewsList';
import SuppliersList from '../components/Fourth/SupplierList';
import TwitterList from '../components/Fourth/TwitterList';

class FourthContainer extends Component {

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
        const promise1 = request.get('fourth/fourth_customers.php');
        const promise2 = request.get('fourth/fourth_suppliers.php');
        const promise3 = request.get('fourth/fourth_tweets.php');
        const promise4 = request.get('fourth/fourth_news.php');

        const promises = [promise1, promise2, promise3, promise4];
        Promise.all(promises).then(data =>
        this.setState( {
            customers: data[0]['data'],
            suppliers: data[1]['data'],
            tweets: data[2]['data'],
            news: data[3]['data']

        }));
    }

    render(){
        return (
            <div>
                <Router>
        <Fragment>

            <Route exact path="fourth/fourth_customers" render={(props) => {
                return  <CustomerList customers={this.state.customers}/>
            }}/>

            <Route exact path="fourth/fourth_news" render={(props) => {
                return <NewsList news={this.state.news}/>
            }}/>

            <Route exact path="fourth/fourth_suppliers" render={(props) => {
                return <SuppliersList suppliers={this.state.suppliers}/>
            }}/>

            <Route exact path="fourth/fourth_tweets" render={(props) => {
                return <TwitterList tweets={this.state.tweets}/>
            }}/>

        </Fragment>
                </Router>
            </div>
        )
    }
}

export default FourthContainer;