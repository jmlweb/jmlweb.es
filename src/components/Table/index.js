import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  caption, headers, content, footers,
}) => (
  <table>
    {caption && <caption>{caption}</caption>}
    {headers && (
      <thead>
        <tr>{headers.map(header => <th key={header}>{header}</th>)}</tr>
      </thead>
    )}
    <tbody>
      {content.map(row => (
        <tr key={row.join('-')}>
          {row.map(cell => <td key={cell}>{cell}</td>)}
        </tr>
      ))}
    </tbody>
    {footers && (
      <tfoot>
        <tr>{footers.map(footer => <td key={footer}>{footer}</td>)}</tr>
      </tfoot>
    )}
  </table>
);

Table.propTypes = {
  caption: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  footers: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
  caption: undefined,
  headers: undefined,
  content: [],
  footers: undefined,
};

export default Table;
