import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos');
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate(-1);
            })
            .catch(error => {
                if (error.respnse) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar!');
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    icon={FiLock}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    <FiArrowLeft /> Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    );
}
