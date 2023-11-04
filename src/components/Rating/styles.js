import styled from 'styled-components';

export const Container = styled.div`
    width: 140px;
    svg {
        margin-top: 8px;
        margin-right: 6px;
        width: ${props => props.width};
        height: ${props => props.height};
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
