# JSON Editor

JSON Editor is a full-stack web application that allows users to fetch, edit, and validate JSON data via an intuitive and visually appealing interface. It uses an extensive suite of modern technologies for both server and client sides.

## Technologies Used

- **Vue.js 3:** Powers the client-side, providing an interactive and responsive user interface.
- **Typescript:** For static typing and improved code readability and maintainability.
- **Node.js v18.16:** Powers the server-side, handling networking and I/O operations efficiently.
- **Express.js:** Provides server-side routing and middleware on top of Node.js.
- **axios:** Used for making HTTP requests from both client and server sides.

## Getting Started

- Clone the repository to your local machine with `git clone https://github.com/pr4thams/JSON-Editor.git`
- Change into the project directory using `cd [filename]`
- Add the JSON file, named `config.json`, and should be placed in the 'editor-api' directory like this:

```
├── editor-api
   ├── controllers
   ├── routes
   ├── index.ts
   └── config.json
```

- While in the root directory of the project and not changing into subdirectories, open a terminal, and run the server using the command: `npm run server`
- Open a new terminal on the side and run the client using the command: `npm run client`

## Usage

- The JSON editor will fetch the initial JSON data from the server upon loading.
- Use the provided text inputs to edit each field of the JSON data.
- Click the "Save" button to persist your changes.
- A confirmation will appear at the top of the screen indicating that changes have been saved.

## Architecture and Design

The application uses Vue.js for the client-side, creating a dynamic and responsive user interface. The JSON data is presented as a series of nested components, allowing for deep nesting of JSON data.

The back-end server uses Express.js and Node.js, providing a robust and efficient API for handling JSON data. The server fetches and stores JSON data in memory, making it fast and efficient to access and update data.

The project uses Axios for handling HTTP requests between the client and server, providing promise-based architecture and a wide range of HTTP client capabilities.

Here is a diagram explaining the rendering process of the nested fields using recursive component calls and iteration in Vue 3:

```
Component Init
 |
 V
Rendering Loop -- Yes --> Array Check -- Yes --> Array Loop -- Yes --> Is Object? -- Yes --> Render `JsonEditor` (Recursion)
 |                  |     |                 |      |                  |     |
 |                  |     |                 |      |                  |     No
 |                  |     |                 |      |                  | 
 |                  |     |                 |      |                  V
 |                  |     |                 |      |                  Render input field for array item
 |                  |     |                 |      |
 |                  |     |                 |      No
 |                  |     |                 |     
 |                  |     |                 V
 |                  |     |                 Render input field for array item
 |                  |     |
 |                  |     No
 |                  |     
 |                  V
 |                  Object Check -- Yes --> Render `JsonEditor` (Recursion)
 |                        |
 |                        No
 |                        
 V
Render input field for key/value pair
```

## Testing

The mocha testing is performed using chai and chai-http libraries. Run the test using `npm test` while in server directory.

Config Controller Tests

- GET /config: Ensures the server can load and send the correct JSON data.
- POST /config: Verifies that the server updates the JSON configuration file accurately.
