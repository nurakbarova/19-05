import { Button } from "@mui/base";
import React from "react";
import styles from './home.module.css'

const Homepages = () => {
  return (
    <>
      <main  className={styles.main}>
       
        <p style={{color:"rgb(255,101,81)"} }>For Better Future</p>
        <h1 >25K+ STUDENTS TRUST US</h1>
        <p>Find the right instructor for you from over 10,000 teachers</p>
     
        <Button variant="contained" style={{backgroundColor:"rgb(255,101,81)",border:"none"}}>Get Quate New</Button>
        <Button variant="outlined" style={{ margin:"20px",border:"1px",solid:"rgb(255,101,81)",color:"rgb(255,101,81)"}}>Learn More</Button>
      
      
      </main>
    </>
  );
};

export default Homepages;
