import { useEffect, Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import AboutPage from './pages/about';
import GalleryPage from './pages/gallery';
import FavouritePage from './pages/favourite';
import ContactsPage from './pages/contacts';

import Header from './components/header';
import Description from './components/description';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD' })
  })

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/gallery/:id" element={<Description />} />
      </Routes>
    </Fragment>
  );
}

export default App;
