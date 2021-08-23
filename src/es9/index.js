const helloWorld = (truthyResult = true) => {
  return new Promise((resolve, reject) => {
    truthyResult
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("🛑 Something was Wrong!"));
  });
};

export { helloWorld };
