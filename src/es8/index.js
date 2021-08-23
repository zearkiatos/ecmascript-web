const helloWorld = (truthyResult = true) => {
  return new Promise((resolve, reject) => {
    truthyResult
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("🛑 Something was Wrong!"));
  });
};

const helloAsync = async (truthyResult) => {
  const hello = await helloWorld(truthyResult);
  return hello;
};

const anotherAsyncFunction = async (truthyResult) => {
  try {
    const hello = await helloWorld(truthyResult);
    return hello;
  } catch (exception) {
    throw exception;
  }
};

export { helloAsync, anotherAsyncFunction };
