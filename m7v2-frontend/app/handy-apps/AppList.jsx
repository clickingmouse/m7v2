
import React from 'react'


async function getHandyApps(){
    const res = await fetch('http://localhost:4000/handyapps',{
        next:{
            revalidate:30
        }
    })
    return res.json()

    //refetching 30s
}

export default async function AppList() {

const handyApps = await getHandyApps()
    return (
    <>
    {handyApps.map( (app) => (
        <div key = {app.id} className = "card my-5">
            <h3>{app.title}</h3>
            <p>{app.body.slice(0,200)}...</p>

        </div>
    ) )
    }
    </>
  )
}
