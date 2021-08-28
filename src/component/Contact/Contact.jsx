import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Contact.scss";

import { fieldCd } from "../../constants/typeCodes";
import { add, update } from "../../redux/actions/contactActions";
import ResumePreview from "../ResumePreview/ResumePreview";

function Contact(props) {
  console.log("contactPage ", props);

  const [contact, setContact] = useState(props.contactSection);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    if (Object.keys(props.contactSection).length > 0) {
      props.updateContact(contact);
    } else {
      props.addContact(contact);
    }

    props.history.push("/education");
  };

  const getFieldData = (key) => {
    if (contact && contact[key]) {
      return contact[key];
    }
    return "";
  };

  return (
    <div className="contact">
      <div className="contact__section">
        <div className="contact__form-card">
          <h2 className="contact__form-heading center">Personal Details</h2>
          <div className="contact__form-section">
            <div className="input-group">
              <label>First Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.FirstName}
                  value={getFieldData(fieldCd.FirstName)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.LastName}
                  value={getFieldData(fieldCd.LastName)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group full">
              <label>Professional Summary</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ProfSummary}
                  value={getFieldData(fieldCd.ProfSummary)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Email}
                  value={getFieldData(fieldCd.Email)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Phone</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Phone}
                  value={getFieldData(fieldCd.Phone)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Profession</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Profession}
                  value={getFieldData(fieldCd.Profession)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Street</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Street}
                  value={getFieldData(fieldCd.Street)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>City</label>
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
              <label>State</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.State}
                  value={getFieldData(fieldCd.State)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Country</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Country}
                  value={getFieldData(fieldCd.Country)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Pin Code</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ZipCode}
                  value={getFieldData(fieldCd.ZipCode)}
                  onChange={handleChange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="contact__form-buttons">
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

        <div className="contact__preview-card">
          <ResumePreview
            contactSection={contact}
            skinCd={props.document.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactSection: state.contactSection,
    document: state.document,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(add(contact)),
    updateContact: (contact) => dispatch(update(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
