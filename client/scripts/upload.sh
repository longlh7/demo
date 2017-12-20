echo '------START UPLOADING TO S3------'
# Config
echo -e '\nCONFIG........'

bucket='www.counter.com'
bucketUri='s3://'$bucket
echo 'Bucket:' $bucket

project='/home/ec2-user/workspace/demo/client'
echo 'Project:' $project

# Delete
echo -e '\nCLEAN UP BUCKET........'
aws s3 rm $bucketUri/bundle.js
aws s3 rm $bucketUri/index.html

# Bundle build
echo -e '\nBUNDLE BUILD........'
cd $project
webpack

# Upload
echo -e '\nUPLOAD.........'
aws s3 cp $project/public $bucketUri --recursive
echo '--------------END----------------'
