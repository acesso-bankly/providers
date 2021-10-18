const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3320;

app.use(cors());

// commons components
app.use(
  "/commons/components",
  express.static(__dirname + "/commons/components.yaml")
);

// documents api
app.use(
  "/documents/schema",
  express.static(__dirname + "/apis/v1/documents/schema.yaml")
);

// holders api
app.use(
  "/holders/schema",
  express.static(__dirname + "/apis/v1/holders/schema.yaml")
);

// accounts api
app.use(
  "/accounts/schema",
  express.static(__dirname + "/apis/v1/accounts/schema.yaml")
);

// cards api
app.use(
  "/cards/schema",
  express.static(__dirname + "/apis/v1/cards/schema.yaml")
);

var options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: "/documents/schema",
        name: "Documents",
      },
      {
        url: "/holders/schema",
        name: "Holders",
      },
      {
        url: "/accounts/schema",
        name: "Accounts",
      },
      {
        url: "/cards/schema",
        name: "Cards",
      },
    ],
  },
};

app.use("/reference", swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(port, () => {
  console.log(`Bankly's Open Api Reference Server listening at http://localhost:${port}`);
});
