import React, { useState } from 'react';
import { HighlightedText } from "./HighlightedText";

export const App = () => {
    const [text, setText] = useState('Last week, I had to work two night shifts at the railroad station.\nNew text')

    return (
        <div className="app-container">
            <h1>Highlighted Text</h1>
            <textarea onChange={e => setText(e.target.value)} value={text}/>
            <HighlightedText text={text} />
        </div>
    );
};