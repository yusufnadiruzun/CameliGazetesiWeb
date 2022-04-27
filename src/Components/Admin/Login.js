import { useDispatch,useSelector } from "react-redux";
import { authorization } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuthorization} = useSelector((state) => state.result)

  const changePage= () =>{
    let url = "/cameligazetesi.com/admin"  
    navigate(url)
  }

  const getUser = async () => {
    let userName = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;
   await dispatch(authorization(userName,password))

   if(isAuthorization){
    changePage();
   }
   
  }

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-5 mt-5" style={{ border: "groove" }}>
            <div id="rt" style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://scontent.fist7-2.fna.fbcdn.net/v/t1.18169-9/18194115_1636663239707409_1950421362261823333_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IIk7xsRgEg4AX_YjfB7&_nc_ht=scontent.fist7-2.fna&oh=00_AT-Uqj5aLkiamMV48T2lccjWYmCVDzJL9k-shBDh1jPFBw&oe=6285E95B"
                style={{ width: "18%", height: "18%", marginTop: "15%" }}
                alt=""
              ></img>
              <h1
                style={{
                  paddingTop: "20%",
                  textAlign: "center",
                  fontStyle: "oblique",
                  color: "#2682ff",
                }}
              >
                Çameli Gazetesi
              </h1>
            </div>
            <br></br>
            <div style={{ padding: "2%", textAlign: "center" }}>
              <input
                type="text"
                id="user_name"
                name="user_name"
                minLength="4"
                maxLength="12"
                style={{ width: "60%" }}
                placeholder="Kullanıcı Adı"
              ></input>
            </div>
            <div style={{ padding: "2%", textAlign: "center" }}>
              <input
                type="text"
                id="password"
                name="user_name"
                minLength="4"
                maxLength="12"
                style={{ width: "60%" }}
                placeholder="Şifre"
              ></input>
            </div>
            <div
              style={{ padding: "4%", textAlign: "center", marginTop: "5%" }}
            >
              <button
                style={{ textAlign: "center", width: "60%" }}
                onClick={() => getUser()}
                type="button"
                className="btn btn-outline-primary "
              >
                Giriş Yap
              </button>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
