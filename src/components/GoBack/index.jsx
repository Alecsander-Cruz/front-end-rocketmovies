import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function GoBack() {
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container type="button" onClick={handleBack}>
            <FiArrowLeft />
            Voltar
        </Container>
    );
}
