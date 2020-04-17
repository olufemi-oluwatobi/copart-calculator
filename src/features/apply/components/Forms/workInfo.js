import React, { useState } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { FieldArray, Formik } from "formik";
import { Form, Input, Checkbox, Select } from "antd";

import { workFormValidationSchema } from "./validationSchemas";
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

const WorkForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    displayPreviousForm,
  } = props;
  console.log(values);
  let workInformation = {
    Employer: "",
    JobTitle: "",
    StartDate: "",
    EndDate: "",
    Industry: "",
  };

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };

  const handleInputChange = (e) => {
    console.log(e);
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  const handleRadioChange = (e) => {
    const { name, checked } = e.target;
    handleChange({ target: { value: checked, name } });
    setFieldTouched(name, true, false);
  };

  const getValidationStatus = (touched, errors, key, index) => {
    return (
      touched.workExperience &&
      touched.workExperience[index] &&
      touched.workExperience[index][key] &&
      errors.workExperience &&
      errors.workExperience[index] &&
      errors.workExperience[index][key] &&
      "error"
    );
  };
  const displayFormHelp = (touched, errors, key, index) => {
    return (
      touched.workExperience &&
      touched.workExperience[index] &&
      touched.workExperience[index][key] &&
      errors.workExperience &&
      errors.workExperience[index] &&
      errors.workExperience[index][key]
    );
  };

  const getValue = (index, key) => {
    return values.workExperience && values.workExperience[index][key];
  };
  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <FieldArray
          name="workExperience"
          render={(arrayHelpers) => (
            <div>
              {values.workExperience &&
                values.workExperience.map((_, index) => (
                  <AnimateView key={index}>
                    <Item
                      label="Organisation name"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Employer",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "Employer", index)}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "Employer")}
                        name={`workExperience[${index}].Employer`}
                        placeholder="enter your current position title"
                      />
                    </Item>
                    <Item
                      label="Sector*"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Industry",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "Industry", index)}
                    >
                      <Select
                        defaultValue={getValue(index, "Industry")}
                        onSelect={handleSelectChange}
                        mode="combobox"
                      >
                        {industries.map((industry) => (
                          <Option
                            name={`workExperience[${index}].Industry`}
                            value={industry}
                          >
                            {industry}
                          </Option>
                        ))}
                      </Select>
                    </Item>

                    <Item
                      label="Designation"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "JobTitle",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "JobTitle", index)}
                    >
                      <Input
                        onChange={handleInputChange}
                        value={getValue(index, "JobTitle")}
                        name={`workExperience[${index}].JobTitle`}
                        placeholder="enter the job title for this job"
                      />
                    </Item>
                    <Item
                      label="Responsibilities"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "Responsibilities",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "Responsibilities",
                        index
                      )}
                    >
                      <TextArea
                        rows={4}
                        onChange={handleInputChange}
                        value={getValue(index, "Responsibilities")}
                        name={`workExperience[${index}].Responsibilities`}
                        placeholder="enter the job title for this job"
                      />
                    </Item>
                    <Item
                      style={{
                        display: "flex",
                        justifyContent: "baseline",
                      }}
                    >
                      <Checkbox
                        onChange={handleRadioChange}
                        name={`workExperience[${index}].IsCurrentWork`}
                        value={getValue(index, "IsCurrentWork")}
                        checked={getValue(index, "IsCurrentWork")}
                      >
                        I currently work here
                      </Checkbox>
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
                    {index === values.workExperience.length - 1 && (
                      <Item
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <span
                          onClick={() => arrayHelpers.push(workInformation)}
                          className="add_another"
                        >
                          add a new role
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
const WorkFormView = ({
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
          validationSchema={workFormValidationSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <WorkForm
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
export default WorkFormView;
