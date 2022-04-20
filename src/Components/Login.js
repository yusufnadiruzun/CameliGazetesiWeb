function Login() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8" style={{ border: "groove" }}>
            <h1 style={{paddingTop:'20%', textAlign: "center",fontStyle:'oblique', color: '#2682ff'}}> Çameli Gazetesi </h1>
            <br></br>
            <div style={{ padding: "2%" ,textAlign:'center'}}>
              <input
                type="text"
                id="country_code"
                name="user_name"
                minLength="4"
                maxLength="12"
                style={{width: "80%"}}
              ></input>
            </div>
            <div style={{ padding: "2%" ,textAlign:'center' }}>
              <input
                type="text"
                id="country_code"
                name="user_name"
                minLength="4"
                maxLength="12"
                style={{width: "80%"}}
              ></input>
            </div>
            <div style={{ padding: "20px" ,textAlign:'center'}}>
              <button
                style={{ textAlign: "center", width: "80%" }}
                type="button"
                className="btn btn-outline-primary "
              >
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
