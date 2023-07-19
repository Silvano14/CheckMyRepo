import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Done } from "./components/Done";
import { Home } from "./components/Home";
import { Repository } from "./components/Repository";
import { Sender } from "./components/Sender";
import { User } from "./components/User";

export const paths = {
  home: "/",
  repository: "repository",
  user: "user",
  sender: "sender",
  done: "done",
};

export const DataStore = React.createContext();

export default function App() {
  const [user, setUser] = useState("");
  const [repository, setRepository] = useState("");

  return (
    <BrowserRouter>
      <div style={{ minHeight: "100%" }}>
        <DataStore.Provider
          value={{
            user: {
              value: user,
              setUser,
            },
            repository: {
              value: repository,
              setRepository,
            },
          }}
        >
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.repository} element={<Repository />} />
            <Route path={paths.user} element={<User />} />
            <Route path={paths.sender} element={<Sender />} />
            <Route path={paths.done} element={<Done />} />
          </Routes>
        </DataStore.Provider>
      </div>
    </BrowserRouter>
  );
}
