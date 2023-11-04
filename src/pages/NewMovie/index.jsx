import { Container, Form, TextArea } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { GoBack } from '../../components/GoBack';
import { Input } from '../../components/Input';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

export function NewMovie() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(-1);
    const [description, setDescription] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleBack() {
        navigate(-1);
    }

    async function handleNewMovie() {
        if (!title) {
            return alert('Título vazio');
        }

        if ((rating < 0 || rating > 5) && Number.isInteger(rating)) {
            return alert('Avaliação precisa ser um número inteiro entre 0 e 5');
        }

        if (tags.length === 0) {
            return alert('Nenhuma Tag foi adicionada!');
        }

        if (newTag) {
            return alert(
                'Existe contéudo não adicionadoi na Tag. Clique para adicionar ou deixe-o vazio!'
            );
        }

        await api.post('/movies-notes', {
            title,
            description,
            rating,
            tags
        });

        alert('Nota de filme criada com sucesso!');
        handleBack();
    }

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <GoBack />
                    <h1>Novo filme</h1>
                    <div>
                        <Input
                            placeholder="Título"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                            step="1"
                            onChange={e => setRating(Number(e.target.value))}
                            onKeyDown={e => {
                                if (e.keyCode != 38 && e.keyCode != 40) {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>
                    <div className="tags">
                        {tags.map(tag => {
                            return (
                                <MovieItem
                                    key={String(tag.id)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            );
                        })}
                        <MovieItem
                            isNew
                            placeholder="Nova tag"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                    </div>
                    <Button title="Salvar" onClick={handleNewMovie} />
                </Form>
            </main>
        </Container>
    );
}
