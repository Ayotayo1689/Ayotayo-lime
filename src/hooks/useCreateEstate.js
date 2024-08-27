import { useCreateCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UsePostCreateEstateHooks = () => {
  const [postApi] = useCreateCommunityMutation();

  const post = async (path, datas) => {
    try { 
      const response = await postApi({ path: path, datas: datas });
      
      console.log(response);

      if (response.error) {
        toast.error(response.error.data.errors[0].description);
      } else {
        toast.success("Community created successfully");
      }

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  return { post };
}

export default UsePostCreateEstateHooks;
