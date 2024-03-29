const SignupReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "CONFPASS":
      return { ...state, confirmPassword: action.payload };
    default:
      throw new Error("Action type not found");
  }
};

export default SignupReducer;
