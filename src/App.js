import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, PracticalInfo, Program, Rsvp, WeddingList, NotFound } from './pages';
import Layout from './components/Layout/Layout';
import './i18n'
import './App.css'
import { ActiveLinkProvider } from './components/ActiveLinkContext/ActiveLinkContext.js';
const App = () => {
  return (
    <ActiveLinkProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="practical-info" element={<PracticalInfo />} />
            <Route path="program" element={<Program />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="weddinglist" element={<WeddingList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ActiveLinkProvider>
  );
}

export default App;
