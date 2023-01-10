import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
    height: 8vh;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    transition: all 0.3s ease-in;
    border: 1px solid gray;
    background-color: white;
`;

export const LeftWapper = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    a{
        font-size: 2.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #143A67;
    }
`;

export const RightWapper = styled.div`
    font-size: 1.5rem;
    width: 300px;
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`;

export const ProfileBox = styled.div`
   width :50px;
   height: 100%;
    svg{
        width: 50px;
        height: 100%;
        cursor: pointer;

    }
`;

export const DarkModeBtn = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        background-color: #EFEFEF;
    }

`;



export const CenterWapper = styled.div`
    position: relative;
    width: 400px;
    height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #637AAE;
    border-radius: 10px;
    padding-left: 20px;

    input {
        color: gray;
        border: none;
        width: 87%;
        height: 100%;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
    }

    label{
        position: absolute;
        top: 6px;
        left: 350px;
        width: 25px;
        cursor: pointer;
        color: #637AAE;
    }

`;

