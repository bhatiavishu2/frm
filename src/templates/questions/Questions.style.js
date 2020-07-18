import styled from 'styled-components';
import { Col } from 'reactstrap';
export const StyledH1 = styled.h1`
    font-family: MavenPro;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.97;
    letter-spacing: normal;
    text-align: left;
    color: #464343;
    margin-bottom: 10px;
    margin-top: 93px;
`;

export const Path = styled.div`
    font-family: MavenPro;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: normal;
    text-align: left;
    color: #919191;
    margin-bottom: 20px;
`;

export const StyledCol = styled(Col)`
    margin-bottom: 20px;

    .rdw-editor-toolbar {
        border: none;
    }

    .rdw-editor-wrapper {
        border-radius: 4px;
        border: solid 1px #e6e6e6;
        background-color: #ffffff;
    }
    .rdw-editor-main {
        min-height:130px;
        padding: 6px 5px;
    }
`;

export const CommonDataWrapper = styled.div`
    display: flex;
    align-items: end;
    margin-left: 20px;
`;
