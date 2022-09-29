import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        width: "100%",
        margin: 10,
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: "bold"
        
    }
  });

const NavigationBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}> 
            <nav
                style={{
                    borderBottom: "2px dotted white",
                    paddingBottom: "1rem"
                
                }}
            >
                <Link to="/" >Home</Link>  |{" "}
                <Link to="/workout_plan">Workout Plan</Link> |{" "}
                <Link to="/new_workout">New Workout</Link>
                
            </nav>
        </div>
    )
}

export default NavigationBar;