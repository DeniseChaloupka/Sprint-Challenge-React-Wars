import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Card from "./Card.js";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },

      }),
    
    );

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([]);
  const classes = useStyles();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://henry-mock-swapi.herokuapp.com/api")
      .then(response => {
        console.log(response);
        const allPeople = response.data.results;
        setPeople(allPeople);
      })
      .catch(error =>
        console.log("Error: ", error)
      )
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        {
          people.map(person => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  name={person.name}
                  key={person}
                  birthYear={person.birth_year}
                  gender={person.gender}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}
export default App;
