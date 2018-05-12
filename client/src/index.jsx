import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar.jsx';
import '../dist/test.css';

const data = JSON.parse(document.getElementById('data').value.replace(/\'/g, '"'));

ReactDOM.hydrate(<Sidebar
  data={[data]}
/>, document.getElementById('apateezSidebar'));

