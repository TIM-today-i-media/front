import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    margin-top: 10vh;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilterWrapper = styled.div`
    width: 100%;
    height: 10vh;
    border: 1px solid black;
`;

export const ListWrapper = styled.div`
    width: 100%;
    padding: 0 10%;
    display: flex;
    flex-wrap: wrap;
    gap: 7%;
    overflow-y: scroll;

    border: 1px solid;
`;