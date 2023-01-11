import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: space-between;

`;

export const LeftWrapper = styled.div`
    position: relative;
    width: 45%;
    height: 100%;
`;

export const RightWrapper = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TopWrapper = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const TopLeft = styled.div`
    width: 100px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    svg{
        width: 40px;
    }
`;

export const Title = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

export const TopCenter = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 10%;

    span{
        margin-top: 15px;
    }
`;

export const OstWrapper = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 6%;
    gap: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    color: purple;
    cursor: pointer;
    svg{
        width: 20px;
    }
`;

export const DecsWrapper = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Decs = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const DecsLong = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    span{
        font-size: 1.5rem;
        font-weight: bold;
    }

    div{
        font-size: 1.3rem;
    }

    pre{
        padding: 50px 0;
        font-size: 1.5rem;
        text-align: center;
        white-space: pre-wrap;
        word-break: break-all;
        overflow: auto;

    }
`;