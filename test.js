var jigs = require("jigsaw");

var builder = new jigs.Builder(process.cwd());

builder.load() // Load and then build
    .then(function () {
    console.log("Running build tasks and templates...");
    // run builder
    return builder.build();
})
    .then(function () { return console.log("done!"); })
    .catch(console.log);
