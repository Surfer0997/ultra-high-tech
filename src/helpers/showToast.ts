import { toast } from 'react-toastify';

export const showToast = (type: string, msg: string) => {
  switch (type) {
    case 'SUCCESS':
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 'ERROR':
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 'INFO':
      toast.info(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case 'WARNING':
      toast.warn(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    default:
      return false;
  }
};
