import { useCreateCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UseSendMailHooks = (name) => {
  const [postApi] = useCreateCommunityMutation();

  const post = async (path) => {
    try { 
      const response = await postApi({ path: path});
      
      console.log();
      console.log(name);
  
        if (response?.data?.success) {
            toast.success("Resident has been Notified", {
                autoClose:3000
              })
        }

  
      return response;
    } catch (err) {
      console.log(err);
            toast.error(err, {
          autoClose:2000
        } );
    }
  }

  return { post };
}

export default UseSendMailHooks;
