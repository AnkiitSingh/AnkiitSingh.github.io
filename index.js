const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const {useState, useEffect} = React
const axios = axios

const App = () => (
    <ReactRouterDOM.HashRouter>
        <ul>
            <li><Link to="/">{"Home"}</Link></li>
            <li><Link to="/login">{"Login"}</Link></li>
            <li><Link to="/register">{"Register"}</Link></li>
        </ul>
  
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </ReactRouterDOM.HashRouter>
    )
  
    const Home = () => {
        const [num, setNum] = useState(0)
        const [data, setData] = useState([])
        const [pulse, setPulse] = useState(false)

        useEffect (() => {
            axios('https://catfact.ninja/fact')
            .then((res) => setData(res.data))
        }, [pulse])

        const increment = () => {
            setNum(num+1)
        }
        const changeFact = () => {
            setPulse(!pulse)
        }

        return(
            <>
            <h3>{JSON.stringify(data)}</h3>
            <button onClick={changeFact}>Change Fact</button>
            <button onClick={increment}>Increase</button>
            <h3>{JSON.stringify(num)}</h3>
            </>
        )
    }
    const Login = () => <h1>{"Login"}</h1>
    const Register = () => <h1>{"Register"}</h1>
  
ReactDOM.render(<App />, document.querySelector('#root'));