import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form, Background } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signIn } = useAuth();

    function handleSignIn() {
        if (email && password) {
            signIn({ email, password });
        } else {
            return alert(
                'Os campos precisam ser preenchidos para efetuar o login'
            );
        }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    );
}
