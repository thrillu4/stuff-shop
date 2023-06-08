import { useDispatch, useSelector } from "react-redux";
import UserSignUpForm from "./UserSignUpForm";
import UserLoginForm from "./UserLoginForm";

import s from "../../styles/User.module.css";
import { toggleFormType, toggleForm } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={s.overlay} onClick={closeForm}></div>
      {formType === "signup" ? (
        <UserSignUpForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
