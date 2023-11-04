import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    padding: 32px;
    margin-bottom: 24px;

    border: none;
    border-radius: 16px;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    text-align: left;

    background-color: ${({ theme }) => theme.COLORS.TAGS_BACKGROUND};

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        min-width: 750px;
        margin-top: 15px;
        height: 45px;
        color: ${({ theme }) => theme.COLORS.TEXT};

        display: block; /* Fallback for non-webkit */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }
`;

export const Stars = styled.div``;
