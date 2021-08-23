function* helloWorld () {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
}

export {
    helloWorld
}