import React from 'react';
import { render } from 'react-dom';

import style from './app.css'

import Messenger from './components/messenger/messenger';
import Messages from './components/messages/messages';
import Input from './components/input/input';
import Persons from './components/persons/persons';
import Typing from './components/typing/typing';

const App = () => {
    return (
        <div className={style.app}>
            <Messenger>
                <Persons></Persons>
                <Messages></Messages>
                <Typing></Typing>
                <Input></Input>
            </Messenger>
        </div>
    )
}

render(<App></App>, document.getElementById('root'));
render(<App></App>, document.getElementById('root2'));