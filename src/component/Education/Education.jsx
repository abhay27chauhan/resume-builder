import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Education.scss";

import { fieldCd } from "../../constants/typeCodes";
import { add, update } from "../../redux/actions/educationActions";
import ResumePreview from "../ResumePreview/ResumePreview";

function Education(props) {
    console.log("educationPage ", props);

    const [education, setEducation] = useState(props.educationSection);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setEducation({
            ...education,
            [name]: value,
        });
    }

    const getFieldData = (key) => {
        if (education && education[key]) {
            return education[key];
        }

        return "";
    }

    const onSubmit = () => {
        if (Object.keys(props.educationSection).length > 0) {
            props.updateEducation(education);
        } else {
            props.addEducation(education);
        }
    
        props.history.push('/finalize');
    }

  return (
    <div className="education">
      <div className="education__section">
        <div className="education__form-card">
          <h2 className="education__form-heading center">Educational Section</h2>
          <div className="education__form-section">
            <div className="input-group">
              <label>College Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.SchoolName}
                  value={getFieldData(fieldCd.SchoolName)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Degree</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Degree}
                  value={getFieldData(fieldCd.Degree)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>CGPA</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationCGPA}
                  value={getFieldData(fieldCd.GraduationCGPA)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>City/State</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.City}
                  value={getFieldData(fieldCd.City)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Graduation Month</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationDate}
                  value={getFieldData(fieldCd.GraduationDate)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Graduation Year</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.GraduationYear}
                  value={getFieldData(fieldCd.GraduationYear)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="education__form-buttons">
              <button
                onClick={onSubmit}
                className="btn hvr-float-shadow"
                type="button"
              >
                Next
              </button>
              <NavLink to="/getting-started" className="center">
                Back
              </NavLink>
            </div>
          </div>
        </div>

        <div className="education__preview-card">
          <ResumePreview
            educationSection={education}
            contactSection={props.contactSection}
            skinCd={props.document.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
    return {
        contactSection:state.contactSection,
        educationSection:state.educationSection,
        document:state.document
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
       addEducation:(education) => dispatch(add(education)),
       updateEducation:(education) => dispatch(update(education))
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Education);
