const express = require('express');
app= express();
const bodyParser = require('body-parser');
app.use(express.json());

const users = [{
    name: 'John',
    kidneys: [{
        healthy: false,
    }]
}];
//get the number of kidneys
app.get('/', function(req, res){
    const johnKidney = users[0].kidneys;
    numberOfKidneys = johnKidney.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0;i<numberOfKidneys;i++){
        if(johnKidney[i].healthy){
            numberOfHealthyKidneys=  numberOfHealthyKidneys+1;
        }
}
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberofUnhealthyKidneys,
        numberOfHealthyKidneys,
        numberOfKidneys
    })
}
);

//add a kidney
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        message: "done!"   
    })
});

//make all kidneys healthy
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "kidneys are healthy now!"
    })
});

//remove unhealthy kidneys
app.delete('/',function(req,res){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
     if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
     }
    }
users[0].kidneys = newKidneys;
    res.json({
        message: "kidney deleted!"
    })
});
app.listen(3000);
