const apiKee = process.env.REACT_APP_API_KEY
const OpenAI = require("openai");
const openai = new OpenAI({apiKey: apiKee, dangerouslyAllowBrowser: true});


export async function sendMsgToOpenAI(message){
    const res = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
       
    })
    // console.log(res.choices[0].text);
    return res.choices[0].text;
}