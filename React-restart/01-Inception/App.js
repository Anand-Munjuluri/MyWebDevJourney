  //create h1 tag with createElement
  const heading = React.createElement('h1',{
    id: "main-heading",
    xyz: "abc" //attributes to h1 tag
  },"Hello world from React");

  //create root
  const root = ReactDOM.createRoot(document.getElementById('root'));

  //render the heading into html
  root.render(heading);