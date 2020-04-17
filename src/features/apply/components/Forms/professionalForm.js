import React, { useState } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { FieldArray, Formik } from "formik";
import { Form, Input, Radio, Select } from "antd";

import { proValidationSchema } from "./validationSchemas";
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

const ProfessionalForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    displayPreviousForm,
  } = props;

  let professionalQualification = {
    Name: "",
    Body: "",
    ObtainedAt: "",
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
      touched.professionalQualification &&
      touched.professionalQualification[index] &&
      touched.professionalQualification[index][key] &&
      errors.professionalQualification &&
      errors.professionalQualification[index] &&
      errors.professionalQualification[index][key] &&
      "error"
    );
  };
  const displayFormHelp = (touched, errors, key, index) => {
    return (
      touched.professionalQualification &&
      touched.professionalQualification[index] &&
      touched.professionalQualification[index][key] &&
      errors.professionalQualification &&
      errors.professionalQualification[index] &&
      errors.professionalQualification[index][key]
    );
  };

  const getValue = (index, key) => {
    return (
      values.professionalQualification &&
      values.professionalQualification[index][key]
    );
  };
  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <FieldArray
          name="professionalQualification"
          render={(arrayHelpers) => (
            <div>
              {values.professionalQualification &&
                values.professionalQualification.map((_, index) => (
                  <AnimateView key={index}>
                    <Item
                      label="Name of Professional Qualification"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Name",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "Name", index)}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "Name")}
                        name={`professionalQualification[${index}].Name`}
                        placeholder="enter professional qualification"
                      />
                    </Item>
                    <Item
                      label="Awarding Institution/Certifying Body"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Body",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "Body", index)}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "Body")}
                        name={`professionalQualification[${index}].Body`}
                        placeholder="enter awarding institution"
                      />
                    </Item>
                    <Item
                      label="Year Obtained"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "ObtainedAt",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "ObtainedAt",
                        index
                      )}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "ObtainedAt")}
                        name={`professionalQualification[${index}].ObtainedAt`}
                        placeholder="enter year you obtained this qualification"
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
                    {index === values.professionalQualification.length - 1 && (
                      <Item
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <span
                          onClick={() =>
                            arrayHelpers.push(professionalQualification)
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
const ProfessionalFormView = ({
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
          validationSchema={proValidationSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <ProfessionalForm
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
export default ProfessionalFormView;
