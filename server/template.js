const style = require('../client/src/components/mini.css');

module.exports = (title, body, data) =>
  `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <style type="text/css">${style._getCss()}</style>
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </head>
    <body>
      <div id="apateezSidebar">${body}</div>
      <div id="test"></div>
      </body>
    <input type="hidden" id="data" value="${JSON.stringify(data).replace(/\"/g, "'")}" /> 
    <script src="/bundle.js"></script>
  </html>
`;

