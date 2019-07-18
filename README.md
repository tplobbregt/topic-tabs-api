<div align="center">
<img src="./icon.svg" alt="Logo"></a>
</div>

<h1 align="center">Topic Tabs API</h1>
<p align="center">
API to fetch image information for [Topic Tabs](https://github.com/tplobbregt/topic-tabs) browser extension.
</p> 
<div align="center">
  
  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/tplobbregt/topic-tabs-api.svg)](https://github.com/tplobbregt/topic-tabs-api/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/tplobbregt/topic-tabs-api.svg)](https://github.com/tplobbregt/topic-tabs-api/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
  
</div>

---

## Table of Contents

- [About](#about)
- [Tools](#tools)
- [TODO](#todo)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Authors](#authors)

<a name = "about"></a>

## About

This API fetches image and photographer information for topics requested from the Topic Tabs browser extension. It serves as a layer of security to store authentication headers and then forwards the request to the Pexels API.


<a name = "tools"></a>

## Tools

- Topic Tabs API
  - [Node.js](https://nodejs.org/en/about/) | JS runtime
  - [Express](https://expressjs.com/) | Server framework
- Deployment
  - [Heroku](https://www.heroku.com/) | SaaS hosting platform for API

- Data
  - [Pexels API](https://www.pexels.com/api/) | Image and photographer information
 
<a name = "todo"></a>

## TODO

- [ ] - Add database to log requests & analyze common topics 

<a name = "getting_started"></a>

## Getting Started
```bash
# Clone repo
git clone https://github.com/tplobbregt/topic-tabs
```
Add your Pexels API key to the api/topic route. Make sure you set an env var on deployment

```bash
# Install dependencies
npm install

# Run the Express server
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000
```

<a name = "deployment"></a>

## Deployment

Learn more about deploying to Heroku [here](https://devcenter.heroku.com/articles/git).

## App Info

<a name = "authors"></a>

### Author

Tyler Lobbregt

### Version

1.0.0

### License

This project is licensed under the MIT License
