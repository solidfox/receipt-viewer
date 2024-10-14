# receipt-viewer

## Running the Project

To run the project, follow these steps:

1. Ensure you have Node.js and npm installed on your machine.
2. Run `npm install` to install the project dependencies.
3. Start the React development server by running `npm start` in a separate terminal window.
4. To start the Electron app, run `npm run electron-dev`.
5. To build the React app, run `npm run build`.
6. If you encounter an issue with port 3000 being in use, create a `.env` file in the root directory of your project with the following content:
   ```
   PORT=3001
   ```
   Update the `mainWindow.loadURL` in `main.js` to use the new port number:
   ```javascript
   mainWindow.loadURL('http://localhost:3001');
   ```
   Restart your development server and Electron app by running `npm run electron-dev` again.
