# hello-container

Publish a docker image to GitHub Packages with
[GitHub Actions](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions).

The containerized application is a simple "Hello World" Node.js web application.

## Getting started

Prerequisites: [Docker](https://docs.docker.com/get-docker/)

Get the container 'hello-container' from GitHub Packages and run on your system:

```
docker pull ghcr.io/dmartinezfernandez/hello-container:main
docker run --name hello-container -p 49160:8080 -d ghcr.io/dmartinezfernandez/hello-container:main
```

Then open [localhost:49160](http://localhost:49160) and notice the counter increments
on each refresh.

Remove docker container and image when finished.

```
docker rm hello-container -f
docker image rm ghcr.io/dmartinezfernandez/hello-container:main
```

## Devs

Prerequisites:

- Git
- [Node.js](https://nodejs.org/)
- Your favorite Node.js IDE

Download the code from this repository.

```
git clone https://github.com/dmartinezfernandez/hello-container.git
cd hello-container
```

Install dependencies from `package.json`.

```
npm install
```

Configure environment variable HOST=localhost and run from your IDE.  
Alternatively, on Linux Bash shell:

```
HOST=localhost node index.js
```

Next steps:

- Containerize the app: See `Dockerfile`
  and [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp).
- Publish docker image in GitHub Packages: See `.github\workflows\docker-publish.yaml`
  and [Publishing Docker images](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)
