import React, { useRef, useEffect } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Form, Input, DatePicker, Select } from "antd";
import { Formik } from "formik";
import { basicFormValidationSchema } from "./validationSchema";
import { FormWrapperStyle } from "./style";

const { Option } = Select;

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const InfoForms = (props) => {
  const buttonRef = useRef();
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    displayPreviousForm,
  } = props;
  useEffect(() => {
    const hasBeenTouched = Object.values(touched).filter(
      (isTouched) => isTouched
    );
    if (isValid && hasBeenTouched.length === 3) {
      console.log(isValid);
      buttonRef.current.click();
    }
  }, [isValid]);
  const handleSelectChange = (value, option) => {
    const {
      props: { name },
    } = option;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);

    //const keysWithValues = Object.values(values).filter((value) => value);
  };
  console.log(values);

  return (
    <StyleRoot>
      <FormWrapperStyle style={styles.bounce}>
        <Form layout="vertical">
          <Form.Item
            label="Membership Type"
            validateStatus={
              touched.membershipType && errors.membershipType && "error"
            }
            help={touched.membershipType && errors && errors.membershipType}
          >
            <Select
              placeholder="select your membership type"
              onSelect={handleSelectChange}
            >
              {["Business", "Consumer", "High-volume", "Low-volume"].map(
                (type) => (
                  <Option value={type} name="membershipType">
                    {type}
                  </Option>
                )
              )}
            </Select>
          </Form.Item>
          <Form.Item
            label="Means of Payment"
            validateStatus={
              touched.meansOfPayment && errors.meansOfPayment && "error"
            }
            help={touched.meansOfPayment && errors && errors.meansOfPayment}
          >
            <Select
              placeholder="select your means of payment"
              onSelect={handleSelectChange}
            >
              {[
                "Money Order",
                "Wire Transfer",
                "ePay",
                "Cash",
                "Available Funds",
                "Cashier's Check",
                "Company Check",
                "Third Party Financing",
                "Credit Card",
                "Debit Card",
                "CHAPS Transfer",
                "Faster Payments",
                "Payment by BACS Bank Transfer",
                "Payment by International Bank Transfer",
                "Money Mover",
                "Debit(UK)",
              ].map((type) => (
                <Option value={type} name="meansOfPayment">
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Location"
            validateStatus={touched.location && errors.location && "error"}
            help={touched.location && errors && errors.location}
          >
            <Select
              placeholder="select your location"
              onChange={handleSelectChange}
            >
              {["US", "Canada", "UK"].map((location) => (
                <Option value={location} name={`location`}>
                  {location}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
            ref={buttonRef}
            hidden
          ></div>
        </Form>
      </FormWrapperStyle>
    </StyleRoot>
  );
};

const InfoFormView = ({
  initialValues,
  onSubmit,
  displayPreviousForm,
  isLoading,
  ...rest
}) => {
  return (
    <StyleRoot>
      <React.Fragment>
        <Formik
          enableReinitialize={false}
          initialValues={initialValues}
          validationSchema={basicFormValidationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            return <InfoForms {...rest} {...props} />;
          }}
        </Formik>
      </React.Fragment>
    </StyleRoot>
  );
};
export default InfoFormView;
