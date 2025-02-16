# Expo Image Component Issue with Special Characters in URI

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters (e.g., spaces, accented characters) fail to load.  The error message provided is not very descriptive, making debugging challenging.

A solution is provided to demonstrate how to handle and resolve the issue, making the app more robust and user-friendly.

## Bug
The `bug.js` file shows how the image fails to load when a URI with special characters is used.  The error is usually silent, or provides a very generic error message, depending on the platform and version of Expo.

## Solution
The `bugSolution.js` file shows a solution using the `encodeURI` function to correctly handle URIs with special characters. This ensures that the image loads correctly, regardless of the characters in the URI.

## Setup

1. Clone this repository.
2. Install the necessary packages using `npm install` or `yarn install`.
3. Run the app using `expo start`.
