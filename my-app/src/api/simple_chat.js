async function simple_chat(message) {
  try {
    const response = await fetch(
      'https://eas7mgqg8h.execute-api.us-west-2.amazonaws.com/default/simple_chat',
      {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(message),
      }
    );
    if (!response.ok) {
      throw new Error('API Error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error');
    throw error;
  }
}

export default simple_chat;
