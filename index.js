
require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT
const axios = require("axios");

const githubData= 
 { "login": "smritipatel0338",
  "id": 234890962,
  "node_id": "U_kgDODgAm0g",
  "avatar_url": "https://avatars.githubusercontent.com/u/234890962?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/smritipatel0338",
  "html_url": "https://github.com/smritipatel0338",
  "followers_url": "https://api.github.com/users/smritipatel0338/followers",
  "following_url": "https://api.github.com/users/smritipatel0338/following{/other_user}",
  "gists_url": "https://api.github.com/users/smritipatel0338/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/smritipatel0338/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/smritipatel0338/subscriptions",
  "organizations_url": "https://api.github.com/users/smritipatel0338/orgs",
  "repos_url": "https://api.github.com/users/smritipatel0338/repos",
  "events_url": "https://api.github.com/users/smritipatel0338/events{/privacy}",
  "received_events_url": "https://api.github.com/users/smritipatel0338/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SMRITI PATEL",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "ABES ENGINEERING COLLEGE\r\n(2025-2026)",
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-09-28T07:30:14Z",
  "updated_at": "2026-10-30T12:02:21Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('HELLO ARYAN')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
//hot reloading 