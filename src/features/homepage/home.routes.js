import {  Route } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage';

export default () => (
    <Route exact path="/" component={HomePage} />
)