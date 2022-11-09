// Copyright (C) Max Goddard 2022
// All rights reserved.

import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import cb from "react-syntax-highlighter/dist/cjs/styles/prism/cb";

SyntaxHighlighter.registerLanguage("cpp", cpp);

export default function CodeBox(props) {
    return (
        <SyntaxHighlighter language={props.language || "txt"} style={cb} showLineNumbers={props.showLineNumbers || false}>
            {props.children}
        </SyntaxHighlighter>
    );
}