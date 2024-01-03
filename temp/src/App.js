import './App.css';
import Alert from './Alert';

function App() {
  let vehicles=[
    {
      "friendly_name": "KA12A3456",
      "id": "dd70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      "friendly_name": "MH12A3456",
      "id": "cc70a7e5-8397-4914-bbbb-4d6bb521ec67",
    }
  ]
  let a=[
    {
      "id": "6049dbd2-45bc-4e34-9ea2-c82ced0279f1",
      "alert_type": "Unsafe driving",
      "vehicle_id": "cc70a7e5-8397-4914-bbbb-4d6bb521ec67",
      "driver_friendly_name": "Ramesh",
      "vehicle_friendly_name": "KA12A3456",
      "timestamp": "2023-03-01T04:25:45.424Z"
    },
    {
      "id": "5149dbd2-45bc-4e34-9ea2-c82ced0279f1",
      "alert_type": "Distracted driver",
      "vehicle_id": "dd70a7e5-8397-4914-bbbb-4d6bb521ec67",
      "driver_friendly_name": "Suresh",
      "vehicle_friendly_name": "MH12A3456",
      "timestamp": "2023-03-01T04:24:45.424Z"
    },
  ]

  return (
    <div className="App">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          {vehicles.map((i)=>{
            return <li><a className="dropdown-item" href="#">{i.friendly_name}</a></li>
          })}
        </ul>
      </div>
      <ul className="list-group">
      {
        a.map((i)=>{
          console.log(i.alert_type)
          return <Alert id={i.id} alert_type={i.alert_type} ></Alert>
        })
      }
      </ul>
    </div>
  );
}

export default App;