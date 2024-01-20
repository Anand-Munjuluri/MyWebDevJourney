  //create h1 tag with createElement
const parent = React.createElement("div", {id:"parent"},[
React.createElement("div", {id:"child"},[
  React.createElement("h1",{},"I am h1"),
  React.createElement("h1",{},"I am a h2 tag")
])
],
[React.createElement("div", {id:"child2"},[
  React.createElement("h1",{},"I am h1"),
  React.createElement("h1",{},"I am a h2 tag")
])
])
  //create root
  const root = ReactDOM.createRoot(document.getElementById('root'));

  //render the heading into html
  root.render(parent);