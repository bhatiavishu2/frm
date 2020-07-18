import styled from 'styled-components';
import { Dropdown } from 'reactstrap';


interface props  {
    required?: boolean;
}

export const StyledDropdown = styled(Dropdown)<props>`
    display: flex;
    flex-direction: column; 
    & button {
        border-radius: 4px;
        border: solid 1px #e6e6e6;
        background-color: #ffffff;
        width: 100%;
        color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dropdown-menu {
        width: 100%;
    }
    & span {
        margin-bottom: 10px;
        text-transform: uppercase;  
    }
    ${props => props.required &&`
        & span::after {
            content: '*';
            color:red;
            margin-left: 1px;
        }`
    }



`;

export const Title = styled.span`
  font-family: SourceSansPro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #48506a;
  margin-bottom: 5px;
`;