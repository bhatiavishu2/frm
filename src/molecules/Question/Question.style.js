
import { Input, Label, Button } from 'reactstrap';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import TextInput from '../../atoms/TextInput';
export const QuestionTitle = styled.div`
    font-family: SourceSansPro;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #48506a;

    ::after {
        content: '*';
        color:red;
        margin-left: 1px;
    }
`;

export const StyledCol = styled(Col)`

`;

export const QuestionWrapper = styled.div`
border: solid 1px #e6e6e6;
background-color: #ffffff;
`;
export const StyledQ = styled.span`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #48506a;
    margin-top: 16px;
`;

export const QuestionTile = styled.div`
    display: flex;
`;

export const StyledTextInput = styled(TextInput)`
    padding-left: 10px;
    width: 100%
`;

export const Question = styled.div`
    width: 100%;
`;

export const StyledButton = styled(Button)`

    border-radius: 6px;
    background-color: #47b3bb;
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    width: 72px;
    height: 38px;
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-left: 6px;

`;

export const OptionWrapper = styled.div`

    display: flex;
    align-items: center;
    width: 60%;

`;

export const ANSWrapper = styled.div`
    display: flex;
    margin-top: 25px;
    margin-left: 31px;
    align-items: center;
`;

export const ANS = styled.span`
    font-family: SourceSansPro;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #48506a;         
`;