import React from "react";
import { Route, Link } from "react-router-dom";
import Home from './views/Home';
import Uploader from './views/Uploader';

const PrimaryLayout = () =>
  <div className="primary-layout">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/uploader">Uploader</Link>
      </li>
    </ul>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/uploader" component={Uploader} />
    </main>
  </div>;

export default PrimaryLayout;