import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 260px;
    height: 430px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    margin: 30px 0;

    :hover {
        transform: translateY(-10px);
    }
    image{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

export const WhiteBox = styled.div`
    width: 100%;
    height: 350px;
    background-color: white;
`;

export const Decs = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    padding: 0 4%;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
`;
export const Categorys = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 3%;
`; 