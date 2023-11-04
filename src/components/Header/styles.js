import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    height: 116px;
    width: 100%;

    padding-left: 123px;
    padding-right: 123px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 200px;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;

        button {
            border: none;
            background: transparent;
            background-color: transparent;

            text-align: end;

            strong {
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
            span {
                font-size: 14px;
                color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
            }
        }
    }

    > button {
        border: none;
        background: transparent;
        background-color: transparent;

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
    }
`;

export const Search = styled.div`
    width: 100%;
    padding: 0 64px;
    margin-top: -8px;
`;
