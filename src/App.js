import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Date from "./component/Date/Date";
import Overall from "./component/Overall/Overall";
import Prediction from "./component/Prediction/Prediction";
import cloudDB, { collectionName } from "./services/firebase";

function App() {
  const [render, setRender] = useState("Date");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let sentimentData = [];
    try {
      await cloudDB.collection(collectionName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          sentimentData.push(
            {
              date: doc.id,
              value: doc.data()
            }
          );
        });
      });
      setData(sentimentData);
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data, 'app');

  function onSelect(tab) {
    setRender(tab);
  }
  let show = <Home />
  switch (render) {
    case "Date": show = <Date data={data} />; break;
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
