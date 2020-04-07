import React, { useState } from "react";
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
import moment from "moment";
import { countryList, languages } from "../../misc/arrayOfThings";
import { FormWrapperStyle } from "../../style";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
const { Option } = Select;

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
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  }
};

const BasicFormView = props => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    displayPreviousForm
  } = props;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const dateFormat = "YYYY-MM-DD";
  const [languageCount, setLanguageCount] = useState(new Array(1).fill(null));
  const handleSelectChange = (value, node) => {
    const {
      props: { name }
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleMultipleSelect = (value, node, index) => {
    const {
      props: { name }
    } = node;

    const valueArray = values[name].split(",").filter(val => val.length > 0);
    if (valueArray[index]) {
      valueArray[index] = value;
    } else {
      valueArray.push(value);
    }
    const newValue = valueArray.join(",");
    handleChange({ target: { value: newValue, name } });
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
  return (
    <StyleRoot>
      <FormWrapperStyle style={styles.bounce}>
        <Form layout="vertical">
          <Form.Item
            label="First name"
            validateStatus={touched.FirstName && errors.FirstName && "error"}
            help={touched.FirstName && errors && errors.FirstName}
          >
            <Input
              onChange={handleInputChange}
              name="FirstName"
              value={values.FirstName}
              placeholder="enter your first name"
            />
          </Form.Item>
          <Form.Item
            label="Last name"
            validateStatus={touched.LastName && errors.LastName && "error"}
            help={touched.LastName && errors && errors.LastName}
          >
            <Input
              onChange={handleInputChange}
              name="LastName"
              value={values.LastName}
              placeholder="enter your last name"
            />
          </Form.Item>
          <Form.Item
            label="Middle name"
            validateStatus={touched.MiddleName && errors.MiddleName && "error"}
            help={touched.MiddleName && errors && errors.MiddleName}
          >
            <Input
              onChange={handleInputChange}
              name="MiddleName"
              value={values.MiddleName}
              placeholder="Enter your middle name"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item label="Gender" className="half_view_form">
              <Select value={values.Gender} onChange={handleSelectChange}>
                {["male", "female"].map(gender => (
                  <Option name="Gender" value={gender}>
                    {gender}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <span
              style={{
                display: "inline-block",
                width: "24px",
                textAlign: "center"
              }}
            />
            <Form.Item
              validateStatus={errors.DOB && "error"}
              help={errors && errors.DOB}
              label="Date of Birth "
              className="half_view_form"
            >
              <DatePicker
                onChange={(date, dateString) =>
                  onDataPick(date, dateString, "DOB")
                }
                value={values.DOB && moment(values.DOB, "YYYY-mm-dd")}
                //defaultValue={values.DOB}
                name="DOB"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Nationality*"
            validateStatus={
              touched.Nationality && errors.Nationality && "error"
            }
            help={touched.Nationality && errors && errors.Nationality}
          >
            <Select
              onChange={handleSelectChange}
              placeholder="select your country"
              value={values.Nationality}
            >
              {countryList.map(country => (
                <Option name="Nationality" value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
        <FormFooter
          isLoading={isLoading}
          previousButtonAction={displayPreviousForm}
          hasPreviousButton
          action={handleSubmit}
          width="100%"
          actionText="Next"
        />
      </FormWrapperStyle>
    </StyleRoot>
  );
};

export default BasicFormView;
