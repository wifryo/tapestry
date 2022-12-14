import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { getValidSessionByToken } from '../../../database/sessions';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePrompt(prompt: Text) {
  return `Generate an original name for a D&D adventurer.

Theme: absurd
Name: Grubblington Pip
Theme: dwarven
Name: Beard Stonecrunch
Theme: human
Name: Ben Jerdles
Theme: elven
Name: Elf Leafsson
Theme: ${prompt}
Name:`;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  console.log('session is passed', request.cookies.sessionToken);

  const session =
    request.cookies.sessionToken &&
    (await getValidSessionByToken(request.cookies.sessionToken));

  if (!session) {
    response
      .status(400)
      .json({ errors: [{ message: 'No valid session token passed' }] });
    return;
  }

  if (request.method === 'POST') {
    if (!request.cookies.sessionToken) {
      response
        .status(400)
        .json({ errors: [{ message: 'No session token passed' }] });
      return;
    }

    const completion = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: generatePrompt(request.body.prompt),
      temperature: 0.6,
    });
    if (completion.data.choices[0]) {
      response.status(200).json({ result: completion.data.choices[0].text });
    }
    return;
  }
  return response.status(400).json({ message: 'Method Not Allowed' });
}
