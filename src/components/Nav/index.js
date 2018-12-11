import React from "react";
import "../../app.css";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="https://gunfightingyeti.github.io/Assignment3/Bootstrap%20Website/index.html" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="./assets/images/apple-icon-57.png" width="50" height="50" alt="Tim Lewis Logo"/>
        </a>
        <div class="navbar-brand ml-2 title">Reactive News</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active ml-2">
                    <a class="nav-link" href="/">Search</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ml-2" href="/saved">Saved</a>
                </li>
                {/* <li class="nav-item ml-2">
                    <a href="/scrape"><button class="nav-link btn btn-danger"><i class="far fa-newspaper"></i> Scrape New Articles</button></a>
                </li> */}
            </ul>
        </div>
    </nav>
    );  
}

export default Nav;