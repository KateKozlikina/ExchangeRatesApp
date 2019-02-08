import React from 'react';
import Divider from '@material-ui/core/Divider';
import CurensiesListContainer from './containers/CurensiesListContainer';
import AddConverterContainer from './containers/AddConverterContainer';
import AppBar from './components/AppBar';

const App = () => (
  <div>
    <AppBar />
    <Divider />
    <CurensiesListContainer />
    <AddConverterContainer />
  </div>
);

export default App;
