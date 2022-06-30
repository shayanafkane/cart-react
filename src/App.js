import React from 'react'
import data from './components/back/Data'
import Header from './components/front/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export default function App() {
  const { productItems } = data;
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  )
}
