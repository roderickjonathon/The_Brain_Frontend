import React, {Component, Fragment} from 'react';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../components/common/CustomerList';
import NewsList from '../components/common/NewsList';
import SuppliersList from '../components/common/SupplierList';
import TwitterList from '../components/common/TwitterList';

class PelicanContainer extends Component {

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
        const promise1 = request.get('/pelican/pelican_customers.php');
        const promise2 = request.get('/pelican/pelican_suppliers.php');
        const promise3 = request.get('/pelican/pelican_tweets.php');
        const promise4 = request.get('/pelican/pelican_news.php');

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
                        <Switch>
                            <Route exact path="/pelican_customers" render={(props) => {
                                return  <CustomerList customers={this.state.customers}/>
                            }}/>

                            <Route exact path="/pelican_news" render={(props) => {
                                return <NewsList news={this.state.news}/>
                            }}/>

                            <Route exact path="pelican_suppliers" render={(props) => {
                                return <SuppliersList suppliers={this.state.suppliers}/>
                            }}/>

                            <Route exact path="/pelican_tweets" render={(props) => {
                                return <TwitterList tweets={this.state.tweets}/>
                            }}/>
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        )
    }
}

export default PelicanContainer;