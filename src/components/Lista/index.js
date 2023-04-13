import * as React from "react";
import DataTable from "react-data-table-component";

// Generate Order Data

export default function DataTableLista({ data, columns }) {
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <DataTable
      pagination
      progressPending={pending}
      theme="solarized"
      selectableRows
      dense
      highlightOnHover
      pointerOnHover
      title="Chamados Abertos"
      columns={columns}
      data={data}
    />
  );
}
