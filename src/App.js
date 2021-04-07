import Post from './components/Post';
import './App.css';
import './components/style.css'

function App() {
    const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

    return (
    <div className="App">
      <Post author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 лютого"}
            statistic = {{
                coment: 482,
                repost: 146,
                like: 887

            }}
      />
      <Post author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={" 7 квітня"}
            statistic = {{
                coment: 82,
                repost: 46,
                like: 87

            }}
      />
      <Post author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={" 7 квітня"}
            statistic = {{
                coment: 82,
                repost: 46,
                like: 87

            }}
      />
    </div>
  );
}

export default App;
