import React, { useState } from 'react';
import * as S from './Question.style'
import TextInput from '../../atoms/TextInput';
import { Form } from 'reactstrap';


interface Props {


}
const  Question: React.FC<Props> = () => {

    const [state, setState] = useState({
        question: '',
        option: '',
    })

    const [options, setOptions] = useState([] as string[])
    const onChange = ({ name ,value}: any) =>{
        setState({...state,[name]:value})
    }

    const onAddClick = (e:any) => {
        e.preventDefault()
        if(!state.option || options.includes(state.option)) return
        const newOptions = [...options, state.option];
        setOptions(newOptions)
    }
    return (
      <S.StyledCol lg="12">
          <S.QuestionTitle>Question 1</S.QuestionTitle>
            <S.QuestionWrapper>
            <S.StyledCol>
                <Form onSubmit={onAddClick}>
                <S.QuestionTile>
                <S.StyledQ>Q</S.StyledQ>
                <S.Question>
                <S.StyledTextInput required name="question" value={state.question} onChange={onChange} title={""}  ></S.StyledTextInput>
                  <S.OptionWrapper>
                <S.StyledTextInput required name="option" value={state.option} onChange={onChange} title="Add Option"  ></S.StyledTextInput> 
                <S.StyledButton type="submit">Add</S.StyledButton>
                </S.OptionWrapper>
                    {options.map((opt:string, index:number)=>
                    <S.OptionWrapper key={opt}>
                        <S.StyledTextInput name={`${opt}${index}`} value={opt} onChange={onChange} title={`OPTION ${index}`}  ></S.StyledTextInput>
                        <S.ANSWrapper>
                        <TextInput value={``} name={`OPTION ${index}checkbox`} onChange={onChange} type="checkbox"></TextInput>
                        <S.ANS>ANS</S.ANS>
                        </S.ANSWrapper>
                    </S.OptionWrapper>
                )
                }
                </S.Question>
            </S.QuestionTile>
            </Form>
            </S.StyledCol>
            </S.QuestionWrapper>
      </S.StyledCol>
    )
}

export default Question