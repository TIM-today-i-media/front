import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 250px;
    height: 450px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const WhiteBox = styled.div`
    width: 100%;
    height: 310px;
    background-color: white;
`;

export const Decs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Title = styled.div`
    font-size: 1.5rem;
    color: black;
    border: 1px solid;
`;
export const Categorys = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 3%;
    padding: 0 4%;

    border: 1px solid;
`; 

export const Category = styled.div`
    width: 30%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    border: 1px solid black;
`;