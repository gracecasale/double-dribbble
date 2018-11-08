import React from 'react';

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
            <div>
                <div className="card p-2" style={{ width: '16rem' }}>
                    <img className="card-img-top" src="https://placeimg.com/180/180/tech" alt="Card image cap" />
                    <div className="card-body d-flex justify-content-end p-1">
                        <span><i className="fa fa-eye text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-comment text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-heart text-muted mx-1 text-small"> 2,108</i></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="card p-2" style={{ width: '16rem' }}>
                    <img className="card-img-top" src="https://placeimg.com/180/180/tech" alt="Card image cap" />
                    <div className="card-body d-flex justify-content-end p-1">
                        <span><i className="fa fa-eye text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-comment text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-heart text-muted mx-1 text-small"> 2,108</i></span>
                    </div>
                </div>
            </div>

            <div>
                <div className="card p-2" style={{ width: '16rem' }}>
                    <img className="card-img-top" src="https://placeimg.com/180/180/tech" alt="Card image cap" />
                    <div className="card-body d-flex justify-content-end p-1">
                        <span><i className="fa fa-eye text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-comment text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-heart text-muted mx-1 text-small"> 2,108</i></span>
                    </div>
                </div>
            </div>

            <div>
                <div className="card p-2" style={{ width: '16rem' }}>
                    <img className="card-img-top" src="https://placeimg.com/180/180/tech" alt="Card image cap" />
                    <div className="card-body d-flex justify-content-end p-1">
                        <span><i className="fa fa-eye text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-comment text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-heart text-muted mx-1 text-small"> 2,108</i></span>
                    </div>
                </div>
            </div>

            <div>
                <div className="card p-2" style={{ width: '16rem' }}>
                    <img className="card-img-top" src="https://placeimg.com/180/180/tech" alt="Card image cap" />
                    <div className="card-body d-flex justify-content-end p-1">
                        <span><i className="fa fa-eye text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-comment text-muted mx-1 text-small"> 2,108</i></span>
                        <span><i className="fa fa-heart text-muted mx-1 text-small"> 2,108</i></span>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
  }

  export default Main;

