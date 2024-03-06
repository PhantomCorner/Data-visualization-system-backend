// server.js
const express = require('express')
const cors=require('cors')
// create server
const app = express()
// import mongodb function
const {User}=require('./model')
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
            "avatar": "https://www.waikato.ac.nz/__data/assets/image/0003/661710/Vertical,-full-colour-logo,-on-white-background-1.jpg",
            "name": "Testing"
        }
    })
  })
app.post('/vue-admin-template/user/logout', async (req, res)=>{
    res.send({
        code:20000,
        data:'success'
    })
})
app.post('/vue-admin-template/user/register', async (req, res)=>{
    const isDuplicate = await User.findOne({
        username: "Not duplicate"
      })
    if (isDuplicate) {
        res.send({
            code:422,
            message: 'Duplicate User!'
        })
    }else{
        const user = await User.create({
            username: "Not duplicate",
            password: "12345"
          })
          res.send({
            code:20000,
            message:'Register Success',
            data:user
        })
    }

})
app.listen(9528, () => {
  console.log('http://localhost:9528')
})

