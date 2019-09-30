import React, {Component} from 'react';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../components/common/CustomerList';
import NewsList from '../components/common/NewsList';
import SuppliersList from '../components/common/SupplierList';
import TwitterList from '../components/common/TwitterList';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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
            <div className="FourthContainer">
                <div id="dropdown-container">
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Fourth Hospitality</Button>
                    <Dropdown.Toggle variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="/fourth/fourth-customers">Customers</Dropdown.Item>
                        <Dropdown.Item href="/fourth/fourth-suppliers">Suppliers</Dropdown.Item>
                        <Dropdown.Item href="/fourth/fourth-news">News</Dropdown.Item>
                        <Dropdown.Item href="/fourth/fourth-tweets">Tweets</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            <Router>
                <Switch>
            <div>
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

            </div>
        )
    }
}

export default FourthContainer;