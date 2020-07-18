import React from "react";
import * as S from './TextInput.style'
interface Props {
  title?: string;
  type? : string;
  required?: boolean;
  value: string;
  onChange: Function;
  name: string
  className?: string
}
const TextInput: React.FC<Props> = ({ title, type, required, value, onChange, name, className}) => {

  return (
    <S.StyledLabel className={className}>
        <S.Title required={required}>{title}</S.Title>
        <S.StyledInput type={type} value={value} name={name} onChange={(e: any)=>{
          onChange({name:e.target.name, value:type ==='checkbox'? !!!value: e.target.value})
        }} required={required}/>
    </S.StyledLabel>
  );
}
export default TextInput