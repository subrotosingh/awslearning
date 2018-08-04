// Describing EC2 Key Pairs
//Load the aws sdk
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');
// Set the region 
AWS.config.update({ region: 'us-east-1' });
//Create EC2 Object
var ec2 = new AWS.EC2({ apiVersion: '2018-08-01' });

//Retrieve key pair descriptions
ec2.describeKeyPairs(function (err, data) {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("Success", JSON.stringify(data.KeyPairs))
    }
});

