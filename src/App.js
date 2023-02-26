import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import StudentList from "./components/StudentList/StudentList";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        const { data, error } = json;
        console.log(response.ok);
        if (response.ok) {
          //handle success
          setStudentData(data);
          setIsLoading(false);
        } else {
          // handle error
          setError(error);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  function renderContent() {
    if (isLoading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  }

  return (
    <div className="App">
      <Container center={Boolean(error || isLoading)} scroll={false}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
