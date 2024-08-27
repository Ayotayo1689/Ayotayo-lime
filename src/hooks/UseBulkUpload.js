import { useCreateCommunityMutation } from '../api/example';
import { toast } from 'react-toastify';

const UseUploadBulkHooks = () => {
  const [postApi] = useCreateCommunityMutation();

  const position = "top-right";

  const post = async (path, datas) => {
    try { 
      const response = await postApi({ path: path, datas: datas });
      if (response?.data?.data?.totalExcelResidentCount < 1) {
        toast.error("File is empty");
      } else {
        if (response?.data?.data?.unsuccessfulUploads?.length < 1) {
          toast.success("All data successful");
        } else {
          toast.error("Something Went wrong");
        }
      }
      console.log(response.data);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
  
  return { post };
}

export default UseUploadBulkHooks;
