import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

const defaultState = {
  cinema: [
     { id: 1, name: "Ледяной Драйв", description: "описание титаника", duration:'108 min', country:'USA',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/d73/1624833803-1206951551.webp" },
     { id: 2, name: "Голос Улиц", description: "описание титаника", duration:'147 min', country:'USA',release: 2015, img:"https://kinogo.biz/uploads/mini/minifull/4f0/1585476219-2099616958.webp" },
     { id: 3, name: "Батырлар", description: "описание титаника", duration:'90 min', country:'USA',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/703/1625522078-1093379250.webp" },
     { id: 4, name: "Тихий Омут", description: "описание титаника", duration:'140 min', country:'GREAT BRITAIN',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/24a/1629058540-955495289.webp" },
     { id: 5, name: "Гнев Человеческий", description: "описание титаника", duration:'118 min', country:'USA, GREAT BRITAIN',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/159/1619553978_610x900_45349.webp" },
     { id: 6, name: "Кровь и Деньги", description: "описание титаника", duration:'89 min', country:'USA',release: 2020, img:"https://kinogo.biz/uploads/mini/minifull/b93/1616491332-1643503434.webp" },
     { id: 7, name: "Зона 414", description: "описание титаника", duration:'99', country:'GREAT BRITAIN',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/673/1630799261-1819371809.webp" },
     { id: 8, name: "Анна", description: "описание титаника", duration:'99', country:'USA',release: 2019, img:"https://kinogo.biz/uploads/mini/minifull/62c/1585435189-2050166782.webp" },
     { id: 9, name: "12 Могучих Сирот", description: "описание титаника", duration:'99', country:'USA',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/e73/1625495456-571279382.webp" },
     { id: 10, name: "Малышка", description: "описание титаника", duration:'99', country:'USA',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/54e/1629740937-907491908.webp" },
     { id:11, name: "Естественный Свет", description: "описание титаника", duration:'99', country:'FRANCE',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/c70/1629307440-1577838529.webp" },
     { id: 12, name: "Снегоубощик ", description: "описание титаника", duration:'99', country:'USA',release: 2021, img:"https://kinogo.biz/uploads/mini/minifull/973/1585498433-721023775.webp" },

  ],

  zakl: [],
  num: 0
}


const cinemaAction = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_CINEMA":
       return {
         ...state, 
         num: action.cinema
       }
    default: 
    return state ;
  }
  

};

const store = createStore(cinemaAction);


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


