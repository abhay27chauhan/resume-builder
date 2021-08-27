import React from "react";
import { connect } from "react-redux";
import { skinCodes } from '../../constants/typeCodes'

import './GettingStarted.scss';

import { setSkinCd, updateSkinCd } from '../../redux/actions/documentActions';

function GettingStarted(props) {

    const handleClick = (skinCd) => {
      if(props.document.id){
        props.updateDocument(skinCd);        
      }else{
        props.setDocument(skinCd); 
      }
      props.history.push('/contact');
    }

  return (
    <div className="gettingStarted">
      <div className="gettingStarted__section">
        <h1 className="center">Select a resume template to get started</h1>
        <p className="center">
          You’ll be able to edit and change this template later!
        </p>
        <div className="gettingStarted__styleTemplate">
          {skinCodes.map((value, index) => {
            return (
              <div key={index} className="template-card">
                <i
                  className={
                    value == props.document.skinCd
                      ? "selected fa fa-check"
                      : "hide"
                  }
                ></i>
                <img src={"/images/" + value + ".svg"} alt="resume" />
                <button
                  type="button"
                  onClick={() => handleClick(value)}
                  className="btn-select-theme"
                >
                  USE TEMPLATE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
    return {
        document: state.document
    }
}

const mapDispatchToProps = dispatch=>{
  return{
      setDocument : (skinCd) => dispatch(setSkinCd(skinCd)),
      updateDocument : (skinCd) => dispatch(updateSkinCd(skinCd))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);
