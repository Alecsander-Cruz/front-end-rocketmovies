import { Container } from './styles';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Rating({ rating, width, height }) {
    return (
        <Container width={width} height={height}>
            {[...Array(rating)].map((x, i) => (
                <AiFillStar key={i} />
            ))}
            {[...Array(5 - rating)].map((x, i) => (
                <AiOutlineStar key={i} />
            ))}
        </Container>
    );
}
