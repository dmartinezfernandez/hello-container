# hello-container

Publish a docker image to GitHub Packages with
[GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions).

## Getting started

Prerequisites: [Docker](https://docs.docker.com/get-docker/)

Get the container `hello-container` from GitHub Packages and run on your system:

```
docker pull ghcr.io/dmartinezfernandez/hello-container:main
docker run --name hello-container -p 49160:8080 -d ghcr.io/dmartinezfernandez/hello-container:main
```

Then open [localhost:49160](http://localhost:49160).

## Learning

- [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)
- [Publishing Docker images](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)