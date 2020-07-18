
import { Input, Label } from 'reactstrap';
import styled from 'styled-components';
export const StyledInput = styled(Input)`
    border-radius: 4px;
    border: solid 1px #e6e6e6;
    background-color: #ffffff;
`;

export const StyledLabel = styled(Label)`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;


interface Props {
    required?: boolean;
}
export const Title = styled.span<Props>`
    font-family: SourceSansPro;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #48506a;
    margin-bottom: 10px;
    text-transform: uppercase;  

    ${props => props.required &&`
     ::after {
        content: '*';
        color:red;
        margin-left: 1px;
    }`
}


`;