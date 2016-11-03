import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import FeedThing from './components/FeedThing';
import GameContainer from './components/GameContainer';


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<GameContainer />, document.getElementById('app'))
})
