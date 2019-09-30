import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation = () => (
    <div className="nav">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/home">Home</Dropdown.Item>
                <br/>
                <Dropdown.Item href="/beacon">Beacon Purchasing</Dropdown.Item>
                <br/>
                <Dropdown.Item href="/fourth">Fourth Hospitality</Dropdown.Item>
                <br/>
                <Dropdown.Item href="/pelican">Pelican Procurement</Dropdown.Item>
                <br/>
                <Dropdown.Item href="/wizard">Procure Wizard</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>

);

export default Navigation;