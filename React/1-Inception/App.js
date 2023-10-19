const heading= React.createElement("h1",{id: "heading"},"Hello World from React!");
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); 
    //will replace whatever is there in html file, and convert object to tags,and REPLACE heading