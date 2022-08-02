import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Repository } from './components/Repository';
import { fontFamily, spaceAround } from './components/shared/commonStyle';
import { User } from './components/User';

export const paths = {
  home: '/',
  repository: 'repository',
  user: 'user',
}

export const DataStore = React.createContext()

export default function App() {
  const [user, setUser] = useState('');
  const [repository, setRepository] = useState('');

  //const location = useLocation()

  return (
    <BrowserRouter>
      <div style={{ padding: spaceAround }}>
        <DataStore.Provider value={{
          user: {
            value: user,
            setUser,
          },
          repository: {
            value: repository,
            setRepository,
          },
        }}>

          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.repository} element={<Repository />} />
            <Route path={paths.user} element={<User />} />
          </Routes>

        </DataStore.Provider>

      </div>
    </BrowserRouter >

  );
}
