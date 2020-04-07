import React, { Component } from "react";
import { Object, string } from "yup";
import FormFooter from "../formFooter";
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

const MultiValues = ({ text, buttonAction }) => (
  <div
    style={{
      display: "inline-block",
      padding: "5px",
      background: "rgba(22, 40, 40, 0.1)",
      borderRadius: "3px",
      marginRight: "10px",
      marginTop: "5px"
    }}
  >
    <span>{text}</span>
    <img
      onClick={buttonAction}
      src={require("../../../../assets/images/cancel.svg")}
      style={{
        float: "right",
        marginLeft: "5px",
        cursor: "pointer",
        marginTop: "3px"
      }}
    />
  </div>
);
const QualificationFormView = props => {
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

  const deleteValue = (value, index, name) => {
    const valueArray = value.split(",");
    valueArray.splice(index, 1);
    const newString = valueArray.join(",");
    handleChange({
      target: { value: newString, name }
    });
  };

  const handleMultipleSelect = (valueArray, option, name) => {
    const value = valueArray.join(",");
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };

  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <Item
          label="I.T proficiency"
          validateStatus={
            touched.ITProficiency && errors.ITProficiency && "error"
          }
          help={touched.ITProficiency && errors && errors.ITProficiency}
        >
          {" "}
          <Select
            placeholder="select your I.T proficiency level"
            onChange={handleSelectChange}
            value={values.ITProficiency}
          >
            {["Beginner", "Intermediate", "Profesional"].map(level => (
              <Option name="ITProficiency" value={level}>
                {level}
              </Option>
            ))}
          </Select>
        </Item>
        <Item
          validateStatus={
            touched.EducationalQualifications &&
            errors.EducationalQualifications &&
            "error"
          }
          help={
            touched.EducationalQualifications &&
            errors &&
            errors.EducationalQualifications
          }
          label="Educational qualification"
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="select your educational qualifications"
            //defaultValue={}
            value={
              values.EducationalQualifications &&
              values.EducationalQualifications.split(",")
            }
            onChange={(valueArray, options) =>
              handleMultipleSelect(
                valueArray,
                options,
                "EducationalQualifications"
              )
            }
          >
            {["Bsc", "Msc", "Phd"].map(industry => (
              <Option name="EducationalQualifications" value={industry}>
                {industry}
              </Option>
            ))}
          </Select>
        </Item>
        <Item
          validateStatus={
            touched.ProfessionalQualifications &&
            errors.ProfessionalQualifications &&
            "error"
          }
          help={
            touched.ProfessionalQualifications &&
            errors &&
            errors.ProfessionalQualifications
          }
          label="Professional Qualifications"
        >
          <Input
            onChange={handleInputChange}
            name="ProfessionalQualifications"
            placeholder="enter professional qualifications. *seprate with a comma"
            value={values.ProfessionalQualifications}
          />
        </Item>

        {values.ProfessionalQualifications &&
          values.ProfessionalQualifications.length > 0 &&
          values.ProfessionalQualifications.split(",").map(
            (qualification, index) =>
              qualification.length > 0 && (
                <MultiValues
                  buttonAction={() =>
                    deleteValue(
                      values.ProfessionalQualifications,
                      index,
                      "ProfessionalQualifications"
                    )
                  }
                  text={qualification}
                />
              )
          )}
        <Item
          validateStatus={
            touched.UserEducation && errors.UserEducation && "error"
          }
          help={touched.UserEducation && errors && errors.UserEducation}
          label="Skills"
        >
          <Input
            onChange={handleInputChange}
            name="UserEducation"
            placeholder="enter your skills. *seprate with a comma"
            value={values.UserEducation}
          />
        </Item>

        {values.UserEducation &&
          values.UserEducation.length > 0 &&
          values.UserEducation.split(",").map(
            (skills, index) =>
              skills.length > 0 && (
                <MultiValues
                  buttonAction={() =>
                    deleteValue(values.UserEducation, index, "UserEducation")
                  }
                  text={skills}
                />
              )
          )}
      </Form>
      <FormFooter
        isLoading={props.isLoading}
        previousButtonAction={displayPreviousForm}
        hasPreviousButton
        action={handleSubmit}
        width="100%"
        actionText="Save and finish"
      />
    </FormWrapperStyle>
  );
};

export default QualificationFormView;
