const users = [
  {
    username: 'johnsmith',
    password: 'password123',
    createdAt: new Date().toISOString()
  }
];

function findUser(username) {
  return Promise.resolve(users.find((user) => user.username === username));
}

function createUser({ username, password }) {
  const existing = users.find((user) => user.username === username);
  if (existing) {
    return Promise.reject(new Error('User already exists'));
  }
  const newUser = { username, password, createdAt: new Date().toISOString() };
  users.push(newUser);
  return Promise.resolve(newUser);
}

module.exports = {
  users,
  findUser,
  createUser
};
