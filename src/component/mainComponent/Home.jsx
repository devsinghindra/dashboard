// Don't re-invent the wheel - Best software developer tip

// Use react material ui and bootstrap for designing
import React from 'react';
import styles from './home.module.scss';
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Home() {
  // Add flexbox and style and content
  return (

    <div className={styles.grid}>
      <div className={styles.child_1}>
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </Container>
        </Jumbotron>
        {/* <div class={styles.title}>Twitter</div>
        <div class={styles.subtitle}>Summary</div>
        <div class={styles.button}>
          <button><Link to="/dashboard">Go to Dashboard</Link></button>
        </div> */}
      </div>
      <div className={styles.child_2}>
        <p>Empty</p>
      </div>
    </div>
  );
}

export default Home;