import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    @media(max-width: 800px) {
        position: relative;
        top: 200px;
    }
`;

export const Wrapper = styled.div`
    width: auto;
    height: auto;
    min-width: 1148px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding-top: 50px;
`;
