import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/triilok10')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    })
    return (
        <>
            <Header />
            <div className="main-Githib-workPanel">
                <h1>Github Followers: {data.followers} </h1>
            </div>
            <div className="mainGithub-picProfile">
                <img src={data.avatar_url} alt="GitProfilePic" />
            </div>
            <div className="mainGithub-picProfileBio">
                Bio: {data.bio}
            </div>
            <div className="mainGithub-picProfile-description">
                <h1>The above Photo and Github followers are downloaded by using the API's in React.</h1>
            </div>
            <Footer />
        </>
    )
}
