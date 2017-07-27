import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import{BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import MainProductsPage from './components/MainProductsPage'
import About from './components/About'
import SingleProductPage from './components/SingleProductPage'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={MainProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'))
registerServiceWorker()
