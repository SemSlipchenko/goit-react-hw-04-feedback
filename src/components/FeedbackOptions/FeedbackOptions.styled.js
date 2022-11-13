import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
        &:hover,
        &:focus {
            box-shadow: 5px 5px 5px 3px rgb(155, 155, 155)
        }
        &:active {
            scale: 1.1;
        }
        &.good {
        background-color: green;
        }
        &.neutral {
            background-color: yellow;
        }
        &.bad {
            background-color: red;
        }
`;