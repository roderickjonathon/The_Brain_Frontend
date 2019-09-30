import React, {Component} from 'react';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../components/common/CustomerList';
import NewsList from '../components/common/NewsList';
import SuppliersList from '../components/common/SupplierList';
import TwitterList from '../components/common/TwitterList';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

class BeaconContainer extends Component {

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
        const promise1 = request.get('/beacon/beacon_customers.php');
        const promise2 = request.get('/beacon/beacon_suppliers.php');
        const promise3 = request.get('/beacon/beacon_tweets.php');
        const promise4 = request.get('/beacon/beacon_news.php');

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
            <div className="BeaconContainer">
                <div id="dropdown-container">
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Beacon Purchasing</Button>
                    <Dropdown.Toggle variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="/beacon/beacon-customers">Customers</Dropdown.Item>
                        <Dropdown.Item href="/beacon/beacon-suppliers">Suppliers</Dropdown.Item>
                        <Dropdown.Item href="/beacon/beacon-news">News</Dropdown.Item>
                        <Dropdown.Item href="/beacon/beacon-tweets">Tweets</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <Router>
                        <Switch>
                            <div>
                            <Route exact path="/beacon/beacon-customers" render={(props) => {
                                return  <CustomerList customers={this.state.customers}/>
                            }}/>

                            <Route exact path="/beacon/beacon-news" render={(props) => {
                                return <NewsList news={this.state.news}/>
                            }}/>

                            <Route exact path="/beacon/beacon-suppliers" render={(props) => {
                                return <SuppliersList suppliers={this.state.suppliers}/>
                            }}/>

                            <Route exact path="/beacon/beacon-tweets" render={(props) => {
                                return <TwitterList tweets={this.state.tweets}/>
                            }}/>
                            </div>
                        </Switch>
                </Router>

            </div>

        )
    }
}

export default BeaconContainer;