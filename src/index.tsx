import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Page />, 
    document.getElementById('root') as HTMLElement);

registerServiceWorker();