import { useState,useEffect } from 'react'

const url = 'https://course-api.netlify.app/api/react-tabs-project'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    const fetchJobs = async () => {
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    },[])
    console.log(fetchJobs)

    if(loading) {
        return <section>
            <h1>Loading.....</h1>
        </section>
    }
    const {duties,company,dates,title} = jobs[value]
    return (
        <>
            <section>
                <div>
                    <h2>experience</h2>
                </div>
                <div className="">
                    {jobs.map((item,index) => {
                        return <button 
                                key={item.id} 
                                onClick={()=> setValue(index)}
                                classNme={`job-btn ${index === value && 'active-btn'}`}
                                >
                            {item.category}
                        </button>
                    })}
                </div>
                <div>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p>{dates}</p>
                    {duties.map((duty, index) => {
                        return <article key={index}>

                        </article>
                    })}
                </div>
            </section>
        </>
    )
}

export default Home