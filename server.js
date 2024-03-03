// server.js
const express = require('express')
const cors=require('cors')
// create server
const app = express()
app.use(cors())
const tokens = {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
  }
  
app.post('/vue-admin-template/user/login', async (req, res) => {
    const token=tokens['admin']
  res.send({code:20000,data:token})
})
app.get('/vue-admin-template/user/info', async (req, res) => {
    res.send({
        "code": 20000,
        "data": {
            "roles": [
                "admin"
            ],
            "introduction": "I am a super administrator",
            "avatar": "https://p.qqan.com/up/2022-2/16449044357775511.jpg",
            "name": "Admin"
        }
    })
  })
app.post('/vue-admin-template/user/logout', async (req, res)=>{
    res.send({
        code:20000,
        data:'success'
    })
})
app.listen(9528, () => {
  console.log('http://localhost:9528')
})

