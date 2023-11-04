import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    border-radius: 10px;
    padding: 16px 18px;
    margin-top: 8px;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};

    > input {
        width: 100%;

        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 0 16px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
        }
    }

    > button {
        background: none;
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
`;
