import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send("初始化成功！")
})

app.listen("8888", () => {
    console.log("服务开启在http://127.0.0.1:8888");
})

