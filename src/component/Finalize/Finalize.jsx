import React from "react";
import { useFirestore } from "react-redux-firebase";
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';

import "./Finalize.scss";

import ResumePreview from "../ResumePreview/ResumePreview";
import { connect } from "react-redux";

function Finalize(props) {
  console.log("finalize Page ", props);
  const { contactSection, educationSection, documentObj, auth } = props;

  const firestore = useFirestore();

  const downloadResumeAsJSON = () => {
    const newObj = {
      [documentObj.id]: {
        educationSection: educationSection,
        contactSection: contactSection,
        document: documentObj,
      }
    }

    const data = JSON.stringify(newObj, null, '\t');

    const blob = new Blob([data], { type: 'application/json' });

    // Create new URL
    const url = window.URL.createObjectURL(blob);

    let a = document.createElement("a");

    a.href = url;

    a.download = "resumeJSON.json";

    a.click();
  }

  const downloadResume = () => {
    const input = document.getElementById('resumePreview');
     html2canvas(input)
       .then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF("p", "mm", "a4");
         const width = pdf.internal.pageSize.getWidth();
         const height = pdf.internal.pageSize.getHeight();
         pdf.addImage(imgData, 'JPEG', 0, 0, width,height);

         pdf.save("resume.pdf");

       }).catch(function(error){
         console.log(error)
       })
  };

  const saveToDatabase = async () => {
    let user = await firestore.collection("users").doc(auth.uid).get();
    let userData = user.data();

    console.log("finalize userData ", userData);

    let newObj = {};
    if (userData.resumeIds != undefined) {
      newObj = {
        ...userData.resumeIds,
        [documentObj.id]: {
          educationSection: educationSection,
          contactSection: contactSection,
          document: documentObj,
        },
      };
    } else {
      newObj = {
        [documentObj.id]: {
          educationSection: educationSection,
          contactSection: contactSection,
          document: documentObj,
        },
      };
    }

    await firestore.collection("users").doc(auth.uid).update({
      resumeIds: newObj,
    });
  };

  return (
    <div className="finalize">
      <div className="finalize__funnel-section">
        <div className="finalize__preview-card" id="resumePreview">
          <ResumePreview
            contactSection={contactSection}
            educationSection={educationSection}
            skinCd={documentObj.skinCd}
          ></ResumePreview>
        </div>
        <div className="finalize__settings center">
          <div className="resume-options">
            <p className="no-margin">Download Resume As JSON</p>
            <a style={{ cursor: "pointer" }} onClick={downloadResumeAsJSON}>
              Download Resume
            </a>
          </div>
          <div className="resume-options">
            <p className="no-margin">Download Resume As PDF</p>
            <a style={{ cursor: "pointer" }} onClick={downloadResume}>
              Download Resume
            </a>
          </div>
          <div className="resume-options">
            <p className="no-margin">Save to Database</p>
            <a style={{ cursor: "pointer" }} onClick={saveToDatabase}>
              Save to Database
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactSection: state.contactSection,
    educationSection: state.educationSection,
    documentObj: state.document,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Finalize);
