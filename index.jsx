import ReactDOM from 'react-dom'
import Root from './components/Root.jsx'
 

const  root = document.getElementById('react-root'),
  f = (root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render);
  f(<Root />, root );