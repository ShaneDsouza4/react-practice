//Creating a nested div
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",{ id:"child1" },[
            React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag")
        ]),
        React.createElement("div", { id:"child2" },[
            React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag")
        ])
    ]
);

console.log(parent);




//Create Element
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello Redd"
);

//Explore the Element
//console.log(heading);

//Create Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render Heading
//root.render(heading);
root.render(parent);