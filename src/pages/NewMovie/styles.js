import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;

    grid-template-areas: 'header' 'content';

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        border-radius: 8px;

        gap: 24px;
        padding: 16px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        input {
            text-align: center;
        }
    }
`;

export const Form = styled.form`
    max-width: 800px;
    margin: 40px auto;

    display: flex;
    flex-direction: column;

    > h1 {
        margin-top: 24px;
        margin-bottom: 40px;
        font-size: 36px;
        font-weight: medium;
    }

    > div {
        display: flex;
        gap: 40px;

        margin-bottom: 40px;
    }

    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.TEXT};
        margin-bottom: 24px;
    }

    > button {
        width: 400px;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 280px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 40px;
    border-radius: 10px;
    padding: 16px 34px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
`;
