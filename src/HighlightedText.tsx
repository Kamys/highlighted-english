import { useMemo, useState } from "react";
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import its from 'wink-nlp/src/its.js';

const nlp = winkNLP(model);

export const HighlightedText = ({ text  }) => {
    const doc = useMemo(() => nlp.readDoc(text), [text])
    const words = useMemo(() => doc.tokens().out(), [doc])

    const tokens = useMemo(() => {
        return doc.tokens().out(its.pos);
    }, [doc])

    return (
        <div>
            <p>
                {words.map((word, index) => {
                    let color = 'black';
                    let token = tokens[index]

                    if (token === "AUX") {
                        //color = "#ee00ff"
                    }
                    if (token === "PRON") {
                      //  color = "#b77115"
                    }
                    if (token === "DET") {
                        color = "#607D8B"
                    }
                    if (token === "NOUN") {
                        color = '#3F51B5';
                    }
                    if (token === "ADV") {
                        //color = '#8a2ab7';
                    }
                    if (token === "ADP") {
                        //color = '#d7b429';
                    }
                    if (token === "SPACE") {
                        console.log("SPACE")
                        return <><br/><br/></>
                    }
                    if (token === "ADJ") {
                        color = '#183d19';
                    }
                    if (token === "VERB") {
                        color = '#4CAF50';
                    }
                    const space = tokens[index+1] === "PUNCT" ? null : " "

                    return (
                        <>
                            <span title={token} key={index} style={{ color }}>{word}</span>
                            {space}
                        </>
                    );
                })}
            </p>
        </div>
    );
};