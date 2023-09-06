import './App.css';
import React from 'react';
import Mainheader from './components/UIElements/Mainheader';
import ShowPlaces from './components/Places/ShowPlaces';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPlaces from './components/Places/AddPlaces';
import PlaceDetail from './components/Places/PlaceDetail';
import UpdatePlaces from './components/Places/UpdatePlaces';
function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Mainheader />
          <div className="App-body">
            <Routes>
              <Route exact path="/" element={<ShowPlaces />} />
              <Route exact path="/:id" element={<PlaceDetail />} />
              <Route exact path="/create-new-place" element={<AddPlaces />} />
              <Route exact path="/update-place/:id" element={<UpdatePlaces />} />
            </Routes>
          </div>
        </div>
      </Router>
    </React.Fragment>

  );
}

export default App;
