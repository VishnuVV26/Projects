const express=require('express');
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors())
const Users=[
  {
  Id:1,
    Name:"Vishnu",
    Age:22,
    Salary:15000
  },
   {
  Id:2,
    Name:"Ravi",
    Age:24,
    Salary:20000
  },
   {
  Id:3,
    Name:"Karthi",
    Age:22,
    Salary:23000
  },
  {
    Id:4,
      Name:'Raj',
      Age:25,
      Salary:30000
  }
  
]

app.get("/Users",(req,res)=>
{
  res.send(Users);
})

const PORT = 8081;
app.listen(PORT, (err) => {
    if(err)
    {
        console.log(err);
    }
  console.log(`Server is running on port ${PORT}.`);
});