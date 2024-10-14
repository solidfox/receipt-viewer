import React, { useState } from 'react';
import FileSelectionDialog from './components/FileSelectionDialog';
import Table from './components/Table';
import Sidebar from './components/Sidebar';

const App = () => {
  const [jsonFiles, setJsonFiles] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleFileSelection = (files) => {
    setJsonFiles(files);
  };

  const handleRowSelection = (row) => {
    setSelectedRow(row);
  };

  return (
    <div className="app">
      <FileSelectionDialog onFileSelect={handleFileSelection} />
      <Table data={jsonFiles} onRowSelect={handleRowSelection} />
      {selectedRow && <Sidebar data={selectedRow} />}
    </div>
  );
};

export default App;
