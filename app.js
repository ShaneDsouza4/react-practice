//Create Element
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello Redd"
);

//Explore the Element
console.log(heading);

//Create Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render Heading
root.render(heading);