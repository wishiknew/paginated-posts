import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import Posts from './Posts';
import Info from './Info';
import Post from '../components/Post';


export default function Home () {
  return (
    <Router>
        <div>
          <h1>
          <ul className='pageNumbers'>
            { Array.from(Array(5).keys()).map((pageNumber) => (
              <li style={{listStyle: 'none'}}>
                <Link to={`/posts/${pageNumber}`}>Page{pageNumber}</Link>
              </li>
            ))}
            
          </ul>
          </h1>
        

          <Switch>
            <Route exact path="/posts/:pageNumber">
              <Posts/>
            </Route>
            <Route exact path="/info/:id">
              <Info/>
            </Route>
            <Route exact path="/">
              <Redirect to={{pathname: "/posts/0"}}/>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}