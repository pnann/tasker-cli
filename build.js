addTask("default", (results, done) => {
    console.log("Hello world");
    setTimeout(() => {
        done();
    }, 5000);
});