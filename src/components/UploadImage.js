import * as React from 'react';
import FileInput from '@cloudscape-design/components/file-input';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function UploadImage() {
  const [value, setValue] = React.useState([]);
  const handleOnChange = ({ detail }) => {
    console.log(detail.value);
    setValue(detail.value);
    const file = detail.value[0];
    const fileReader = new FileReader(); // get blob file
    // event listerner to trigger logic after async reading complete
    fileReader.onloadend = () => {
      const base64Data = fileReader.result.split(',')[1];
      (async () => {
        const response = await fetch(
          'https://tqqoo5q72d.execute-api.us-west-2.amazonaws.com/default/class_upload_image',
          {
            method: 'POST',
            body: JSON.stringify({ data: base64Data, fileName: 'test' }),
          }
        );
      })();
      console.log(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <SpaceBetween size="s">
      <FileInput onChange={handleOnChange} value={value} multiple>
        Choose file
      </FileInput>
    </SpaceBetween>
  );
}
