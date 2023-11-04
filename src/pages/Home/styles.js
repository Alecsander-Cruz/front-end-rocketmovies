import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 'header' 'content';
`;

export const Content = styled.div`
    grid-area: content;

    padding-left: 123px;
    padding-right: 123px;
    margin-top: 50px;

    overflow-y: auto;

    display: grid;
    grid-template-areas:
        'title blank add-button'
        'movies movies movies';

    grid-template-columns: 200px auto 207px;
    grid-template-rows: 48px auto;
    justify-content: space-between;

    > h1 {
        grid-area: title;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const NewMovie = styled.button`
    grid-area: add-button;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 207px;
    height: 48px;
    border-radius: 8px;

    > svg {
        margin-right: 8px;
    }
`;

export const Movies = styled.div`
    grid-area: movies;
    min-width: 820px;
    width: 100%;

    margin-top: 35px;
`;
