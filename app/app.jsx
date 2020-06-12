import React from 'react';
import ReactDOM from 'react-dom';

import style from './app.css'

import { Messenger } from './components/messenger/messenger';
import Messages from './components/messages/messages';
import Input from './components/input/input';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected')
    socket.emit('msg', { name: "text" });
});

const App = () => {

    return (
        <div className={style.app}>
            <Messenger>
                <Messages></Messages>
                <Input></Input>
            </Messenger>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));

