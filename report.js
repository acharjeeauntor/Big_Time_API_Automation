const newman = require("newman");

newman.run(
  {
    collection: require("./collection/collection.json"),
    environment: require("./collection/env.json"),
    iterationCount: 1,
    reporters: ["cli", "htmlextra"],
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("Collection run complete!");
  }
);
