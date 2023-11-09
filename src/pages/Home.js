import { useNavigate } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

export default function Home() {
  // const [reviews, setReviews] = useState('')
  // const [addDescription, setAddDesription] = useState('')
  const navigate = useNavigate()

  // function addReview() {
  //   const newReview = {
  //     date: Date.now,
  //     description: addDescription,
  //     rating: 5,
  //     author: {
  //       name: 'Luke Gator',
  //       avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  //     },
  //   }
  //   setReviews(reviews.concat([newReview]).reverse())
  // }
  // useEffect(() => {
  //   addReview()
  // }, [])

  const navigateToLogin = () => {
    navigate('/login')
  }

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  // const navigateToProfile = () => {
  //   navigate('/profile')
  // }

  return (
    <div style={{ backgroundColor: '#00d1cd', height: '100vh' }}>
      {/* Header */}
      <div className="header" style={{ backgroundColor: '#444444' }}>
        <nav className="navbar navbar-light justify-content-between">
          <div className="ms-3">
            <img style={{ width: '200px' }} src="logo-transparent.png" alt="" />
          </div>
          <div className="d-flex">
            <button
              onClick={navigateToLogin}
              to="/Login"
              className="btn btn-outline-dark text-bg-success my-2 me-3 my-sm-0"
              type="button"
            >
              Login
            </button>
          </div>
        </nav>
      </div>
      {/* Preview Area and About */}
      <div className="container d-flex justify-content-center">
        <div className="card mt-5" style={{ width: '1000px', height: '400px' }}>
          <div
            // style={{ backgroundColor: '#e1eaf7' }}
            className="row row-cols-2 d-flex justify-content-center g-0"
            style={{ height: '400px', backgroundColor: '#e1eaf7' }}
          >
            <div className="col-md-6 border-solid">
              <div>
                <iframe
                  title="tutorial video"
                  style={{ height: '400px', width: '100%' }}
                  src="https://www.loom.com/embed/e31d8c6ba9194532bc42d4b235c08c5a?sid=f16711dd-e317-4379-a44a-c4e9311a871e"
                  webkitAllowFullScreen={true}
                  mozAllowFullScreen={true}
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4 className="card-title fw-bold text-center text-decoration-underline mt-3">
                  About Counselor AI
                </h4>
                <p className="card-text mt-4 fs-5 px-2">
                  Welcome to your Counselor AI. Our website allows users to
                  fully customize individual Counselors and save them to their
                  profile.
                </p>
                <p className="card-text mt-5 fs-5 px-2">
                  Please watch our preview video for a mock session
                  demonstration. Sign up free now to start a new custom session
                  now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center d-flex mt-5">
        <button
          onClick={navigateToSignUp}
          to="/SignUp"
          className=" btn btn-lg btn-success"
        >
          SignUp Free Now!
        </button>
      </div>
      {/* Reviews Section */}
      <div className="card mt-5">
        <h4
          style={{ backgroundColor: '#4444442b' }}
          className="card-header text-decoration-underline"
        >
          Reviews
        </h4>
        <ReviewCard />
        {/* {practive reviews}
        <div className="border rounded mt-3 mb-2">
          {reviews.map((review, i) => (
            <div key={i}>
              <div className="row">
                <div className="col col-2">
                  <img
                    alt=""
                    className="profile-pic rounded-circle me-3 d-inline-block mt-4 ms-3"
                    style={{ width: '3rem', height: '3rem' }}
                    src={review.author.avatar}
                  />
                </div>
                <div className="col pt-4">
                  <div className="row">
                    <span className="fw-lighter small">{review.date}</span>
                  </div>
                  <div className="row">
                    <span className="fw-bold">{review.author.name}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="ms-3">{review.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}
