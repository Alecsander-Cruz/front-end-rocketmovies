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
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > a {
        align-self: start;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.PINK};

        margin-bottom: 24px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 24px;

        > div {
            > div {
                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        h1 {
            font-size: 36px;
            margin-right: 18px;
        }

        img {
            width: 32px;
            height: 32px;
            margin-right: 6px;
            margin-bottom: 16px;

            border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
            border-radius: 50%;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-right: 6px;
        }

        span {
            font-size: 16px;
            margin-right: 6px;
            margin-bottom: 16px;

            display: flex;
            align-items: center;
        }
    }

    > p {
        margin-top: 16px;
        margin-bottom: 16px;

        text-align: justify;
    }
`;
