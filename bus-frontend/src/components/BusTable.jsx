import { useEffect, useState } from "react";

function BusTable() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async()=>{
       try{
        const res = await fetch("http://localhost:8080/bus");
        const data = await res.json();
        setBuses(data);
       } catch(err){
        console.error("Error fetch a buses: ", err);
       }
    }
    fetchBuses();
     }, []);

  return (
    <div>
      <h2>Lista de Buses</h2>
      <table className="mi-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Numero de Bus</th>
            <th>Placa</th>
            <th>Fecha creacion</th>
            <th>Caracteristicas</th>
            <th>Actividad</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.numeroBus}</td>
              <td>{bus.placa}</td>
              <td>{bus.fechaCreacion}</td>
              <td>{bus.caracteristicas}</td>
              <td>{bus.activo?"Activo":"Inactivo"}</td>
              <td>{bus.marca.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusTable;
