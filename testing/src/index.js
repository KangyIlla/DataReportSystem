import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {App} from './components/App';
import {HashRouter as Router, Route} from "react-router-dom";

/**
 * This is what is displayed in the header bar
 */
const appName = 'App Name'

const rootElement = document.getElementById('root')

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, rootElement)

serviceWorker.unregister()
