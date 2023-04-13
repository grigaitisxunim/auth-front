import { useEffect, useState } from "react";
import * as C from "./styles";
import DataTableLista from "../../../components/Lista";

const Home = () => {
  const token = localStorage.getItem("accesstoken");

  const [lista, setLista] = useState([]);


  useEffect(() => {
    
  }, []);

  const columns = [
    {
      name: "Data",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Nome",
      selector: (row) => row.owner.fullname,
      sortable: true,
    },
    {
      name: "Empresa",
      selector: (row) => row.group.name,
      sortable: true,
    },
    {
      name: "Problema",
      selector: (row) => row.issue,
      sortable: true,
    },
    {
      name: "Assunto",
      selector: (row) => row.subject,
      sortable: true,
    },
  ];

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <C.Div>
        <DataTableLista data={lista} columns={columns} />
      </C.Div>
    </C.Container>
  );
};

export default Home;
