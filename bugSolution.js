The solution involves using the `encodeURI` function to encode the URI before passing it to the `Image` component. This function converts any special characters into a format that can be safely used in the URI.

```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyImage = ({ uri }) => {
  const encodedUri = encodeURI(uri);
  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyImage;
```
This change ensures that the image loads correctly, even with a URI containing special characters.