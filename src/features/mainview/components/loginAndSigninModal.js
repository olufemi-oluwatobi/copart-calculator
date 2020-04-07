import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ModalComponent from "../../../components/modal";
import styled from "styled-components";
import { Input, Checkbox, Icon } from "antd";
import { ButtonStyle } from "../../style";
import update from "immutability-helper";
import { regexTest } from "../../../helpers/utils";
import { ConfigContext } from "../../../config/configContext";
import qs from "qs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const FlexColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${props => props.marginTop || "0px"};
`;

const FlexRowStyle = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent}
  margin-left: ${props => props.marginLeft}
  margin-top: ${props => props.marginTop || "0px"}
  width: 100%;
`;

const LeftSideWrapper = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
width: 100%;
height: 100%
align-items: left;
`;
const MainText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #162828;
`;

const SubText = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #162828;
`;
const InputLabel = styled.label`
  font-family: Univers for KPMG;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;

const MainWrapper = styled.div`
  .ant-modal-body {
    padding: 0px;
  }
`;
const ErrorStyle = styled.span`
  text-align: left;
  color: red;
`;
const TermsStyle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  display: flex;
  align-items: center;
  margin-top: 10px;

  /* Gray 5 */

  color: rgba(22, 40, 40, 0.6);
`;

const Modal = ModalComponent;

const LoginActionModal = ({ switchModal }) => {
  const [fields, setSigninFields] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (name, value) => {
    setSigninFields(
      update(fields, {
        [name]: {
          $set: value
        }
      })
    );
  };

  const appendError = (key, value) => {
    setErrors(
      update(errors, {
        [key]: {
          $set: value
        }
      })
    );
  };
  const verify = () => {
    let error = {};
    if (fields["Email"].length === 0) {
      error["email"] = "please enter your email";
    }
    if (fields["Password"].length === 0) {
      error["password"] = "please enter your password";
    }
    setErrors(error);
    return error;
  };

  const handleLogin = login => {
    const err = verify();
    const errorKeys = Object.keys(err);
    if (errorKeys.length === 0) {
      login({
        username: fields.Email,
        password: fields.Password
      });
    }
  };

  return (
    <ConfigContext.Consumer>
      {({ loginUser, isLoading, error }) => (
        <LeftSideWrapper>
          <FlexColumnStyle>
            <MainText>Account login</MainText>
            <SubText>Login to your account</SubText>
          </FlexColumnStyle>
          <FlexColumnStyle marginTop={"15px"}>
            <InputLabel>Email</InputLabel>
            <Input
              required
              name="Email"
              onChange={e => onInputChange(e.target.name, e.target.value)}
              style={{ background: "#F2F2F2" }}
              placeholder="enter your email address"
            />
            <ErrorStyle>{errors.email}</ErrorStyle>
          </FlexColumnStyle>
          <FlexColumnStyle marginTop={"15px"}>
            <InputLabel>Password</InputLabel>
            <Input
              required
              name="Password"
              onChange={e => onInputChange(e.target.name, e.target.value)}
              style={{ background: "#F2F2F2" }}
              type="password"
              placeholder="enter your password"
            />
            <ErrorStyle>{errors.password}</ErrorStyle>
          </FlexColumnStyle>
          <FlexRowStyle marginTop={"5px"} justifyContent="space-between">
            <FlexRowStyle>
              <Checkbox />{" "}
              <span style={{ marginLeft: "2px" }}> Remember me</span>
            </FlexRowStyle>
            <span>Forgot password? </span>
          </FlexRowStyle>
          <div style={{ marginTop: "10px" }} />
          <ButtonStyle
            onClick={() => handleLogin(loginUser)}
            padding="7px"
            color="white"
            background="#00A3A1"
          >
            {isLoading ? <Icon type="loading" /> : "Login"}
          </ButtonStyle>
          <FlexRowStyle marginTop={"10px"}>
            <span>Don't have an account?</span>
            <span
              style={{ color: "#00A3A1", cursor: "pointer" }}
              onClick={() => switchModal("signup")}
            >
              Sign up
            </span>
          </FlexRowStyle>{" "}
        </LeftSideWrapper>
      )}
    </ConfigContext.Consumer>
  );
};

const SigninActionModal = props => {
  const [fields, setRegistrationFields] = useState({});
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const logonUser = (fields, register) => {
    register(fields, history.push);
  };

  const onInputChange = (name, value) => {
    setRegistrationFields(
      update(fields, {
        [name]: {
          $set: value
        }
      })
    );
  };

  const appendError = (key, value) => {
    setErrors(
      update(errors, {
        [key]: {
          $set: value
        }
      })
    );
  };
  const handleBlur = type => {
    const errors = {};
    if (type === "email") {
      const error = regexTest(
        fields.Email,
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!error) {
        errors["email"] = "Invalid email";
      }
    }
    if (type === "password") {
      const error = regexTest(
        fields.Password,
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      );
      if (!error) {
        errors["password"] =
          "Password must contain atleast eight characters, one uppercase and one symbol";
      }
    }
    if (type === "confirmPassword") {
      const isCorrect = fields.Password === fields.ConfirmPassword;
      console.log(isCorrect, type);
      if (!isCorrect) {
        errors[type] = "incorrect password";
      }
    }
    setErrors(errors);
  };

  return (
    <ConfigContext.Consumer>
      {({ registerUser, googleAuthentication, isLoading }) => (
        <LeftSideWrapper>
          <FlexColumnStyle>
            <MainText>Account Sign Up</MainText>
            <SubText>Create an account</SubText>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px"
              }}
            >
              <span className="share">Sign up with</span>
              <div style={{ display: "flex" }}>
                {["facebook_blue", "google_red"].map(text => (
                  <img
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                      marginTop: "10px"
                    }}
                    onClick={() =>
                      text === "google_red" ? googleAuthentication() : null
                    }
                    src={
                      require(`../../../assets/images/${text}.svg`) /*require(`../../assets/images/${text}.svg`)*/
                    }
                  />
                ))}
              </div>
            </div>
          </FlexColumnStyle>
          <FlexColumnStyle marginTop={"15px"}>
            <InputLabel>Email</InputLabel>
            <Input
              onBlur={() => handleBlur("email")}
              name="Email"
              onChange={e => onInputChange(e.target.name, e.target.value)}
              style={{ background: "#F2F2F2" }}
              placeholder="enter your email address"
            />
            <ErrorStyle>{errors.email}</ErrorStyle>
          </FlexColumnStyle>
          <FlexColumnStyle marginTop={"15px"}>
            <InputLabel>Password</InputLabel>
            <Input
              onBlur={() => handleBlur("password")}
              name="Password"
              onChange={e => onInputChange(e.target.name, e.target.value)}
              style={{ background: "#F2F2F2" }}
              type="password"
              placeholder="enter your password"
            />
            <ErrorStyle>{errors.password}</ErrorStyle>
          </FlexColumnStyle>
          <FlexColumnStyle marginTop={"15px"}>
            <InputLabel>Confirm Password</InputLabel>
            <Input
              name="ConfirmPassword"
              onBlur={() => handleBlur("confirmPassword")}
              onChange={e => onInputChange(e.target.name, e.target.value)}
              style={{ background: "#F2F2F2" }}
              type="password"
              placeholder="enter your password"
            />
            <ErrorStyle>{errors.confirmPassword}</ErrorStyle>
          </FlexColumnStyle>
          <FlexRowStyle marginTop={"10px"}>
            <TermsStyle>
              By creating an account on the “Avature” platform, you agree to the
              terms and policies of KPMG Nigeria{" "}
            </TermsStyle>
          </FlexRowStyle>
          <div style={{ marginTop: "10px" }} />
          <FlexRowStyle marginTop={"10px"}>
            <ButtonStyle
              onClick={() => logonUser(fields, registerUser)}
              padding="7px"
              color="white"
              background="#00A3A1"
            >
              {isLoading ? <Icon type="loading" /> : "Sign up"}
            </ButtonStyle>
          </FlexRowStyle>
        </LeftSideWrapper>
      )}
    </ConfigContext.Consumer>
  );
};
const SigninAndLoginModal = ({
  visible,
  modalType,
  close,
  switchModal,
  userData
}) => {
  return (
    <MainWrapper>
      <Modal
        visible={visible}
        width={831}
        style={{ top: window.screen.width && 2 }}
      >
        <Wrapper>
          {window.screen.width > 800 && (
            <img
              style={{ width: "50%", height: "100%" }}
              src={require("../../../assets/images/Side_image.svg")}
            />
          )}
          <div
            style={{
              width: window.screen.width > 800 ? "50%" : "100%",
              height: window.screen.width > 800 ? "100%" : "70%"
            }}
          >
            <FlexRowStyle marginTop="10px" justifyContent={"right"}>
              <span
                style={{
                  width: "100%",
                  marginRight: "20px",
                  marginTop: "10px",
                  textAlign: "right",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() => close()}
              >
                X
              </span>
            </FlexRowStyle>
            {modalType && modalType === "login" ? (
              <LoginActionModal switchModal={switchModal} />
            ) : (
              <SigninActionModal />
            )}
          </div>
        </Wrapper>
      </Modal>
    </MainWrapper>
  );
};
export default SigninAndLoginModal;
