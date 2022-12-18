import axios from 'axios';

export const getChatBotResponse = (prompt) => {
    const out = {
        "prompt": prompt
    };
    return axios.post('http://localhost:5000', out);
};