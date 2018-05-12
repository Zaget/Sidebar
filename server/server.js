import nr from 'newrelic';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import templateFn from './template';
import Sidebar from '../client/src/components/Sidebar.jsx';


const app = express();

const port = const port = process.env.PORT || 3001;;
const db = require('../database/indexPostGres');

db.connect();

app.use(express.static('/Users/mrmac/ericCartman/sidebar-master/client/dist/'));

app.get('/restaurants/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  db.any(`select * from zagnar where id = ${req.params.id}`).then((data) => {
    const body = renderToString(<Sidebar data = {data} />);
    const title = 'Zagetti';
    res.send(templateFn(
      title,
      body,
      data[0],
    ));
  });
});

app.listen(port);
