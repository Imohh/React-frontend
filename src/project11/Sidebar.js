import { useGlobalContext } from './context'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

    return (
        <>
            <h3>Sidebar Component</h3>
        </>
    )
}

export default Sidebar