import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=SaltLake&APPID=e6d03308e46ef159cfbf5f857a6798a5`
axios({
  method: 'get',
  url: apiURL,
})
.then(function (response) {
    console.log(response);
})
  .catch(function (error) {
    console.log(error);
  });

  