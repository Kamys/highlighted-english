import { useMemo } from "react";
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import its from 'wink-nlp/src/its.js';

const nlp = winkNLP(model);

export const HighlightedText = ({ text }) => {
    const words = text.split(' ');

    const tokens = useMemo(() => {
        const doc = nlp.readDoc(text);
        return doc.tokens().out(its.pos);
    }, [text])

    return (
        <p>
            {words.map((word, index) => {
                let color = 'black';
                let token = tokens[index]

                if (token === "DET") {
                    color = "#607D8B"
                }
                if (token === "NOUN") {
                    color = '#3F51B5';
                }

                if (token === "VERB") {
                    color = '#4CAF50';
                }

                return (
                    <span title={token} key={index} style={{ color }}> {word} {' '} </span>
                );
            })}
        </p>
    );
};