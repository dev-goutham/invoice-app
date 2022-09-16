import React, { PropsWithChildren } from 'react';
import * as xlsx from 'xlsx-js-style';
import { saveAs } from 'file-saver';
import { Invoice } from '../../typings/Invoice';
import StyledDownloadInvoice from './styles';
import formatCurrency from '../../utils/formatCurrency';

interface Props extends PropsWithChildren {
  invoice: Invoice;
}

const downloadFile = (invoice: Invoice) => {
  const wb = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet([
    ['Invoice No.: ' + invoice.invoiceNumber],
    ['Invoice date: ' + new Date(invoice.invoiceDate).toDateString()],
    ...Object.values(invoice.senderDetails).map((val) => [val]),
  ]);

  const clientDetails = Object.values(invoice.clientDetails).map((val) => [
    val,
  ]);

  if (invoice.poNumber) {
    clientDetails.splice(1, 0, ['PO. No.: ' + invoice.poNumber]);
  }

  if (invoice.poDate) {
    clientDetails.splice(2, 0, [
      'PO. date: ' + new Date(invoice.poDate).toDateString(),
    ]);
  }

  xlsx.utils.sheet_add_json(sheet, [...clientDetails], {
    origin: invoice.taxApplicable ? 'E1' : 'D1',
  });

  const footer: { [key: string]: any } = {
    Name: '',
    Price: '',
  };

  if (invoice.taxApplicable) {
    footer['Qty'] = '';
    footer['Total'] = '';
    footer['Tax Rate'] = 'Total';
    footer['Total w/tax'] = formatCurrency(invoice.total);
  } else {
    footer['Qty'] = 'Total';
    footer['Total'] = formatCurrency(invoice.total);
  }

  const sanitizedItems = invoice.items.map((item) => {
    console.log(item);
    const obj: { [key: string]: any } = {
      Name: item.name,
      Price: formatCurrency(item.price),
      Qty: item.quantity,
      Total: formatCurrency(item.total),
    };

    if (invoice.taxApplicable) {
      obj['Tax Rate'] = item.taxRate + '%';
      obj['Total w/tax'] = formatCurrency(item.totalAfterTax);
      return obj;
    }
  });
  console.log(sanitizedItems);
  xlsx.utils.sheet_add_json(sheet, [...sanitizedItems, footer], {
    origin: 'A15',
  });

  const headerAndFooterStyles = {
    font: {
      bold: true,
      sz: '12',
      color: { rgb: 'ffffff' },
    },
    fill: {
      fgColor: { rgb: '141625' },
    },
  };

  const tableStyle = {
    font: {
      color: { rgb: 'ffffff' },
    },
    fill: {
      fgColor: { rgb: '4b4f6a' },
    },
  };

  const cols = ['A', 'B', 'C', 'D'];

  if (invoice.taxApplicable) cols.push('E', 'F');

  cols.forEach((cell) => {
    const headerCell = cell + 15;
    sheet[headerCell].s = headerAndFooterStyles;
    const footerCell = cell + (15 + invoice.items.length + 1);
    if (sheet[footerCell]) {
      sheet[footerCell].s = headerAndFooterStyles;
    }
  });

  for (let i = 0; i < cols.length; i++) {
    for (let j = 16; j <= invoice.items.length + 15; j++) {
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
