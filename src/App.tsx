import React from 'react';
import './App.css';
import JsonDiffViewer from './JsonDiffViewer/JsonDiffViewer'

function App() {
  return (
    <div className="App">
      <JsonDiffViewer oldValue={JSON.stringify(Old, null, 2).repeat(200)} splitView newValue={JSON.stringify(New, null, 2).repeat(200)} leftTitle='Left' rightTitle='Right' />
    </div>
  );
}

const Old = {
  "devDependencies": {
    "@types/classnames": "^2.2.6",
    "@types/diff": "^3.5.1",
    "@types/react": "^16.4.14",
    "@types/react-dom": "^16.0.8",
    "@types/webpack": "^4.4.13",
    "css-loader": "^1.0.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.3",
    "node-sass": "^4.9.3",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "sass-loader": "^7.1.0",
    "ts-loader": "^5.2.1",
    "typescript": "^3.1.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.1",
    "webpack-dev-server": "^3.1.9"
  },
  "name": "react-diff-viewer",
  "version": "1.0.0",
  "description": "Text diff viewer for React",
  "main": "lib/index.js",
  "repository": "git@github.com:praneshr/react-diff-viewer.git",
  "author": "Pranesh Ravi<praneshpranesh@gmail.com>",
  "license": "MIT",
  "private": false,
  "scripts": {
    "build": "tsc --outDir lib/",
    "build:watch": "tsc --outDir lib/ -w",
    "start:examples": "webpack-dev-server --open --hot --inline"
  },
  "dependencies": {
    "classnames": "^2.2.6",
    "prop-types": "^15.6.2",
    "emotion": "^9.2.10",
    "diff": "^3.5.0"
  },
  "peerDependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2"
  }
};

const New = {
  "devDependencies": {
    "@types/classnames": "^2.2.6",
    "@types/diff": "^3.5.1",
    "@types/react": "^16.4.14",
    "@types/react-dom": "^16.0.8",
    "@types/webpack": "^4.4.13",
    "css-loader": "^1.0.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.3",
    "node-sass": "^4.9.3",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "sass-loader": "^7.1.0",
    "ts-loader": "^5.2.1",
    "typescript": "^3.1.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.1",
    "webpack-dev-server": "^3.1.9"
  },
  "name": "react-diff-viewer",
  "version": "1.0.0",
  "description": "Text diff viewer for React",
  "main": "lib/index.js",
  "repository": "git@github.com:praneshr/react-diff-viewer.git",
  "author": "Pranesh Ravi<praneshpranesh@gmail.com>",
  "license": "BSD",
  "private": false,
  "scripts": {
    "build": "tsc --outDir lib/",
    "build:watch": "tsc --outDir lib/ -w",
    "start:examples": "webpack-dev-server --open --hot --inline",
    "start": "webpack-dev-server --open --hot --inline"
  },
  "dependencies": {
    "classnames": "^2.2.6"
  },
  "peerDependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2"
  }
};

export default App;
