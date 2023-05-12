import React, {useState} from 'react'
import axios from 'axios'

const CreateTitle = ({token, user, titles, setTitles}) => {

    const [booktitle, setBooktitle] = useState("")

  return (
   <form className='form' onSubmit={(e) => {
        e.preventDefault()

        axios.post("https://capstone-planning-ljfrias.vercel.app/title", {
            booktitle,
            user_id: user.id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })


        setBooktitle("")
        setTitles([...titles, {booktitle, user_id: user.id}])
   }}>
    <input type="text" className='input' onChange={(e) => setBooktitle(e.target.value)} value={booktitle} placeholder='Put in book title'/>
    <input className='submit' type="submit" value="Add a book" />
    </form>
  )
}

export default CreateTitle