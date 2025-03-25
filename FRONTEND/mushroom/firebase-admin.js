const admin = require('firebase-admin');
const serviceAccount = require('x'); // Replace with your actual service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
