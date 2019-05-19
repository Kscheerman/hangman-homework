import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import homepage from './components/homepage';
import './App.css';
import { game } from './components/game'



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={homepage} />
          <Route path="/hangman" component={game} />
        </main>
      </div>
    );
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(App); 