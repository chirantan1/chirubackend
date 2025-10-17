require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
}) 
const githubData = {
  "login": "chirantan1",
  "id": 97895958,
  "node_id": "U_kgDOBdXGFg",
  "avatar_url": "https://avatars.githubusercontent.com/u/97895958?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chirantan1",
  "html_url": "https://github.com/chirantan1",
  "followers_url": "https://api.github.com/users/chirantan1/followers",
  "following_url": "https://api.github.com/users/chirantan1/following{/other_user}",
  "gists_url": "https://api.github.com/users/chirantan1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chirantan1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chirantan1/subscriptions",
  "organizations_url": "https://api.github.com/users/chirantan1/orgs",
  "repos_url": "https://api.github.com/users/chirantan1/repos",
  "events_url": "https://api.github.com/users/chirantan1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chirantan1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chirantan Jana",
  "company": null,
  "blog": "https://github.com/settings/profile",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "ChirantanJana12",
  "public_repos": 18,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2022-01-17T14:06:54Z",
  "updated_at": "2025-10-15T04:38:33Z"
};
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.get('/login',(req,res)=>{
    res.send('<h1>Pelease login at chai or code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>Welcome to youtube</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
