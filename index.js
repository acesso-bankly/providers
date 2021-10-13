const express = require('express');
const cors = require('cors');
const app = express();
const port = 23000;

console.log(__dirname);

app.use(cors())
app.use('/components', express.static(__dirname + '/commons/components/schema.yaml'));
app.use('/examples', express.static(__dirname + '/commons/examples/schema.yaml'));
app.use('/document-analysis', express.static(__dirname + '/apis/v1/document-analysis/schema.yaml'));
app.use('/holders', express.static(__dirname + '/apis/v1/holders/schema.yaml'));
app.use('/accounts', express.static(__dirname + '/apis/v1/accounts/schema.yaml'));


app.listen(port, () => {
    console.log(`OAS Server listening at http://localhost:${port}`)
});