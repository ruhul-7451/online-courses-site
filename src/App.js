import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound404 from './components/NotFound404/NotFound404';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/course/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="*">
            <NotFound404></NotFound404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
