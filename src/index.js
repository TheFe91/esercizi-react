import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Containers/Home';
import NotFound from '@Containers/NotFound';
import StatoBase from '@Containers/StatoBase';
import ChiamateDiRete from '@Containers/ChiamateDiRete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />

        <Route element={<StatoBase />} path="/stato-base" />

        <Route element={<ChiamateDiRete />} path="/chiamate-di-rete" />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
