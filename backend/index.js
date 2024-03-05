import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is ready")
})

const port = process.env.PORT || 46000;

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "A Joke",
          content: "This is a joke"
        },
        {
          id: 2,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        },
        {
          id: 3,
          title: "What did the grape say when it got stepped on?",
          content: "Nothing, it just let out a little wine."
        },
        {
          id: 4,
          title: "Why couldn't the bicycle stand up by itself?",
          content: "It was two-tired."
        },
        {
          id: 5,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field."
        },
        {
          id: 6,
          title: "What's orange and sounds like a parrot?",
          content: "A carrot!"
        }
      ];

      res.send(jokes);
      
})

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})