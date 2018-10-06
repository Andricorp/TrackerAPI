// const Diary = require('./db/connect')

// const initDb = require('./db/model')
// initDb()
// const data = require("./db/model").data.fillDB;
// data();

const express = require("express");
const cors = require("cors");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

const Track = require("./db/model").data.Track;
const Trip = require("./db/model").data.Trip;
const Photo = require("./db/model").data.Photo;


{
// GraphQL schema
{
var schema = buildSchema(`
    type TrackQuery {
        getTrackById(_id: String!): Track
    }
    type AllTrackQuery {
        getTracks(file: String!): [Track]
    }


    type Mutation {
        createTrack(file: String!): Track
    }
    


    type Track {
        file: String
    }
    type Trip {
        description: String
    }
    type Photo {
        description: String
    }
`);




/* 


    type TripQuery {
        getTripById(_id: String!): Trip
    }
    type AllTripQuery {
        getTrips(desc: String!): [Trip]
    }

    type PhotoQuery {
        getPhotoById(_id: String!): Photo
    }
    type AllPhotoQuery {
        getPhotos(desc: String!): [Photo]
    }
type TripMutation {
        createTrip(desc: String!): Trip
    }
    type PhotoMutation {
        createPhoto(desc: String!): Photo
    }
*/

}

async function getTracks({}) {
  let listOfTracks = await Track.find({});
  console.log(listOfTracks);
  return listOfTracks;
}

async function getTrackById({ _id }) {
  let tracks = await Track.findOne({ _id });
  console.log(tracks);
  return tracks;
}

async function createTrack(params) {
  let newTrack = await new Track(params).save();
  console.log(newTrack);
  return newTrack;
}

{
async function getTrips({}) {
    let listOfTrip = await Trip.find({});
    console.log(listOfTrip);
    return listOfTrip;
  }
  
  async function getTripById({ _id }) {
    let trip = await Trip.findOne({ _id });
    console.log(trip);
    return trip;
  }
  
  async function createTrip(params) {
    let newTrip = await new Trip(params).save();
    console.log(newTrip);
    return newTrip;
  }

//
  async function getPhotos({}) {
    let listOfPhotos = await Photo.find({});
    console.log(listOfPhotos);
    return listOfPhotos;
  }
  
  async function getPhotoById({ _id }) {
    let photo = await Photo.findOne({ _id });
    console.log(photo);
    return photo;
  }
  
  async function createPhoto(params) {
    let newPhoto = await new Photo(params).save();
    console.log(newPhoto);
    return newPhoto;
  }
}
// Root resolver

var root = {
  getTrackById,
  getTracks,
//   TrackMutation:createTrack,
  createTrack,
//   getPhotoById,
//   getPhotos,
//   createPhoto,
//   getTripById,
//   getTrips,
//   createTrip,
};

// Create an express server and a GraphQL endpoint
{
var app = express();
app.use(cors());

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
}
}



// async function getTracks({}) {
//     let listOfTracks = await Track.find({});
//     console.log(listOfTracks);
//     return listOfTracks;
//   }
  
//   async function getTrackById({ _id }) {
//     let tracks = await Track.findOne({ _id });
//     console.log(tracks);
//     return tracks;
//   }
  
//   async function createTrack(params) {
//     let newTrack = await new Track(params).save();
//     console.log(newTrack);
//     return newTrack;
//   }


// app.use(('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }))
app.get('/tracks',



async function(res, req){
    let listOfTracks = await Track.find({});
    console.log(listOfTracks);
    res.send(listOfTracks)
})
// app.get('/track/:track/trip/:trip', function(req ,res){
//     let trip = {
//         name
//     }
// })
app.get('/track/:id', async function(req ,res){
    let _id = req.params.id 
    let currentTrack = await Track.findOne({_id });
        console.log(currentTrack);
    res.send(currentTrack)
})

app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);





///
//
/*
// const db = require('./db');
// console.log(db);
// db.init();

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');









var schema = buildSchema(`
    type Query {
        getPost(id: String!): Post
        getPosts: [Post]
        getComments(id: Int!): [Comment]
        getSubComments(id: Int!): [Comment]
    }
    type Mutation {
        createPost(title: String!, text: String!): Post
        createComment(postID: Int!, text: String!): Post
    }

    type Post {
        id: Int
        title: String
        text:  String
        age:   String
        tagz:  [String]
        comments: [Comment]
        timestamp: Int
        key: String
    }
    type Comment {
        id: Int
        text:  String
        age:   String
        commentId: Int
    }
`);


const Sequelize = require('sequelize');
let blog = require('./db/models')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const cors = require('cors')

// app.use(express.static('public'))

app.use(cors())


// async function getPost({id}){
//     return await Post.findById(id)
//  }
 
 async function getArticle(){
    return await Post.findAll()
 }




 var root = {
    getPost,
    getPosts,
    getPostComments,
    getSubComments,
    createPost,
    createComment,
};



// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));











app.get('/getArticle', async (request, response)=>{
    // request.
    let artList = await blog.db.Article.findAll();
    response.send(artList);
});

app.post('/postArticle', async (request, response)=>{
    let newArticle = 
    await blog.db.Article.create({
        theme : request.body.theme,
        title : request.body.title,
        text : request.body.text
    })
    console.log('body ',request.body)
    response.status(201).send(request.body)
})



// const chatroom = require('./controllers/chatroom');
// const message  = require('./controllers/message');

//ROUTER

// app.get('/getChatRooms/:title', chatroom.last);
// app.get('/getChatRooms', chatroom.all);
// app.get('/getMessages/:chatRoomId/:messageId', message.g );
// app.post('/addMessage/:chatRoomId', message.p)
// app.post('/addchatRoom', chatroom.add)





// app.use(express.static('public'))
// app.use(('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }))




// app.get('/articles', function (req, res) {
//     res.send(articles);
// })

// app.get('/articles/:id', function (req, res) {
//     let articleId = req.params.id;
//     // console.log(articleId);




    // articles.forEach(element => {
    //     if(element.id == articleId){
    //         // return 
    //         console.log(element.id);
    //         // res.send(element.id)
    //     }
    // });



    // let article = {};
    // for(let key of articles){
    //     console.log(key);
    //     if(key.id == articleId){
    //         // return 
    //         // article = key
    //         res.send(key)
    //     }
    // }
    
    
    
    // res.send(article)
    


    // res.send(articles.filter((article)=>{
    //     return articles.id === articleId
    // }));
// })

// app.get('/getByTheme/:theme', (req, res)=>{
//     let FilArticles = articles.filter((article)=>{
//         console.log(article);
//         return article.title == req.params.theme;
//     })
//     // console.log(req);
//     console.log(FilArticles);
//     res.send(FilArticles)
// })

// app.u

app.listen(3030)
*/