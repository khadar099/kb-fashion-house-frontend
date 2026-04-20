register() {
  if (this.password !== this.confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }

  const request = {
    email: this.emailOrMobile,   // OR change variable name to email
    password: this.password,
    mobile: this.mobileNumber
  };

  this.api.register(request).subscribe({
    next: (res) => {
      alert("User registered successfully");
      console.log(res);
    },
    error: (err) => {
      alert("Registration failed");
      console.log(err);
    }
  });
}
