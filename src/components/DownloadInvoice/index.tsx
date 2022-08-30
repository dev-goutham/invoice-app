import React, { PropsWithChildren } from 'react';
import * as xlsx from 'xlsx-js-style';
import { saveAs } from 'file-saver';
import { Invoice } from '../../typings/Invoice';
import StyledDownloadInvoice from './styles';

interface Props extends PropsWithChildren {
  invoice: Invoice;
}

const downloadFile = (invoice: Invoice) => {
  const wb = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet([
    ...Object.values(invoice.senderDetails).map((val) => [val]),
  ]);

  xlsx.utils.sheet_add_json(
    sheet,
    [...Object.values(invoice.clientDetails).map((val) => [val])],
    {
      origin: invoice.taxApplicable ? 'E1' : 'D1',
    },
  );

  const footer: { [key: string]: any } = {
    name: '',
    price: '',
  };

  if (invoice.taxApplicable) {
    (footer['quantity'] = ''), (footer['taxRate'] = 'Total');
    footer['total'] = invoice.total;
  } else {
    footer['quantity'] = 'Total';
    footer['total'] = invoice.total;
  }

  xlsx.utils.sheet_add_json(sheet, [...invoice.items, footer], {
    origin: 'A10',
  });

  const headerAndFooterStyles = {
    font: {
      bold: true,
      sz: '12',
      color: { rgb: '#ffffff' },
    },
    fill: {
      fgColor: { rgb: '#141625' },
    },
  };

  const tableStyle = {
    font: {
      color: { rgb: '#ffffff' },
    },
    fill: {
      fgColor: { rgb: '#4b4f6a' },
    },
  };

  const cols = ['A', 'B', 'C', 'D'];

  if (invoice.taxApplicable) cols.push('E');

  cols.forEach((cell) => {
    const headerCell = cell + 10;
    sheet[headerCell].s = headerAndFooterStyles;
    const footerCell = cell + (10 + invoice.items.length + 1);
    if (sheet[footerCell]) {
      sheet[footerCell].s = headerAndFooterStyles;
    }
  });

  for (let i = 0; i < cols.length; i++) {
    for (let j = 11; j <= invoice.items.length + 10; j++) {
      const headerCell = cols[i] + j;
      sheet[headerCell].s = tableStyle;
    }
  }

  xlsx.utils.book_append_sheet(wb, sheet);
  const eb = xlsx.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([eb], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-10',
  });
  saveAs(blob, 'Invoice.xlsx');
};

const DownloadInvoice: React.FC<Props> = ({ invoice }) => {
  return (
    <StyledDownloadInvoice onClick={() => downloadFile(invoice)}>
      Download file
    </StyledDownloadInvoice>
  );
};

export default DownloadInvoice;
