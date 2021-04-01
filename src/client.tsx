import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { wixAxiosConfig } from '@wix/wix-axios-config';
import App from './components/App';
import { create as createFedopsLogger } from '@wix/fedops-logger';

const baseURL = window.__BASEURL__;
const locale = window.__LOCALE__;

wixAxiosConfig(axios, { baseURL });

const fedopsLogger = createFedopsLogger('baseui-exercise');

// Move the following `appLoaded()` call to the point where your app has fully loaded.
// See https://github.com/wix-private/fed-infra/blob/master/fedops/fedops-logger/README.md
fedopsLogger.appLoaded();

ReactDOM.render(<App />, document.getElementById('root'));
