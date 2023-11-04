import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.TAGS_BACKGROUND};

        display: flex;
        align-items: center;

        padding-left: 144px;

        a {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 16px;

            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

export const Form = styled.div`
    max-width: 340px;
    margin: -100px auto 0;
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        width: 48px;
        height: 48px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: white;
        }
    }
`;
