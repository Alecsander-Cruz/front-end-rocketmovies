import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 56px;

    padding: 0 16px;
    margin-top: 24px;

    text-align: center;
    font-weight: 500;

    border: none;
    border-radius: 10px;

    color: white;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    &:disabled {
        opacity: 0.5;
    }
`;
