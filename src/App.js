import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <header className="h-25 border d-flex flex-column">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Dribbble</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Shots <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Designers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hiring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In</a>

              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" />
            </form>
          </nav>
          <section className="bg-black text-white d-flex flex-grow-1 flex-column justify-content-center align-items-center">
            <p><span className="font-weight-bold">What are you working on? </span>Double-dribbble is where designers get inspired and hired.</p>
            <button className="btn btn-sm btn-pink">
              Continue <i className="fa fa-long-arrow-right"></i>
            </button>
          </section>
          <section className="h-25 d-flex justify-content-center align-items-center bg-dark text-white">
            <p className="text-white-50">Looking for a designer? <u><a href="#" className="text-white">Learn more.</a></u></p>
          </section>
        </header>


        <main className="h-100 d-flex flex-column">
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
      </div>
    );
  }
}

export default App;
