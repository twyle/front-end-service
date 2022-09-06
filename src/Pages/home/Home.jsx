import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/Posts'
import SideBar from '../../Components/sidebar/SideBar'
import './home.css'

export default function Home() {
  return (
      <>

          <Header />
          <div className="home">

            <Posts/>
            <SideBar />

          </div>

      </>
  )
}
