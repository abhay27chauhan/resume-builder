import React from "react";

import './ResumePreview.scss'

import { fieldCd } from "../../constants/typeCodes";

function ResumePreview(props) {
  console.log("resume Preview ", props);
  console.log(props.educationSection)

  const rvContact = (key, valToAppend) => {
    if(props.contactSection && props.contactSection[key]){
      return props.contactSection[key] + (valToAppend ? valToAppend: '');
    }
    return '';
  };

  const rvEducation = (key, valToAppend) => {
    if(props.educationSection && props.educationSection[key]){
      return props.educationSection[key] + (valToAppend ? valToAppend : '');
    }
    return '';
  };

  return (
    <div className="resume-preview">
      <div className="name-section">
        <p className="contact-name center text-upper">
          {rvContact(fieldCd.FirstName, " ") + rvContact(fieldCd.LastName)}{" "}
        </p>
        <p className="center address">
          {rvContact(fieldCd.City, ", ") +
            rvContact(fieldCd.State, ", ") +
            rvContact(fieldCd.Country, ", ") +
            rvContact(fieldCd.ZipCode)}
        </p>
        <p className="center">{rvContact(fieldCd.Email)}</p>
        <p className="center">{rvContact(fieldCd.Phone)} </p>
      </div>
      <div className="profSummSection text-upper">
        <p className="heading bold">PROFESSIONAL SUMMARY</p>
        <div className="divider"></div>
        <p>{rvContact(fieldCd.ProfSummary)}</p>
      </div>

      <div className="educationSection text-upper">
        <p className="heading bold">EDUCATIONAL DETAILS</p>
        <div className={"divider"}></div>
        <p>{rvEducation(fieldCd.SchoolName)}</p>
        <p>{rvEducation(fieldCd.Degree)}</p>
        <p>{rvEducation(fieldCd.City)}</p>
        <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
        <p>{rvEducation(fieldCd.GraduationDate)}</p>
        <p>{rvEducation(fieldCd.GraduationYear)}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
