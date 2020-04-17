import React, { useState } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { FieldArray, Formik } from "formik";
import { Form, Input, Radio, Select } from "antd";

import { eduFormValidationSchema } from "./validationSchemas";
import { FormWrapperStyle } from "../../style";
import { industries } from "../../data/arrayOfThings";
import FormFooter from "../formFooter";
import AnimateView from "./animateOnDisplay";

const { Option } = Select;
const { Item } = Form;
const { TextArea } = Input;

const styles = {
  slideDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const EduForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    displayPreviousForm,
  } = props;

  let educationalBackground = {
    Location: "",
    UniversityName: "",
    Concentration: "",
    DegreeType: "",
  };

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const onDataPick = (_, value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleInputChange = (e) => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  const appendWordToEachElementOfAnArray = (array, word, position) => {
    const newArray = [];
    array.forEach((element) =>
      newArray.push(
        position === "before" ? `${word} ${element}` : `${element} ${word}`
      )
    );
    return newArray;
  };

  const getValidationStatus = (touched, errors, key, index) => {
    return (
      touched.educationalBackground &&
      touched.educationalBackground[index] &&
      touched.educationalBackground[index][key] &&
      errors.educationalBackground &&
      errors.educationalBackground[index] &&
      errors.educationalBackground[index][key] &&
      "error"
    );
  };
  const displayFormHelp = (touched, errors, key, index) => {
    return (
      touched.educationalBackground &&
      touched.educationalBackground[index] &&
      touched.educationalBackground[index][key] &&
      errors.educationalBackground &&
      errors.educationalBackground[index] &&
      errors.educationalBackground[index][key]
    );
  };

  const getValue = (index, key) => {
    return (
      values.educationalBackground && values.educationalBackground[index][key]
    );
  };
  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <FieldArray
          name="educationalBackground"
          render={(arrayHelpers) => (
            <div>
              {values.educationalBackground &&
                values.educationalBackground.map((_, index) => (
                  <AnimateView key={index}>
                    <Item
                      label="University Name"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "UniversityName",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "UniversityName",
                        index
                      )}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "UniversityName")}
                        name={`educationalBackground[${index}].UniversityName`}
                        placeholder="enter university name"
                      />
                    </Item>
                    <Item
                      label="Location"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Location",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "Location", index)}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "Location")}
                        name={`educationalBackground[${index}].Location`}
                        placeholder="enter university  location"
                      />
                    </Item>
                    <Item
                      label="Type of Degree"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "DegreeType",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "DegreeType",
                        index
                      )}
                      className="half_view_form"
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "DegreeType")}
                        name={`educationalBackground[${index}].DegreeType`}
                        placeholder="enter degree type"
                      />
                    </Item>
                    <span
                      style={{
                        display: "inline-block",
                        width: "22px",
                        textAlign: "center",
                      }}
                    />
                    <Item
                      label="Concentration"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Concentration",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "Concentration",
                        index
                      )}
                      className="half_view_form"
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "Concentration")}
                        name={`educationalBackground[${index}].Concentration`}
                        placeholder="enter concentration"
                      />
                    </Item>
                    <Item
                      style={{
                        display: "flex",
                      }}
                    >
                      {index > 0 && (
                        <span
                          onClick={() => arrayHelpers.remove(index)}
                          className="remove"
                        >
                          remove
                        </span>
                      )}
                    </Item>
                    <div
                      style={{
                        marginTop: "10px",
                        borderBottom: "1px solid #C6CBD3ed",
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    />
                    {index === values.educationalBackground.length - 1 && (
                      <Item
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <span
                          onClick={() =>
                            arrayHelpers.push(educationalBackground)
                          }
                          className="add_another"
                        >
                          add another
                        </span>
                      </Item>
                    )}
                  </AnimateView>
                ))}
            </div>
          )}
        />
      </Form>
      <FormFooter
        isLoading={props.isLoading}
        previousButtonAction={displayPreviousForm}
        action={handleSubmit}
        hasPreviousButton
        width="100%"
        actionText="Save and Continue"
      />
    </FormWrapperStyle>
  );
};
const EduFormView = ({
  initialValues,
  onSubmit,
  displayPreviousForm,
  isLoading,
}) => {
  return (
    <StyleRoot>
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={eduFormValidationSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <EduForm
                {...props}
                isLoading={isLoading}
                displayPreviousForm={displayPreviousForm}
              />
            );
          }}
        </Formik>
      </React.Fragment>
    </StyleRoot>
  );
};
export default EduFormView;
