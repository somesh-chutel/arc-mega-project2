import "./index.css";

const Login = () => {
    const fetchuserDetails = async()=>{
        const userDetails = {
            username: "rahu",
            password: "rahul@2021"
        }
        
        const url = "https://apis.ccbp.in/login";
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

        const response = await fetch(url,options);
        const fetchData = await response.json();
        console.log(fetchData);

    }

    fetchuserDetails();
  return (
    <div className="login-cont">
      <form className="form-cont">
        <div className="img-cont">
      <img className='web-logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="website logo"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
