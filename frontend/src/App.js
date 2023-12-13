import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DownloadRoute from './route/download.route';
import MainRoute from './route/main.route';
import NFTRoute from './route/nft.route';
import PersonalPageRoute from './route/personalpage.route';
import SignUpRoute from './route/sign_up.route';


class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
              <BrowserRouter>
              <Routes>
              <Route 
              path="*"
              element={<Navigate to="/main" />}
              />
                <Route path="/main" element={<MainRoute />}></Route>
                <Route path="/sign_up" element={<SignUpRoute/>}></Route>
                <Route path="/download" element={<DownloadRoute/>}></Route>
                <Route path="/nft" element= {<NFTRoute/>}></Route>
                <Route path="/personal_page" element={<PersonalPageRoute/>}></Route>
              </Routes>
              </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default App