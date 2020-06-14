import React from 'react';
import ReactDOM from 'react-dom';

import style from './app.css'

import Messenger from './components/messenger/messenger';
import Messages from './components/messages/messages';
import Input from './components/input/input';
import Send from './components/send/send';
import Name from './components/name/name';
import Greeting from './components/greeting/greeting';

const App = () => {
    return (
        <div className={style.app}>
            <Messenger>
                <Name></Name>
                <Greeting></Greeting>
                <Messages></Messages>
                <Input></Input>
                <Send></Send>
            </Messenger>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));