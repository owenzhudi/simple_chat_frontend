import { useState } from 'react';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Input from '@cloudscape-design/components/input';
import Button from '@cloudscape-design/components/button';
import simple_chat from './api/simple_chat';
import UploadImage from './components/UploadImage';

export default function App() {
  const [value, setValue] = useState('');

  const handleClick = async () => {
    try {
      const result = await simple_chat(value);
      console.log(result);
    } catch (error) {
      console.log('error ' + error.message);
    }
  };

  return (
    <SpaceBetween size="m">
      <Header variant="h1">Hello World!</Header>
      <UploadImage />
      <Container>
        <SpaceBetween size="s">
          <span>Start editing to see some magic happen</span>
          <Input
            value={value}
            onChange={(event) => setValue(event.detail.value)}
          />
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </SpaceBetween>
      </Container>
    </SpaceBetween>
  );
}
