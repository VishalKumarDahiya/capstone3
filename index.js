import express from "express";
import bodyParser from "body-parser"


const app=express();
const port=3000;
const blogs=[];


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("index.ejs", {blogs:blogs});

});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
});


app.get("/about",(req,res)=>{
    res.render("about.ejs")
});


app.get("/create",(req,res)=>{
    res.render("create.ejs")
});

app.post("/create",(req,res)=>{
    blogs.push(req.body);
    res.redirect("/")
});

app.post("/delete",(req,res)=>{
    blogs.splice(req.body.id,1);
    res.redirect("/")

});

app.post("/edit",(req,res)=>{
    const data ={
        blog:blogs[req.body.id],
        id:req.body.id
    }
    res.render("edit.ejs",data);
    // console.log(req.body);

});

app.post("/update",(req,res)=>{
    blogs[req.body.id].Heading=req.body.Heading;
    blogs[req.body.id].Content=req.body.Content;
    res.redirect("/");
});

app.listen(port, (req,res)=>{
    console.log(`server is running on ${port}`);
});