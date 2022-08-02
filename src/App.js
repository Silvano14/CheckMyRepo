import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Repository } from './components/repository';
import { User } from './components/user';

export const paths = {
  home: '/',
  repository: 'repository',
  user: 'user',
}

export const Navigation = React.createContext({ currentView: paths.home, values: { user: '', repository: '' } })

export default function App() {

  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <Navigation.Provider value={{ currentView: paths.home }}>

          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.repository} element={<Repository />} />
            <Route path={paths.user} element={<User />} />
          </Routes>
        </Navigation.Provider>
      </div>
    </BrowserRouter >

  );
}
