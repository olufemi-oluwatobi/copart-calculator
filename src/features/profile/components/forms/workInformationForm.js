import React, { Component, useState } from "react";
import moment from "moment";
import { arrayGenerator } from "../../../../helpers/utils";
import FormFooter from "../formFooter";
import { FieldArray } from "formik";
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Cascader,
  InputNumber
} from "antd";
import { currencyCodes, industries } from "../../misc/arrayOfThings";
import { FormWrapperStyle } from "../../style";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
const { Option } = Select;
const { Item } = Form;

const labelCol = {
  xs: { span: 24 },
  sm: { span: 5 }
};
const wrapperCol = {
  xs: { span: 24 },
  sm: { span: 12 }
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
};

const styles = {
  slideDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};
const WorkFormFields = ({
  handleInputChange,
  handleSelectChange,
  values,
  errors,
  touched,
  handleAdd,
  index,
  handleRemoval,
  lastIndex
}) => {
  const isLastIndex = lastIndex === index;
  return (
    <StyleRoot>
      <div
        style={{
          marginTop: "2px",
          borderTop: index !== 0 && "1px solid rgba(22,40,40,0.1)",
          ...styles.slideDown
        }}
      >
        <Item style={{ marginBottom: 0 }}>
          <Item
            label="Employer"
            help={touched.ITProficiency && errors && errors.ITProficiency}
            style={{ display: "inline-block", width: "calc(95% - 12px)" }}
          >
            <Input
              onChange={handleInputChange}
              value={values.CurrentPositionTitle}
              name={`${[index]}:CurrentPositionTitle`}
              placeholder="enter your current position title"
            />
          </Item>
          <span
            style={{
              display: "inline-block",
              width: "12px",
              textAlign: "center"
            }}
          />
          <Item style={{ display: "inline-block", width: "calc(5% - 12px)" }}>
            <img
              onClick={() => (isLastIndex ? handleAdd() : handleRemoval())}
              style={{
                marginTop: "29px",
                width: "30px",
                cursor: "pointer"
              }}
              src={require(`../../../../assets/images/${
                isLastIndex ? "plus" : "cancel"
              }.svg`)}
            />
          </Item>
        </Item>
        <Item
          label="Job Title*"
          validateStatus={touched.Nationality && errors.Nationality && "error"}
          help={touched.Nationality && errors && errors.Nationality}
        >
          <Input
            onChange={handleInputChange}
            value={values.CurrentPositionTitle}
            name="JobTitle"
            placeholder="enter the job title for this job"
          />
        </Item>
        <Item
          label="Sector*"
          validateStatus={touched.Nationality && errors.Nationality && "error"}
          help={touched.Nationality && errors && errors.Nationality}
        >
          <Select mode="combobox">
            {[...industries, "others"].map(industry => (
              <Option value={industry}>{industry}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="Start date"
          style={{ display: "inline-block", width: "calc(50% - 6px)" }}
        >
          <DatePicker />
        </Item>
        <span
          style={{
            display: "inline-block",
            width: "12px",
            textAlign: "center"
          }}
        />
        <Item
          label="End date"
          style={{ display: "inline-block", width: "calc(50% - 6px)" }}
        >
          <DatePicker />
        </Item>
      </div>
    </StyleRoot>
  );
};
const WorkFormView = props => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    displayPreviousForm
  } = props;
  console.log(errors);

  console.log(values);
  const [jobFields, addJob] = useState([values]);

  let workInformation = {
    Employer: "",
    JobTitle: "",
    StartDate: "",
    EndDate: "",
    Industry: ""
  };

  const handleSelectChange = (value, node) => {
    const {
      props: { name }
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const onDataPick = (_, value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleInputChange = e => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  const appendWordToEachElementOfAnArray = (array, word, position) => {
    const newArray = [];
    array.forEach(element =>
      newArray.push(
        position === "before" ? `${word} ${element}` : `${element} ${word}`
      )
    );
    return newArray;
  };
  const removeStringFromArray = (array, deleteValue) => {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== deleteValue) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
  const handleMultipleSelect = (valueArray, option, label) => {
    const {
      props: { name }
    } = option[0];
    const value = valueArray.join(",");
    handleChange({ target: { value, name: name || label } });
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
          render={arrayHelpers => (
            <div>
              {values.workExperience &&
                values.workExperience.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      borderBottom:
                        index !== values.workExperience.length - 1 &&
                        "1px solid red"
                    }}
                  >
                    <Item style={{ marginBottom: 0 }}>
                      <Item
                        label="Employer"
                        validateStatus={getValidationStatus(
                          touched,
                          errors,
                          "Employer",
                          index
                        )}
                        help={displayFormHelp(
                          touched,
                          errors,
                          "Employer",
                          index
                        )}
                        className="half_view_form"
                      >
                        <Input
                          onChange={handleInputChange}
                          value={getValue(index, "Employer")}
                          name={`workExperience[${index}].Employer`}
                          placeholder="enter your current position title"
                        />
                      </Item>
                      <span
                        style={{
                          display: "inline-block",
                          width: "12px",
                          textAlign: "center"
                        }}
                      />
                      <Item className="half_view_form">
                        <img
                          onClick={() =>
                            values.workExperience.length - 1 === index
                              ? arrayHelpers.push(workInformation)
                              : arrayHelpers.remove(index)
                          }
                          style={{
                            marginTop: "29px",
                            width: "30px",
                            cursor: "pointer"
                          }}
                          src={require(`../../../../assets/images/${
                            values.workExperience.length - 1 === index
                              ? "plus"
                              : "cancel"
                          }.svg`)}
                        />
                      </Item>
                    </Item>
                    <Item
                      label="Job Title*"
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
                        {[...industries, "others"].map(industry => (
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
                      label="Start date"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "StartDate",
                        index
                      )}
                      help={displayFormHelp(
                        touched,
                        errors,
                        "StartDate",
                        index
                      )}
                      className="half_view_form"
                    >
                      <DatePicker
                        value={
                          getValue(index, "StartDate") &&
                          moment(getValue(index, "StartDate"), "YYYY-MM-DD")
                        }
                        onChange={(_, dateString) =>
                          onDataPick(
                            _,
                            dateString,
                            `workExperience[${index}].StartDate`
                          )
                        }
                      />
                    </Item>
                    <span
                      style={{
                        display: "inline-block",
                        width: "12px",
                        textAlign: "center"
                      }}
                    />
                    <Item
                      label="End date"
                      validateStatus={getValidationStatus(
                        touched,
                        errors,
                        "EndDate",
                        index
                      )}
                      help={displayFormHelp(touched, errors, "EndDate", index)}
                      className="half_view_form"
                    >
                      <DatePicker
                        value={
                          getValue(index, "EndDate") &&
                          moment(getValue(index, "EndDate"), "YYYY-MM-DD")
                        }
                        onChange={(_, dateString) =>
                          onDataPick(
                            _,
                            dateString,
                            `workExperience[${index}].EndDate`
                          )
                        }
                      />
                    </Item>{" "}
                  </div>
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
        actionText="Next"
      />
    </FormWrapperStyle>
  );
};

export default WorkFormView;
