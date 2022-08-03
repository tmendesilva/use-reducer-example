export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'tiago' && password === '123') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
