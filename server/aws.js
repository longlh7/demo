const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const fs = require('fs');

const params = {
   Bucket: 'www.pictures.counter.com',
   Key: 'text.txt',
}

s3.getObject(params, (err, data) => {
   if (err) console.log(err, err.stack)
   else {
      console.log(data.Body.toString('utf-8'))
   }
})
