import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toaster = (message, type, autoClose) => {
  toast[type](message, {
    position: "top-right",
    autoClose: autoClose ? autoClose : 2000,
    newestOnTop: true,
  });
};
export default Toaster;

// position="top-center"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick={false}
// rtl={false}
// pauseOnFocusLoss
// draggable={false}
// pauseOnHover={false}
// theme="colored"
