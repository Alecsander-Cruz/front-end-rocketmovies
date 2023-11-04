import { Container, Content } from './styles';
import { FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { GoBack } from '../../components/GoBack';

import userAvatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Details() {
    const [data, setData] = useState(null);

    const { user } = useAuth();
    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : userAvatarPlaceHolder;

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    async function handleRemove() {
        const confirm = window.confirm('Deseja realmnete remover este filme?');
        if (confirm) {
            await api.delete(`/movies-notes/${params.id}`);
        }
        handleBack();
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movies-notes/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, []);

    return (
        <Container>
            <Header />
            {data && (
                <main>
                    <Content>
                        <GoBack />
                        <div>
                            <div>
                                <h1>{data.title}</h1>
                            </div>
                            {data.rating && (
                                <Rating
                                    rating={data.rating}
                                    width="20px"
                                    height="20px"
                                />
                            )}
                        </div>
                        <div>
                            <img
                                src={avatarUrl}
                                alt={`Imagem de perfil de ${user.name}`}
                            />
                            <span>{user.name}</span>
                            <span>
                                <FiClock /> {data.created_at}
                            </span>
                        </div>
                        <div>
                            {data.tags &&
                                data.tags.map(tag => {
                                    return (
                                        <Tag
                                            key={String(tag.id)}
                                            title={tag.name}
                                        />
                                    );
                                })}
                        </div>
                        <p>
                            {data.description}
                            {/* O filme O Senhor dos Anéis: A Sociedade do Anel foi
                        lançado em 2001. É uma adaptação cinematográfica da
                        trilogia de livros do mesmo nome, escritos por J. R. R.
                        Tolkien.
                        <br />
                        <br />
                        O enredo do filme começa com o hobbit Frodo Bolseiro
                        (Elijah Wood) sendo incumbido de uma missão hercúlea.
                        Ele e seus amigos precisam destruir o Um Anel, criado
                        pelo maléfico O Senhor das Trevas, Sauron. O filme não
                        exagera tanto na comicidade, tornando tudo uma grande
                        piada, resumindo o nível de humor presente no filme está
                        bem nivelado.
                        <br />
                        <br />
                        O enredo do filme começa com o hobbit Frodo Bolseiro
                        (Elijah Wood) sendo incumbido de uma missão hercúlea.
                        Ele e seus amigos precisam destruir o Um Anel, criado
                        pelo maléfico O Senhor das Trevas, Sauron. O filme não
                        exagera tanto na comicidade, tornando tudo uma grande
                        piada, resumindo o nível de humor presente no filme está
                        bem nivelado.
                        <br />
                        <br />
                        Eles devem destruir o anel antes que ele caia em suas
                        mãos para evitar o domínio do mundo. Para ajudar na
                        missão, Frodo é acompanhado de um grupo de amigos,
                        incluindo Gandalf (Ian McKellen), Aragorn (Viggo
                            Mortensen) e Legolas (Orlando Bloom).
                            <br />
                            <br />
                            Contudo, durante as suas jornadas, eles terão que
                            enfrentar os orcs, elfos, trolls, goblins e outras
                            criaturas mágicas. O enorme esforço e sacrifício para
                            enfrentar a trama como um todo, definem o enredo do
                            filme O Senhor dos Anéis: A Sociedade do Anel para
                        sempre. */}
                        </p>

                        <Button title="Excluir filme" onClick={handleRemove} />
                    </Content>
                </main>
            )}
        </Container>
    );
}
