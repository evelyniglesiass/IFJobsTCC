import '../../../App.scss';
import { toast } from 'react-toastify';

const ToastErrorComponent = () => {

    const notify = () => {
        toast.error('Erro', {
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

export default ToastErrorComponent