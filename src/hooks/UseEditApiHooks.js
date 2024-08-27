import { useEditCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UseEditApiHooks = () => {
  const [editApi] = useEditCommunityMutation();

  const edit = async (path, datas) => {
    try { 
      const response = await editApi({ path: path, datas: datas });
      if (response.error) {
        toast.error(response.error.data.errors[0].description ||  response.error.data.message);
      } else {
        toast.success("successful");
      }

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  return { edit };
}

export default UseEditApiHooks;
