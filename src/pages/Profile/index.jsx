import { Container, Form, Avatar } from './styles';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';

import { api } from '../../services/api';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { useAuth } from '../../hooks/auth';

import userAvatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : userAvatarPlaceHolder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const userUpdate = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        };

        const userUpdated = Object.assign(user, userUpdate);

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <GoBack />
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" value={avatar} />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            type="file"
                            id="avatar"
                            onChange={handleAvatarChange}
                        />
                    </label>
                </Avatar>
                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha atual"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    );
}
