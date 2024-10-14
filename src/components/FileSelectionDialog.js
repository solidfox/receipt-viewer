import React from 'react';

const { dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

const FileSelectionDialog = ({ onFileSelect }) => {
  const handleFileSelection = async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory']
    });

    if (result.canceled) {
      return;
    }

    const folderPath = result.filePaths[0];
    const files = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
      });

    onFileSelect(files);
  };

  return (
    <div className="file-selection-dialog">
      <button onClick={handleFileSelection}>Select Folder</button>
    </div>
  );
};

export default FileSelectionDialog;
