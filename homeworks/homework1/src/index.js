import './main.scss';
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import RickAndMortyComponent from'./js/components/RickAndMortyComponent'

const characters = [];

ReactDOM.render(
  <RickAndMortyComponent />
  ,document.getElementById("root")
);
