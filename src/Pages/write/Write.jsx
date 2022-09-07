import './write.css'

export default function Write() {
  return (
    <div className='write'>

        <img className='writeImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6vp_1wkyH_s2NhWlFHQEN69LeUSggGJerw&usqp=CAU" alt="" />
        
        <form className='writeForm'>

            <div className="writeFormGroup">

                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />

            </div>

            <div className="writeFormGroup">

                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' ></textarea>

            </div>

            <button className="writeSubmit">Publish</button>

        </form>

    </div>
  )
}
