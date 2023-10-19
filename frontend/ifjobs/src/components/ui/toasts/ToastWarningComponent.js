import '../../../App.scss';
import { toast } from 'react-toastify';

const ToastSuccessComponent = () => {

    const notify = () => {
        toast.warning('Aviso!', {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

    return (notify)
}

export default ToastSuccessComponent