// authService.jsx

// Simulated user data (for demonstration purposes)
let currentUser = null;

// Simulated database (for demonstration purposes)
const users = [];

// Function to simulate registration
async function register(email, name, password, gender) {
  // Simulate API call or database interaction
  const newUser = { email, name, password, gender };
  users.push(newUser);
  console.log('User registered:', newUser);
}

// Function to simulate login
async function login(email, password) {
  // Simulate API call or database interaction
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    console.log('User logged in:', currentUser);
    return true; // Successful login
  }
  return false; // Invalid credentials
}

// Function to simulate logout
async function logout() {
  currentUser = null;
  console.log('User logged out');
}

// Function to check if a user is logged in
function isLoggedIn() {
  return currentUser !== null;
}

// Function to get the current logged-in user
function getCurrentUser() {
  return currentUser;
}

// Export the functions for use in other parts of the application
export { register, login, logout, isLoggedIn, getCurrentUser };
