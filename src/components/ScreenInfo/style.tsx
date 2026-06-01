import styled from 'styled-components';

export type IAlign = 'START' | 'CENTER' | 'END';

export const rowAlign = {
    START: 'flex-start',
    CENTER: 'center',
    END: 'flex-end',
};

interface IContentRow {
    position: IAlign;
}

export const Style = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30rem;
    min-width: 100%;
    min-height: 100%;
    max-width: 35rem;
    background-color: transparent;
    padding: 2%;
`;

export const ContentMain = styled.div`
    display: inline-flex;
    width: 100%;
    flex: 1;
`;

export const SenatorWarning = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: #FFD600;
    color: #000;
    font-size: 1.1rem;
    font-weight: 300;
    padding: 3px 8px;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.3;
`;

export const ScreenInfoData = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100%;
`;

export const ContentRow = styled.div<IContentRow>`
    display: inline-flex;
    justify-content: flex-start;
    align-items: ${(arg: IContentRow) => rowAlign[arg.position]};
    width: 100%;
    height: 16%;
    gap: 10px
`;

export const Info = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;
    height: 16%;
    gap: 10px
`;

export const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 16%;
    gap: 10px
`;

export const ScreenInfoImage = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 100%;
`;

export default Style;
