import React, { useState, useEffect } from 'react';
import { HighlightedText } from "./HighlightedText";

import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import its from 'wink-nlp/src/its.js';
const nlp = winkNLP(model);

const findIndex = (array, text) => {
    return array.map((token, index) => token === text ? index : false)
        .filter(index => index !== false)
}

interface ColorSetting {
    index: number,
    color: string,
}

export const App = () => {
    const [text, setText] = useState('The cat jumped over the fence.')

    return (
        <div className="app-container">
            <h1>Highlighted Text</h1>
            <textarea onChange={e => setText(e.target.value)} value={text}/>
            <HighlightedText text={text} />
        </div>
    );
};