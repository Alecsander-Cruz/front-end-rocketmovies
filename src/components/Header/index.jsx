import { Container, Search, Profile } from './styles';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import userAvatarPlaceHolder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';
import { useState, useEffect } from 'react';

export function Header({ func }) {
    const [searching, setSearching] = useState('');
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleGoProfile() {
        navigate('/profile');
    }

    function handleSignOut() {
        navigate('/');
        signOut();
    }

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : userAvatarPlaceHolder;

    const handleSetSearch = data => {
        setSearching(data);
    };

    useEffect(() => {
        handleSetSearch(searching);
        if (func) {
            func(searching);
        }
    }, [searching]);

    return (
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <Input
                    func={handleSetSearch}
                    placeholder="Pesquisar por título"
                    onChange={e => setSearching(e.target.value)}
                />
            </Search>
            <Profile>
                <div>
                    <button type="button" onClick={handleGoProfile}>
                        <strong>{user.name}</strong>
                    </button>
                    <button type="button" onClick={handleSignOut}>
                        <span>sair</span>
                    </button>
                </div>
                <button type="button" onClick={handleGoProfile}>
                    <img src={avatarUrl} alt={`Foto de ${user.name}`} />
                </button>
            </Profile>
        </Container>
    );
}
