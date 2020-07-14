import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Date from "./component/Date/Date";
import Overall from "./component/Overall/Overall";
import Tracker from "./component/Tracker/Tracker";
import cloudDB, { collectionName } from "./services/firebase";

function App() {
  const isCancelled = useRef(false);//prevent memory leaks performs only api calls when component is loaded to dom
  const [render, setRender] = useState("Date");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let sentimentData = [];
    if (!isCancelled.current)
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
    return () => {
      isCancelled.current = true;
    };
  }, []);

  // console.log(data, 'app');

  function onSelect(tab) {
    setRender(tab);
  }
  let show;
  switch (render) {
    case "Overall": show = <Overall data={data} />; break;
    case "Tracker": show = <Tracker />; break;
    default: show = <Date data={data.map((el, idx, data) => data[data.length - 1 - idx])} />; break;
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
