import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './components/App/index.css';
import {App} from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
