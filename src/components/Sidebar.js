import React from 'react';
import { Document, Page } from 'react-pdf';

const Sidebar = ({ data }) => {
  const {
    comment_from_llm,
    classification,
    datetime,
    total_amount,
    currency,
    customer,
    merchant,
    document_id,
    transaction_id,
    description,
    transaction_type,
    related_documents,
    items,
    warnings_from_llm,
    llm_quality_score,
    llm_filename,
  } = data;

  return (
    <div className="sidebar">
      <h2>Document Details</h2>
      <p><strong>Comment from LLM:</strong> {comment_from_llm}</p>
      <p><strong>Classification:</strong> {classification}</p>
      <p><strong>Date and Time:</strong> {datetime}</p>
      <p><strong>Total Amount:</strong> {total_amount}</p>
      <p><strong>Currency:</strong> {currency}</p>
      <p><strong>Customer:</strong> {customer}</p>
      <p><strong>Merchant:</strong> {merchant}</p>
      <p><strong>Document ID:</strong> {document_id}</p>
      <p><strong>Transaction ID:</strong> {transaction_id}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Transaction Type:</strong> {transaction_type}</p>
      <p><strong>Related Documents:</strong> {related_documents.join(', ')}</p>
      <p><strong>Warnings from LLM:</strong> {warnings_from_llm}</p>
      <p><strong>LLM Quality Score:</strong> {llm_quality_score}</p>
      <p><strong>LLM Filename:</strong> {llm_filename}</p>
      <h3>Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Article Number:</strong> {item.article_number}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Serial Number:</strong> {item.serial_number}</p>
            <p><strong>Returned:</strong> {item.returned ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
      {data.pdf && (
        <div className="pdf-viewer">
          <Document file={data.pdf}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
