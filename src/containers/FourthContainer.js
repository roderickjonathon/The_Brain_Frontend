import React, {Component} from 'react';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../components/common/CustomerList';
import NewsList from '../components/common/NewsList';
import SuppliersList from '../components/common/SupplierList';
import TwitterList from '../components/common/TwitterList';

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
    }

    componentDidMount() {
        const request = new Request();
        const promise1 = request.get('/fourth/fourth_customers.php');
        const promise2 = request.get('/fourth/fourth_suppliers.php');
        const promise3 = request.get('/fourth/fourth_tweets.php');
        const promise4 = request.get('/fourth/fourth_news.php');

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
            <Router>
                <Switch>
            <div className="FourthContainer">
              <Route path="/fourth/fourth-customers" render={(props) => {
                 return <CustomerList customers={this.state.customers}/>
              }}/>

                <Route path="/fourth/fourth-suppliers" render={(props) => {
                    return <SuppliersList suppliers={this.state.suppliers}/>
                }}/>

                <Route path="/fourth/fourth-news" render={(props) => {
                    return <NewsList news={this.state.news}/>
                }}/>

                <Route path="/fourth/fourth-tweets" render={(props) => {
                    return <TwitterList tweets={this.state.tweets}/>
                }}/>
            </div>
                </Switch>
            </Router>
        )
    }
}

export default FourthContainer;