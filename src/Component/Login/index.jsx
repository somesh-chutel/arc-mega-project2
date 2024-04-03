import { useState } from "react";
import "./index.css";

const Login = () => {

  const [allvalues,setValue] = useState({
    username:"",
    password:"",
    ShowErrorMsg:false,
    errorMsg:""
  });

  const onFetchuserDetails = async (event) => {
    event.preventDefault();

    const userDetails = {
      username: allvalues.username,
      password: allvalues.password,
    };

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const fetchData = await response.json();
    console.log(response);
    console.log(fetchData);
    if(response.ok===true){
      setValue({...allvalues,ShowErrorMsg:false})
    }
    else{
      setValue({...allvalues,ShowErrorMsg:true,errorMsg:fetchData.error_msg})
    }
  };


  const onChangeUsername = (event) => {
    setValue({...allvalues,username:event.target.value});

  };

  const onChangeuserpassword = (event) => {
    setValue({...allvalues,password:event.target.value});
  };

  return (
    <div className="login-cont">
      <form className="form-cont" onSubmit={onFetchuserDetails}>
        <div className="img-cont">
          <img
            className="web-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="rahul"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUsername}
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
            placeholder="rahul@2021"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangeuserpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {allvalues.ShowErrorMsg?(<p>{allvalues.errorMsg}</p>):null}
      </form>
    </div>
  );
};

export default Login;
