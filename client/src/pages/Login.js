// import axios from "axios";
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import '../App.css';
// import { useNavigate } from "react-router-dom";
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";



// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [objectId, setObjectId] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   // login function with api
//   function handleSubmit(event) {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//       objectId: objectId
//     };
//     // axios call
//     localStorage.setItem("email", email)
//     localStorage.setItem("objectId", objectId)

//     axios
//       .post("https://conference-room-booking-be.onrender.com/user/login", data)
//       .then((res) => {
//         alert("Login Success 😊")
//         console.log(res);
//         localStorage.setItem("token", JSON.stringify(res.data.token));
//         localStorage.setItem('objectId', JSON.stringify(res.data.user['_id']))
//         navigate("/Dashboard");
//       })
//       .catch((err) => {
//         alert("Login Fail invalid credientials 😫")
//         console.log(err);
//       });
//   }

//   function toggleShowPassword() {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <div >
//       {/* className="login-page w-screen h-[100vh] flex justify-center items-center" */}
//       <div className="sl-screen flex" >
//         <Navbar />
//       </div>

//         <div className="w-screen h-[90vh] flex  justify-right items-top login-page" >

//           <form
//             onSubmit={(e) => handleSubmit(e)}
//             className="flex flex-col  w-[30%]  space-y-4  "
//           >
//             <h1 className="text-center text-xl"> 🆂🅸🅶🅽🅸🅽</h1>

//             <div className="flex flex-col ">
//               <label className="text-xl ">𝐄𝐦𝐚𝐢𝐥</label>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="text"
//                 required="Please enter Your Email"
//                 placeholder="Enter Your Email"
//                 className=" border border-zinc-400 outline-none  px-6 py-2 text-black "
//               />
//             </div>
//             <div className="flex flex-col ">
//               <label className="text-xl ">𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
//               <div className="relative">
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   type={showPassword ? "text" : "password"}
//                   required="Please enter Your Password"
//                   placeholder="Enter Your Password"
//                   className="border border-zinc-400 outline-none px-6 py-2 text-black w-full"
//                 />
//                 <button
//                   type="button"
//                   onClick={toggleShowPassword}
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2"
//                 >
//                   {showPassword ? (
//                     <EyeOffIcon className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <EyeIcon className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>

//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center items-center bg-blue-300 py-3 rounded-lg"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//     </div>


//   );
// }

// export default Login;


import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Clock from "./Clock";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [objectId, setObjectId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      objectId: objectId
    };
    // axios call
    localStorage.setItem("email", email)
    localStorage.setItem("objectId", objectId)

    axios
      .post("http://13.232.52.143:9001/user/login", data)
      .then((res) => {
        toast.success("Login Success 😊", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem('objectId', JSON.stringify(res.data.user['_id']))
        navigate("/Dashboard");
      })
      .catch((err) => {
        toast.error("Login Fail invalid credientials 😫")
        console.log(err);
      });
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>

      <div className="login-page">
        <video className="video-background" autoPlay loop muted>
          <source src="./img/capp.mp4" type="video/mp4" />
        </video>
        <div className="sl-screen flex" >
          <Navbar />
        </div>

      </div>



      {/* <Clock /> */}
      <div className="w-screen h-[90vh] flex  justify-center  items-center login-page" >

        <form
          onSubmit={(e) => handleSubmit(e)}
          // className="flex flex-col w-[30%]  space-y-4  "
          className="flex-col w-[35%] space-y-4 "
        >
          <h1 className="text-center text-xl"> 🆂🅸🅶🅽🅸🅽</h1>
          <div className="text-right">
            <p className="date-time text-white text-size-10">   </p>
          </div>
          <div className="flex flex-col ">
            <label className="text-xl ">𝐄𝐦𝐚𝐢𝐥</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required="Please enter Your Email"
              placeholder="Enter Your Email"
              className=" border border-zinc-400 outline-none  px-6 py-2 text-black "
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xl ">𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required="Please enter Your Password"
                placeholder="Enter Your Password"
                className="border border-zinc-400 outline-none px-6 py-2 text-black w-full"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-blue-300 py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        {/* <div className="anima-page">
        </div> */}

      </div>

    </div>


  );
}

export default Login;

