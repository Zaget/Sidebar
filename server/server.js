import nr from 'newrelic';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import templateFn from './template';
import Sidebar from '../client/src/components/Sidebar.jsx';
import path from 'path';

const app = express();

const DIST_DIR = path.join(__dirname, '../client/dist');
const port = process.env.PORT || 3001;
const db = require('../database/indexPostGres');

db.connect();

app.use(express.static(DIST_DIR));

app.get('/restaurants/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  db.any(`select * from zagnar where id = ${req.params.id}`).then((data) => {
    const body = renderToString(<Sidebar data={data} />);
    const title = 'Zagetti321';
    res.send(templateFn(
      title,
      body,
      data[0],
    ));
  });
});

app.listen(port);
