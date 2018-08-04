// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');
// Set the region 
AWS.config.update({ region: 'us-east-2' });

// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

var params = {
    DryRun: false
};

// Retrieves all regions/endpoints that work with EC2
ec2.describeRegions(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Regions: ", data.Regions);
    }
});
