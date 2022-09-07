import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImage' src="https://images.freeimages.com/images/previews/01a/technology-background-1632715.jpg" alt="" />
        
        <div className="postInfo">
          
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">Some Placeholder Title</span>

          <hr />

          <span className="postDate">1 hour ago.</span>

        </div>

        <p className='postDesc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum 
          veritatis, nulla animi, blanditiis dicta soluta illum accusantium nemo 
          in mollitia labore unde id similique nobis sequi quia fuga iure 
          beatae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum 
          veritatis, nulla animi, blanditiis dicta soluta illum accusantium nemo 
          in mollitia labore unde id similique nobis sequi quia fuga iure beatae!
        </p>

    </div> 
  )
}
