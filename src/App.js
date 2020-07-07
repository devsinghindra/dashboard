import React, { useState } from 'react';
import styles from './App.module.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Date from "./component/Date/Date";
import Overall from "./component/Overall/Overall";
import Prediction from "./component/Prediction/Prediction";

function App() {
  const [render, setRender] = useState("Home");
  function onSelect(tab) {
    setRender(tab);
  }
  let show = <Home />
  switch (render) {
    case "Date": show = <Date />; break;
    case "Overall": show = <Overall />; break;
    case "Prediction": show = <Prediction />; break;
    default: show = <Home />;
  }
  return (
    <div className={styles.App}>
      <Header onSelect={onSelect} />
      <Navbar onSelect={onSelect} />
      {show}

    </div>
  );
}

export default App;
