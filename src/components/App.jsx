import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom';
import { MovieInformation, Movies, Actors, Profile, NavBar } from './index';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/movies/:id' exact element={<MovieInformation />} />
          <Route path='/actors/:id' exact element={<Actors />} />
          <Route path='/profiles/:id' exact element={<Profile />} />
          <Route path='/*' element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}
export default App;