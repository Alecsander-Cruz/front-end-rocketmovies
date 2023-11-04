import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Container } from './styles';

export function Input({ icon: Icon, func, ...rest }) {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    async function handleSearch() {
        func(search);
        navigate('/', {
            state: {
                url: search
            }
        });
        // const response = await api.get(`/movies-notes?title=${search}`);
    }

    useEffect(() => {
        if (func) {
            func(search);
        }
    }, [search]);

    return (
        <Container onChange={e => setSearch(e.target.value)}>
            {Icon && <Icon size={20} />}
            <input {...rest} />
            <button onClick={handleSearch}>
                <FiSearch />
            </button>
        </Container>
    );
}
