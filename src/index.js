import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import App from './components/App';
// import reducers from './reducers';

// const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render( <App />, document.querySelector('#root')
)


// At the time to deploy th portfolio to gihubpages I have to run 'npm run build'