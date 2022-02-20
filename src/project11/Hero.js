import {useGlobalContext} from './context'

const Hero = () => {
    const data = useGlobalContext()
    console.log(data)
    return (
        <>
            <h3>Hero Component</h3>
        </>
    )
}

export default Hero