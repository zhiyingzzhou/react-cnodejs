import Root from './root.js';
import style from 'styles/main.scss';
import ReactDOM from 'react-dom';
require('es6-promise').polyfill();

ReactDOM.render(<Root />,document.getElementById('main-container'));