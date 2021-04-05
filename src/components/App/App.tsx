import { PanelHeader } from '@wix/wix-base-ui';
import React from 'react';
import classes from './App.scss';

interface AppProps {}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={classes.root}>
        <PanelHeader className={classes.header}>Button Settings</PanelHeader>
        Complete me...
      </div>
    );
  }
}

export default App;
