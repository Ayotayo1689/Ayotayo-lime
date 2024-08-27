import { Toastify } from '../Toastify/toast';
import { useDeleteCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UseDeleteApiHooks = () => {
  const [postApi] = useDeleteCommunityMutation();

  const post = async (path) => {
    try { 
      const response = await postApi({ path: path });
      // if (response.data) {
      //   console.log("hi");
      // }
      console.log(response);
      toast.success("Deleted successfully", {
        autoClose:2000
      } );
      // toast.success("Community deleted successfully");

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  return { post };
}

export default UseDeleteApiHooks;
