import CardComponent from "./components/CardComponent";

function App() {
    const people = [
        {
            name: "Bertie Yates",
            age: 29,
            img: "https://www.course-api.com/images/people/person-1.jpeg",
        },
        {
            name: "Hester Hogan",
            age: 32,
            img: "https://www.course-api.com/images/people/person-2.jpeg",
        },
        {
            name: "Larry Little",
            age: 36,
            img: "https://www.course-api.com/images/people/person-3.jpeg",
        },
        {
            name: "Sean Walsh",
            age: 34,
            img: "https://www.course-api.com/images/people/person-4.jpeg",
        },
        {
            name: "Lola Gardner",
            age: 29,
            img: "https://www.course-api.com/images/people/person-5.jpeg",
        },
    ];
    return (
        <div id="App">
            {/* Container component*/}
            <div className="Container">
                <h1>5 Birthdays Today</h1>
                {/* Card component */}
                {people.map((person) => (
                    <CardComponent person={person} />
                ))}
                <button>Clear all</button>
            </div>
        </div>
    );
}

export default App;
