export const validateCredentials = (email, password, userData) => {
  // Check for admin
  if (email === "admin@example.com" && password === "12345678") {
    return {
      isValid: true,
      role: "admin",
      data: null
    }
  }

  // Check for employee
  const employee = userData?.find(emp => emp.email === email && emp.password === password)
  if (employee) {
    return {
      isValid: true,
      role: "employee",
      data: employee
    }
  }

  return {
    isValid: false,
    role: null,
    data: null
  }
}