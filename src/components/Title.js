import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CreateTitle from './CreateTitle'

const Title = ({token, setUser, user}) => {

const [titles, setTitles] = useState([])

useEffect(() => {
    axios.get("https://capstone-planning-ljfrias.vercel.app/title", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
      setUser(response.data.user)
      setTitles(response.data.titles)})
  }, [token, setUser])

 
  return (
    <div className='title-container'>
        <CreateTitle token={token} user={user} setTitles={setTitles} titles={titles}/>
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