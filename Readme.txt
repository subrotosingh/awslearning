Step 1: Configure Your Credentials
We need to provide credentials to AWS so that only your account and its resources are accessed by the SDK.

[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY

Step 2: Create the Package JSON for the Project
After you create the awsnodepoc project directory, you create and add a package.
json file for holding the metadata for your Node.js project.

Step 3: Install the SDK and Dependencies
You install the SDK for JavaScript package using npm (the Node.js package manager).
From the awsnodepoc directory in the package, type the following at the command line.

npm install aws-sdk

This command installs the SDK for JavaScript in your project, and updates package.json to list the SDK as a project dependency.
npm install uuid

Step 4: Write the Node.js Code
Create a new file named sample.js to contain the example code. Begin by adding the require function calls to include the SDK for JavaScript and uuid modules, so they are available for you to use.

Build a unique bucket name that's used to create an Amazon S3 bucket by appending a unique ID value to a recognizable prefix, in this case 'node-sdk-sample-'. You generate the unique ID by calling the uuid module. Then create a name for the Key parameter used to upload an object to the bucket.

Create a promise object to call the createBucket method of the AWS.S3 service object. On a successful response, create the parameters needed to upload text to the newly created bucket. Using another promise, call the putObject method to upload the text object to the bucket.

Step 5: Run the Sample
node sample.js

If the upload is successful, you'll see a confirmation message at the command line. You can also find the bucket and the uploaded text object in the Amazon S3 console.