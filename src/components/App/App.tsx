import {
  Composites,
  PanelHeader,
  TextLabel,
  DropDown,
  DropDownOption,
  Divider,
  TextInput,
  InfoIcon,
  ActionWithSymbol,
  SecondaryMediaImage,
  Button,
  Symbol,
} from '@wix/wix-base-ui';
import Replace from 'wix-ui-icons-common/classic-editor/Replace';
import React from 'react';
import classes from './App.scss';

interface AppProps {}
interface AppState {
  option: number;
  imgIndex: number;
}
class App extends React.Component<AppProps> {
  state: AppState = {
    option: 1,
    imgIndex: 0,
  };
  handleDropDownChange = (event: Event) => {
    this.setState({ option: event });
  };

  render() {
    const IMAGES = [
      'https://img.pokemondb.net/artwork/vector/geodude.png',
      'https://img.pokemondb.net/artwork/vector/bulbasaur.png',
      'https://img.pokemondb.net/artwork/vector/totodile.png',
    ];

    return (
      <div className={classes.root}>
        <PanelHeader className={classes.header}>Button Settings</PanelHeader>
        <Composites.DropDownLabeled>
          <InfoIcon text="info icon for secondary media labeled composite" />
          <TextLabel type="T05" value="What does the button show?" />
          <DropDown
            value={this.state.option}
            onChange={this.handleDropDownChange}
          >
            <DropDownOption value={1} label="Text Only" />
            <DropDownOption value={2} label="Icon Only" />
            <DropDownOption value={3} label="Text and Icon" />
          </DropDown>
        </Composites.DropDownLabeled>
        <Divider long />
        {(this.state.option === 1 || this.state.option === 3) && (
          <div>
            <Composites.TextInputLabeled>
              <InfoIcon text="info icon for secondary media labeled composite" />
              <TextLabel value="What does it say?" type="T01" />
              <TextInput
                type="T05"
                onChange={(event: Event) => {
                  console.log(event);
                }}
              />
            </Composites.TextInputLabeled>

            <Divider long />
          </div>
        )}
        {(this.state.option === 2 || this.state.option === 3) && (
          <div>
            <Composites.SecondaryMediaLabeled>
              <InfoIcon text="info icon for secondary media labeled composite" />
              <TextLabel value="Secondary media" />
              <SecondaryMediaImage src={IMAGES[this.state.imgIndex]} />
              <Button
                onClick={() => {
                  this.setState((prevState: AppState) => ({
                    imgIndex: (prevState.imgIndex + 1) % IMAGES.length,
                  }));
                }}
              >
                <Symbol>
                  <Replace />
                </Symbol>
              </Button>
            </Composites.SecondaryMediaLabeled>
            <Divider long />
            <Composites.TextInputLabeled>
              <InfoIcon text="info icon for secondary media labeled composite" />
              <TextLabel value="What's the alt text?" type="T01" />
              <TextInput
                type="T05"
                onChange={(event: Event) => {
                  console.log(event);
                }}
              />
            </Composites.TextInputLabeled>
            <Divider long />{' '}
          </div>
        )}
        <Composites.ActionWithSymbolLabeled>
          <InfoIcon text="info icon for secondary media labeled composite" />
          <TextLabel value="Where does it link to?" />
          <ActionWithSymbol
            action={function () {
              alert('ActionWithSymbolLabeled was clicked');
            }}
          >
            <TextLabel value="link to page" />
          </ActionWithSymbol>
        </Composites.ActionWithSymbolLabeled>
      </div>
    );
  }
}

export default App;
