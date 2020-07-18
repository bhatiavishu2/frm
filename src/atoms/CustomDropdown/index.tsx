import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as S from './CustomDropdown.style'
interface Props {
  title: string;
  required?: boolean;
  children?: any
  header? : string;
  name: string;
  value: string;
  onChange: Function
}
const CustomDropdown: React.FC<Props> = ({ title, children, required,header,name,onChange, value }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <S.StyledDropdown isOpen={dropdownOpen} toggle={toggle} required={required}>
      <S.Title>{title}</S.Title>
      <DropdownToggle caret>
        {value || title}
        </DropdownToggle>
      <DropdownMenu>
       {header && <DropdownItem header>{header}</DropdownItem>}
      {React.Children.map(children, (child: React.ReactElement) => (
            <DropdownItem> 
                {React.cloneElement(child)}
            </DropdownItem>
        ))}
      </DropdownMenu>
    </S.StyledDropdown>
  );
}
export default CustomDropdown