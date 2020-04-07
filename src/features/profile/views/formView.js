import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./index.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

/**
 *
 * @param {Component} component
 * @param {string} title
 * @param {object} initialValues
 * @param {object} validationSchema
 */

const BasicForm = ({
  component: Component,
  title,
  initialValues,
  validationSchema,
  onSubmit,
  displayPreviousForm,
  isLoading
}) => {
  useEffect(() => {
    if (initialValues) {
      console.log("initialValues", initialValues);
    }
  }, [initialValues]);
  return (
    <StyleRoot>
      <React.Fragment>
        <div
          className="form-view-width"
          style={{
            marginTop: "30px",
            ...styles.fadeInLeft
          }}
        >
          <h1
            style={{
              fontFamily: "universe",
              fontSize: "16px",
              lineHeight: "19px",
              color: "rgba(22, 40, 40, 0.8)",
              opacity: "0.6"
            }}
          >
            {title}
          </h1>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            displayPreviousForm={displayPreviousForm}
          >
            {props => {
              return (
                <Component
                  {...props}
                  isLoading={isLoading}
                  displayPreviousForm={displayPreviousForm}
                />
              );
            }}
          </Formik>
        </div>
      </React.Fragment>
    </StyleRoot>
  );
};
export default BasicForm;
