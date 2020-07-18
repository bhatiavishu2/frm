
import React, { useState } from "react";
import { Container, Row} from 'reactstrap';
import TextEditor from '../../molecules';
import CustomDropdown from '../../atoms/CustomDropdown'
import TextInput from '../../atoms/TextInput'
import Question from '../../molecules/Question'
import * as S from './Questions.style'

interface Props {
  data?: any
}

const renderItem = (item: any, value: string, onChange: Function) => {
       switch(item.type){
           case 'input': 
            return <TextInput name={item.name} value={value} onChange={onChange} title={item.title} required ></TextInput>
            
            case 'checkbox':
            return <S.CommonDataWrapper>
                 <TextInput value={value} name={item.name} onChange={onChange} type="checkbox"></TextInput>
                <span> Common Data </span>
            </S.CommonDataWrapper>;
         
            case 'select': 
            return   (<CustomDropdown name={item.name} value={value} title={item.title} onChange={onChange} required>
                   {item.values.map((val: string)=> <div style={{width: '100%'}} key={val} onClick={()=>{
                       onChange({name:item.name,value:val})
                   }}>{val}</div>)}
               </CustomDropdown>)
         
     
       }
}
const Questions: React.FC<Props> = ({ children, data }) => {
const [state, setState] = useState({...data.reduce((obj:any,item: any) => {
    obj[item.name] = ''
    return obj;
} ,{}), commonDataValue:''})

const onChange = ({name,value}: any) => {  
    setState({...state, [name]: value})
}

  return (
   <Container>
       <Row>
           <S.StyledCol lg="12">
           <S.StyledH1>Add Question</S.StyledH1>
           </S.StyledCol>
           <S.StyledCol lg="12">
           <S.Path>HOME > ADD QUESTION</S.Path>
           </S.StyledCol>
       </Row>

       <Row>
           {
               data.map((item: any) =>  <S.StyledCol key={item.title} lg="6">{renderItem(item, state[item.name], onChange)}</S.StyledCol>)
           }
           {state.commonData &&
           <S.StyledCol lg="12">
                <TextEditor name="commonDataValue" onChange={onChange}></TextEditor>
           </S.StyledCol> }
       </Row>
       <Row>
           <Question />     
        </Row>
   </Container>
  );
}
export default Questions