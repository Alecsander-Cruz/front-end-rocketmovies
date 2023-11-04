import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { NewMovie } from '../pages/NewMovie';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/newmovie" element={<NewMovie />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
