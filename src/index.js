import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'

ReactDOM.render(
  // 检查代码中不合理的地方 React.StrictMode
  <BrowserRouter>
    <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
// store.subscribe( () => {
//   ReactDOM.render(<App />,document.getElementById('root'))
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


