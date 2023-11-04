import { Container, Content, NewMovie, Movies } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

export function Home() {
    const [search, setSearch] = useState('');
    const [movieNotes, setMovieNotes] = useState([]);

    // const location = useLocation();

    const navigate = useNavigate();

    function handleDetails(movieId) {
        navigate(`/details/${movieId}`);
    }

    function handleNewMovie() {
        navigate('/newmovie');
    }

    const handleSetSearch = data => {
        setSearch(data);
    };

    // useEffect(() => {
    //     setSearch(location.state.url);
    // }, []);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies-notes?title=${search}`);
            setMovieNotes(response.data);
        }
        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header func={handleSetSearch} />
            <Content>
                <h1>Meus Filmes</h1>
                <NewMovie onClick={handleNewMovie}>
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
                <Movies>
                    {movieNotes &&
                        movieNotes.map(movieNote => {
                            return (
                                <Movie
                                    key={String(movieNote.id)}
                                    data={movieNote}
                                    onClick={() => handleDetails(movieNote.id)}
                                />
                            );
                        })}
                    {movieNotes.length <= 0 && (
                        <h1>Não existe nenhum filme com este título!</h1>
                    )}
                </Movies>
            </Content>
        </Container>
    );
}

// {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     rating: 4,
//     description:
//         'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.',
//     tags: [
//         { id: '1', name: 'aventura' },
//         { id: '2', name: 'elf' }
//     ]
// }
