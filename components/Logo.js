import React from "react";


function Logo() {

    const styles = {
        logo: {
            width: "auto",
            height: "auto",
            textAlign: "center",
            margin: "0 auto",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            borderRadius: "20px",
            marginBottom: "20px",
            padding: "5px",
            marginTop: "20px",
        },
        container: {
            width: "100%",
            height: "250px",
            textAlign: "center",
            padding: "5px 0",
            backgroundColor: "#f5f5f5", 
            display: "flex",
            marginTop: "0px",
         }
    }
  return (
    <div style={styles.container}>
      <img  style={styles.logo} src="logo.jpg" alt="logo kidikuiz" />
    </div>
  );
}

export default Logo;

