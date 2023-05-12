import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CreateTitle from './CreateTitle'

const Title = (props) => {

const [titles, setTitles] = useState([])

useEffect(() => {
    axios.get("https://capstone-planning-ljfrias.vercel.app/title", {
        headers: {
            Authorization: `Bearer ${props.token}`
        }
    })
    .then((response) => {
      props.setUser(response.data.user)
      setTitles(response.data)})
  }, [props.token])

 
  return (
    <div className='title-container'>
        <CreateTitle token={props.token} user={props.user} setTitles={setTitles} titles={titles}/>
        <ul className="list">
          {!titles.length ? (
            <p>Loading Books...</p>
          ) : (
            titles.map(({id, booktitle, user_id}) => (
                <li className="book" key={id}>{booktitle}</li>
            ))
          )}  
        </ul>
    </div>
  )
}

export default Title