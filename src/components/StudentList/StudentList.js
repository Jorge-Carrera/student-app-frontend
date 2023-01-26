import { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

const StudentList = ({ studentData }) => {
  const [searchInput, setSearchInput] = useState("");

  // Create an input that filters the students by full name
  // create a variable to hold the filtered data

  let dataToDisplay = studentData;

  // if search input is not empty (truthy)
  // reassign dataToDisplay with the filtered data

  if (searchInput) {
    dataToDisplay = studentData.filter((student) => {
      // if the students full name includes the searchInput, return true else false (case insenstive)
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    let contentClassName = "StudentList__content";

    if (dataToDisplay.length === 0) {
      contentClassName += " StudentList__content--center";
      return (
        <div className={contentClassName}> No results for {searchInput}</div>
      );
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by Name"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
