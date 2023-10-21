const Parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am a h1 tag"), 
    React.createElement("h2",{},"I am a h2 tag"),
]),

  React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am a h1 tag"), 
    React.createElement("h2",{},"I am a h2 tag"),
    ]),
]);  

/*this all looks ugly and hard to read,this is core react,
 but jsx can make our life easy when dealing with tags in react*/
 
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(Parent); 