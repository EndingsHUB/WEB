import React from 'react';
import styled from "@emotion/styled";
import {useState} from "react";
import {Button} from "components/Button";
import {Label} from "components/Label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


function App() {
    const [counter, setCounter] = useState(0);
    const onClickSub = ()=>{
        setCounter(counter-1);
    }
    
    const onClickAdd = () =>{
        setCounter(counter+1);
    }
    
    return (
        <Container>
            <Title>Counter App</Title>
            <Contents>
                <Button label="-" onClick={onClickSub}/>
                <Label data={counter}/>
                <Button label="+" onClick={onClickAdd}/>
            </Contents>

        </Container>
    );
}

export default App;
