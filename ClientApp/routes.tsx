import * as React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export const routes = <MainLayout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
</MainLayout>;
