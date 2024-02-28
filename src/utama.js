import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangSaya';
import Karya from './karya';
import Kontak from './kontak';
import Gallery  from './pages/gallery';

const utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/tentangSaya" element={<TentangSaya />} />
        <Route path="/karya" element={<Karya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/gallery" element={<Gallery />} />
    </Routes>
)

export default utama;