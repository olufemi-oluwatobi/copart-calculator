import React, { useState } from "react";
import FormFooter from "../formFooter";
import moment from "moment";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Form, Input, Button, Select, Radio, Table } from "antd";
import { Formik } from "formik";
import AnimateForm from "./animateOnDisplay";
import { basicFormValidationSchema } from "./validationSchemas";
import { FormWrapperStyle } from "../../style";

const { Option } = Select;
const { Item } = Form;
const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const DocumentForms = (props) => {
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

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleMultipleSelect = (value, node, index) => {
    const {
      props: { name },
    } = node;

    const valueArray = values[name].split(",").filter((val) => val.length > 0);
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
  const handleInputChange = (e) => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };
  const columns = [
    {
      title: "File Name",
      dataIndex: "FileName",
    },
    {
      title: "Document type",
      dataIndex: "DocumentType",
    },
  ];
  return (
    <StyleRoot>
      <FormWrapperStyle style={styles.bounce}>
        <AnimateForm>
          <Form layout="vertical">
            <Item label="Document Type" />

            <Item>
              <Radio.Group>
                <Radio value={1}>Curriculum Vitae</Radio>
                <Radio value={2}>Others(optional)</Radio>
              </Radio.Group>{" "}
            </Item>

            <Item label="Type of Degree">
              <Input
                onChange={handleInputChange}
                name={`document type`}
                placeholder="enter document type"
              />
            </Item>
            <Item
              label="File"
              validateStatus={
                touched.PostalAddress && errors.PostalAddress && "error"
              }
              help={touched.PostalAddress && errors && errors.PostalAddress}
            >
              <Input
                onChange={handleInputChange}
                name="File"
                type={"file"}
                placeholder="Enter your postal address"
              />
            </Item>
            <Item style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button className={"upload_button"}>Upload Document</Button>
            </Item>
            <Item>
              <Table
                columns={columns}
                pagination={false}
                dataSource={[{ FileName: "no document has been uploaded yet" }]}
              />
            </Item>
          </Form>
        </AnimateForm>
        <FormFooter
          isLoading={isLoading}
          previousButtonAction={displayPreviousForm}
          hasPreviousButton
          action={handleSubmit}
          width="100%"
          actionText="Save and Continue"
        />
      </FormWrapperStyle>
    </StyleRoot>
  );
};

const DocumentFormView = ({
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
          validationSchema={basicFormValidationSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <DocumentForms
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
export default DocumentFormView;
