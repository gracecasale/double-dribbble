import React from 'react';
import Card from './Card';

function Main(props) {
    return (<main className="h-100 d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center align-items-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark font-weight-bold">
                        Popular <i className="fa fa-angle-down"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark font-weight-bold">
                        Shots <i className="fa fa-angle-down"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark font-weight-bold">Now <i className="fa fa-angle-down"></i>
                    </a>
                </li>
            </ul>
        </nav>

        <section className="project-grid flex-grow-1 p-4 d-flex flex-wrap justify-content-around">
            <Card src="https://placeimg.com/180/180/tech" views={2108} comments={2108} likes={2108} />
            <Card src="https://placeimg.com/180/180/animals" views={1190} comments={2108} likes={2108}/>
            <Card src="https://placeimg.com/180/180/architecture" views={786} comments={2108} likes={2108}/>
            <Card src="https://placeimg.com/180/180/nature" views={1602} comments={2108} likes={2108}/>
            <Card src="https://placeimg.com/180/180/people" views={642} comments={397} likes={15}/>
        </section>
    </main>
    );
}

export default Main;

