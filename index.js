import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogs = [
    { name: "Sarah Thompson", blog: "As a travel enthusiast, I’ve been documenting my journeys around the world for the past decade. My blog covers everything from hidden gems in popular cities to tips on budget travel and cultural experiences. It’s been a wonderful way to share my adventures and connect with fellow travelers." },
    { name: "Michael Brown", blog: "Fitness and wellness are my passions. On my blog, I share workout routines, healthy recipes, and motivational tips to help people lead healthier lives. It’s been rewarding to see how my content inspires others to stay active and take care of their well-being." },
    { name: "Emily Johnson", blog: "My blog is all about personal development and productivity. I write about goal setting, time management, and ways to boost creativity. It’s a space where I explore different strategies to help people achieve their full potential and live more fulfilling lives." },
    { name: "David Smith", blog: "Tech and gadgets are my main interests. I review the latest tech products, share coding tutorials, and discuss trends in the tech industry. My blog is a hub for tech enthusiasts who want to stay updated and learn new skills in the ever-evolving tech world." }
];
  

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render("index.ejs",{ 
        blogs : blogs,
    })
});

app.get("/write",(req,res)=>{
    res.render("form.ejs")
})

app.post("/post",(req,res)=>{
    blogs.push({name : req.body.name, blog :req.body.blog})
    res.redirect("/")
})

app.listen(port,()=>{
    console.log(`Server Running on port: ${port}`);
});