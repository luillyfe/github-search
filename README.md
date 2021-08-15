# Github User Search

Re-implements a portion of the GitHub's Search feature, the user search.

## As a user

- I can search for users and see a paginates list of results.
- I can navigate through the next and previous pages of the paginates results.
- I see the total count of search results.
- I see notable information for each search result, such as the description, start/follower, count, profile pictures
- I can select a search result and be taken to the applicable page on github.com API

## What to look for (IOC)

- The infrastructure deployment was built using Google deployment-manager has
    - HTTPS load balancer
    - Google Front-end service
    - SSL Certificate
    - Google DNS service
    - Web bucket (public access)

## How to deploy to Google Cloud

- **yarn build**
- **gcloud rsync -R build gs://`${yourBucketName}`**

> For this case the value of yourBucketName will be 'luillyfe''

- gcloud compute url-maps invalidate-cdn-cache web-application-lb --path "/*"

> To invalidate cache

