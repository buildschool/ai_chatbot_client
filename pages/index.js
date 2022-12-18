import React from 'react';
import { Paper, Card, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { getChatBotResponse } from '../service/service';

const StyledPaper = styled(Paper)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-dontent: flex-start;
    align-items: center;
    background: lightblue;
`;

const StyledDiv = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-dontent: flex-start;
    align-items: center;
    background: lightblue;
    margin-top: 15vh;
    margin-bottom: 5vh;
`;


const StyledCard = styled(Card)`
    height: 15vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: darkblue;
    color: lightblue;
`;

const StyledText = styled(Typography)`
    font-size: 30px;
`;

const StyledButton = styled(Button)`
    background: darkblue;
    color: lightblue;
    margin-top: 5vh;
`;

const StyledTextField = styled.input`
    height: 30vh;
    width: 70vw;
    background: white;
    text-align: center;
`;

export default function Index() {
    const [prompt, setPrompt] = React.useState(null);
    const [response, setReponse] = React.useState(null);
    const getChatResponse = () => {
        getChatBotResponse(prompt)
            .then(response => {
                console.log(response['data']);
                setReponse(response['data']['response']);
            })
            .catch(error => {
                console.error(error); 
            });
    };
    const onTextFieldChange = (e) => {
        setPrompt(e.target.value);
    };  
    return (
        <StyledPaper style={{ overflow: 'scroll' }}>
            <StyledCard>
                <StyledText>AI ChatBot</StyledText>
            </StyledCard>
            <StyledDiv>
                <StyledTextField onChange={onTextFieldChange} placeholder="Chat with AI Assistant"></StyledTextField>
                <StyledButton onClick={getChatResponse}>Chat</StyledButton>
                <div style={{ marginTop: '5vh', textAlign: 'center', height: '10vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h4>{response ? response['choices'][0]['text'] : null}</h4>
                </div>
            </StyledDiv>
        </StyledPaper>
    )
};