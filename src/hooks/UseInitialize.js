import { useCreateCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UseInitializeApiHooks = () => {
  const [postApi] = useCreateCommunityMutation();

  const post = async (path, datas) => {
    try { 
      const response = await postApi({ path: path, datas: datas });
      
      console.log(response);
  
      if (response.error) {
        if (response.error.data.errors) {
          const errors = response.error.data.errors;
          const errorKey = Object.keys(errors)[0];
          console.log(errors[errorKey].description);
          toast.error(errors[errorKey].description , {
            autoClose:2000
          } );
        } else {
          console.log(2);
          toast.error(response.error.data.message, {
            autoClose:2000
          } );
        }
      } else if (!response.data.success) {
        console.log(4);
        toast.error(response.data.message, {
          autoClose:2000
        } );
      } else if (response.data === null) {
        console.log("hello");
      } else {
      console.log(response.data.message);
      }
  
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  return { post };
}

export default UseInitializeApiHooks;
