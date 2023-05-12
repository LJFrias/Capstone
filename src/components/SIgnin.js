import axios from "axios";
import { useState} from "react";
import {Link, useNavigate} from 'react-router-dom'

const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    return(
        <>
          <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault()
                axios.post(
                    "https://capstone-planning-ljfrias.vercel.app/signin", {
                        email,
                        password
                    }
                ).then((response) => {
                    
                    props.setToken(response.data.token)
                })

                setEmail("")
                setPassword("")
                navigate("/title")
            }}
          >
            <label className="label">
                Email:
                <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label className="label">
                Password:
                <input type="password" className="input" onChange={(e) => setPassword(e.target.value)}  value={password} />
            </label>
            <input type="submit" className="submit" />
            <p>New here? <Link to="/signup">Sign Up!</Link></p>
          </form>
        </>
    )
}

export default Signin