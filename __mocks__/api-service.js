export const signup = (username, password) => {
  if (!username || !password) {
    return {
      success: false,
      msg: "Username or Password required!",
    };
  }

  if (localStorage.getItem(username)) {
    return {
      success: false,
      msg: "Username already exists!",
    };
  }

  if (password.length < 8) {
    return {
      success: false,
      msg: "Password should have alteast 8 characters.",
    };
  }

  const pattern = /^[A-Za-z]\w{7,14}$/;
  if (pattern.test(password)) {
    return {
      success: false,
      msg: "Password must contain alphanumeric characters.",
    };
  }

  localStorage.setItem(username, btoa(password));

  return {
    success: true,
    msg: "User created successfully!",
  };
};

export const signin = (username, password) => {
  if (!username || !password) {
    return {
      success: false,
      msg: "Username or Password required!",
    };
  }

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    return {
      success: false,
      msg: "Username does not exists!",
    };
  }

  if (storedPassword !== btoa(password)) {
    return {
      success: false,
      msg: "Invalid credentials!",
    };
  }

  return {
    success: true,
    msg: "Login successful!",
  };
};
