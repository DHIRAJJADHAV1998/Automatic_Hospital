
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/common/Header"
import Footer from "./component/common/Footer";
import Register from './component/Register/register';

import Admin from "./component/Admin/adminpage"
import AddDoc from "./component/Admin/addDoc"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/Home/homepage"
import Aboutus from './component/Aboutus/Aboutus';
import Login from "./component/Login/Login"

import Patient from "./component/Patient/patient";
import AddPatient from "./component/Patient/addPatient";
import Prescription from './component/Doctor/Prescription';
import ViewPrescription from './component/Doctor/ViewPrescription';
import MyAppointment from "./component/Doctor/MyAppointment";
import EditPrescription from "./component/Doctor/EditPrescription";
import DoctorPage from './component/Doctor/DoctorPage';
import PayBill from './component/BILL/PayBill';
import Receipt from './component/Receipts/receipt';
import AddStatus from './component/Receipts/AddStatus';
import DoctorProfile from './component/Doctor/DoctorProfile';
import PatientProfile from './component/Patient/PatientProfile';

function App() {

  return (
     <div className ="App">
        <div className="header"><Header></Header></div>
        <div className="main">
     <Router> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route> 
        <Route exact path="/aboutus" element={<Aboutus/>}></Route> 
        <Route  path="/login" element={<Login/>} >  </Route> 
        <Route path="/register" element={<Register/>} > </Route> 
        <Route path="/adminpage" element={<Admin/>}></Route>
        <Route path="/patient" element={<Patient/>}></Route>
        <Route path="/addDoc" element={<AddDoc/>}></Route>

        {/* Doctor */}

        <Route path="/Prescription" element={<Prescription></Prescription>}></Route>
        <Route path="/ViewPrescription" element={<ViewPrescription></ViewPrescription>}></Route>
        <Route path="/editPrescription" element={<EditPrescription></EditPrescription>}></Route>
        <Route path="/get/MyAppointment" element={<MyAppointment></MyAppointment>}></Route>
        <Route path="/doctorPage" element={<DoctorPage></DoctorPage>}></Route>
          <Route path="/doctorProfile" element={<DoctorProfile/>}></Route>

        {/* Pay Bill */}
        <Route exact path="/status" element={<AddStatus/>}></Route>
        <Route exact path="/paybill" element={<PayBill/>}></Route>
        <Route exact path="/receipt" element={<Receipt/>}></Route> 
        <Route path="/addPatient" element={<AddPatient/>}></Route>
        <Route path="/get/Patient" element={<PatientProfile/>}></Route>
        </Routes>
      </Router>
      </div>
      <div className="footer"><Footer></Footer></div>
      </div>
      
  );
}

export default App;


// Write a program that prints numbers from 1 to 100. Except, for the multiples of three, print "google" and for the multiples of five, print "facebook". And, for the multiples of both, print "amazon".  Please answer with the stackblitz link. (5 points)

// let number = 0;
// let answer1 = 0;
// let answer2 = 0;

// for (let i = 1; i <= 100; ++i) {
//   ++number;

//   answer1 = number % 3;
//   answer2 = number % 5;

//   if (answer1 == 0 && answer2 != 0) {
//     console.log('google');
//   }
//   if (answer1 != 0 && answer2 == 0) {
//     console.log('facebook');
//   }

//   if (answer1 == 0 && answer2 == 0) {
//     console.log('amazon');
//   }
// }


// let testCase1 = [
//   {
//     name: 'Leo Messi',
//     dob: '31-12-1995',
//     biology: 95,
//     chemistry: 91,
//   },
//   {
//     name: 'Cristiano Ronaldo',
//     dob: '31-05-1992',
//     biology: 90,
//     chemistry: 81,
//   },
//   {
//     name: 'Virat Kohli',
//     dob: '31-12-1995',
//     biology: 95,
//     chemistry: 96,
//   },
//   {
//     name: 'Rohit Sharma',
//     dob: '31-12-1995',
//     biology: 85,
//     chemistry: 86,
//   },
//   {
//     name: 'Viswanathan Anand',
//     dob: '12-12-1994',
//     biology: 99,
//     chemistry: 10,
//   },
// ];

// testCase1.sort(function (a, b) {
//   if ((a, b)) {
//     let answer = a.biology + a.chemistry;
//     let answer1 = b.biology + b.chemistry;

//     if (answer > answer1) {
//       if (
//         a.biology > b.biology ||
//         (a.chemistry > b.chemistry && answer > answer1)
//       ) {
//         return 1;
//       } else {
//         return -1;
//       }
//     } else if (answer == answer1) {
//       if (a.biology > b.biology) {
//         return 1;
//       } else {
//         return -1;
//       }
//     } else if (answer == answer1) {
//       if (a.chemistry > b.chemistry) {
//         return 1;
//       } else {
//         return -1;
//       }
//     } else if (answer == answer1) {
//       if (a.dob > b.dob) {
//         return 1;
//       } else {
//         return -1;
//       }
//     }
//   } else {
//     if (a.name > b.name) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }
// });
