const Person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.occupation),
    ]);
};
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { class: "title" }, "React is rendered.."),
        React.createElement(Person, { name: 'Rajesh', occupation: 'Software engineer' }, null),
        React.createElement(Person, { name: 'Andrei', occupation: 'Lead' }, null),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);