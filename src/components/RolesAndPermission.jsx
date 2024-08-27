// import React, { useState, useEffect } from "react";
// import {
//   Checkbox,
//   Button,
//   FormControlLabel,
//   OutlinedInput,
//   InputAdornment,
//   Modal,
//   TextField,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import CloseIcon from "@mui/icons-material/Close";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { useGetCommunityQuery } from "../api/example";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   borderRadius: "6px",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: "25px",
//   outline: "none",
//   position: "relative",
// };

// const RolesAndPermission = () => {
//   const [open, setOpen] = useState(false);
//   const [addRole, setAddRole] = useState(false);
//   const [selectedRole, setSelectedRole] = useState("");
//   const [permissions, setPermissions] = useState({
//     viewCommunities: false,
//     accessEstates: false,
//     addEstate: false,
//     viewFinancials: false,
//     viewIntegrations: false,
//     editAccess: false,
//     addIntegration: false,
//     viewLicense: false,
//     uploadLicense: false,
//     hasSettingAccess: false,
//   });

//   const { data: allRoles, refetch: refetchRoles } =
//     useGetCommunityQuery(`/admin/role/all`);

//   useEffect(() => {
//     if (selectedRole) {
//       const role = allRoles?.data?.find(
//         (role) => role.adminRoleId === selectedRole
//       );
//       if (role) {
//         setPermissions({
//           viewCommunities:
//             role.communityPermissions.canViewCommunities || false,
//           accessEstates:
//             role.communityPermissions.canAccessCommunities || false,
//           addEstate: role.communityPermissions.canCreateCommunity || false,
//           viewFinancials: role.financialPermissions.canViewFinancials || false,
//           viewIntegrations:
//             role.integrationPermissions.canViewIntegrations || false,
//           editAccess:
//             role.integrationPermissions.canEditIntegrationAccess || false,
//           addIntegration:
//             role.integrationPermissions.canAddIntegration || false,
//           viewLicense: role.licensePermissions.canViewLicense || false,
//           uploadLicense: role.licensePermissions.canUploadLicense || false,
//           hasSettingAccess: role.canAccessSettings || false,
//         });
//       }
//     }
//   }, [selectedRole, allRoles]);

//   const handleRoleChange = (role) => {
//     setSelectedRole(role);
//   };

//   const handlePermissionChange = (event) => {
//     const { name, checked } = event.target;
//     setPermissions((prevPermissions) => ({
//       ...prevPermissions,
//       [name]: checked,
//     }));
//   };

//   const handleSave = () => {
//     // Handle save logic here, e.g., send the updated permissions to the server
//     console.log("Selected Role:", selectedRole);
//     console.log("Permissions:", permissions);
//     // Make an API call to save the permissions
//   };

//   const handleOpen = () => {
//     setOpen(true)
//     setPermissions({
//       viewCommunities: false,
//       accessEstates: false,
//       addEstate: false,
//       viewFinancials: false,
//       viewIntegrations: false,
//       editAccess: false,
//       addIntegration: false,
//       viewLicense: false,
//       uploadLicense: false,
//       hasSettingAccess: false,
//     });
//   };
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <div className="text-[16px]">
//         <div className="flex gap-4 flex-wrap">
//           <div
//             style={{
//               flex: "1",
//             }}
//             className="p-6 rounded-xl bg-white min-w-[200px]"
//           >
//             <OutlinedInput
//               placeholder="Search Role"
//               id="outlined-adornment-amount"
//               size="small"
//               sx={{
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   border: "none",
//                 },
//                 "& .MuiOutlinedInput-input": {
//                   outline: "none",
//                 },
//                 "& .MuiInputAdornment-root": {
//                   marginRight: 0,
//                 },
//                 bgcolor: "#e6e6e6",
//               }}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               }
//             />
//             <div className="mt-6">
//               {allRoles?.data?.map((role) => (
//                 <div key={role.adminRoleId} className="mb-2">
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         fontSize: "15px",
//                         fontWeight: 300,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         checked={selectedRole === role.adminRoleId}
//                         onChange={() => handleRoleChange(role.adminRoleId)}
//                       />
//                     }
//                     label={role.name}
//                   />
//                 </div>
//               ))}
//             </div>
//             <Button
//               onClick={handleOpen}
//               variant="contained"
//               sx={{
//                 textTransform: "none",
//                 backgroundColor: "#0D6CF2",
//                 display: "flex",
//                 gap: "10px",
//                 alignItems: "center",
//                 margin: "30px auto",
//                 borderRadius: "10px",
//               }}
//               className="mt-4 bg-[#0D6CF2] text-white"
//             >
//               <AddIcon
//                 sx={{
//                   fontWeight: 300,
//                   fontSize: "14px",
//                 }}
//               />{" "}
//               Add New Role
//             </Button>
//           </div>
//           <div
//             style={{
//               flex: "2",
//             }}
//             className="p-6 rounded-xl bg-white min-w-[320px]"
//           >
//             <div className="flex justify-between">
//               <div className="mb-6 font-[500] text-[20px]">
//                 Manage Permission
//               </div>
//               <div
//                 onClick={handleSave}
//                 className="text-[#1b63ff] underline cursor-pointer"
//               >
//                 Save
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <div className="mb-1 font-[500] text-[20px] mt-4">
//                   Communities
//                 </div>
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="viewCommunities"
//                       checked={permissions.viewCommunities}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="View Communities"
//                 />
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="accessEstates"
//                       checked={permissions.accessEstates}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Access Estates"
//                 />
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="addEstate"
//                       checked={permissions.addEstate}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Add Estate"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="mb-1 font-[500] text-[20px] mt-4">
//                   Financials
//                 </div>
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="viewFinancials"
//                       checked={permissions.viewFinancials}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="View Financials"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="mb-1 font-[500] text-[20px] mt-4">
//                   Integrations
//                 </div>
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="viewIntegrations"
//                       checked={permissions.viewIntegrations}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="View Integrations"
//                 />
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="editAccess"
//                       checked={permissions.editAccess}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Edit Access"
//                 />
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="addIntegration"
//                       checked={permissions.addIntegration}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Add Integration"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="mb-1 font-[500] text-[20px] mt-4">Licenses</div>
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="viewLicense"
//                       checked={permissions.viewLicense}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="View License"
//                 />
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="uploadLicense"
//                       checked={permissions.uploadLicense}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Upload License"
//                 />
//               </div>
//               <div>
//                 <div className="mb-1 font-[500] text-[20px] mt-4">Settings</div>
//                 <FormControlLabel
//                   sx={{
//                     "& .MuiTypography-root": {
//                       all: "unset",
//                       fontSize: "15px",
//                       fontWeight: 400,
//                       color: "grey",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       sx={{
//                         transform: "scale(0.8)",
//                         padding: "4px",
//                         "& .MuiSvgIcon-root": {
//                           borderRadius: "4px",
//                         },
//                         "&.Mui-checked .MuiSvgIcon-root": {
//                           borderColor: "none",
//                         },
//                       }}
//                       name="hasSettingAccess"
//                       checked={permissions.hasSettingAccess}
//                       onChange={handlePermissionChange}
//                     />
//                   }
//                   label="Has Setting Access"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <CloseIcon
//             onClick={handleClose}
//             sx={{
//               padding: "5px",
//               backgroundColor: "#e9e8e8",
//               borderRadius: "50%",
//               position: "absolute",
//               right: "20px",
//               top: "20px",
//               cursor: "pointer",
//             }}
//           />
//           {addRole ? (
//             <div
//               style={{
//                 flex: "2",
//               }}
//               className="p-6 rounded-xl bg-white min-w-[320px]"
//             >
//               <div className="flex justify-between">
//                 <div className="mb-6 font-[500] text-[20px]">
//                   Assign Permissions
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col">
//                   <div className="mb-1 font-[500] text-[20px] mt-4">
//                     Communities
//                   </div>
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="viewCommunities"
//                         checked={permissions.viewCommunities}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="View Communities"
//                   />
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="accessEstates"
//                         checked={permissions.accessEstates}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Access Estates"
//                   />
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="addEstate"
//                         checked={permissions.addEstate}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Add Estate"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="mb-1 font-[500] text-[20px] mt-4">
//                     Financials
//                   </div>
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="viewFinancials"
//                         checked={permissions.viewFinancials}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="View Financials"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="mb-1 font-[500] text-[20px] mt-4">
//                     Integrations
//                   </div>
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="viewIntegrations"
//                         checked={permissions.viewIntegrations}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="View Integrations"
//                   />
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="editAccess"
//                         checked={permissions.editAccess}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Edit Access"
//                   />
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="addIntegration"
//                         checked={permissions.addIntegration}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Add Integration"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="mb-1 font-[500] text-[20px] mt-4">
//                     Licenses
//                   </div>
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="viewLicense"
//                         checked={permissions.viewLicense}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="View License"
//                   />
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="uploadLicense"
//                         checked={permissions.uploadLicense}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Upload License"
//                   />
//                 </div>
//                 <div>
//                   <div className="mb-1 font-[500] text-[20px] mt-4">
//                     Settings
//                   </div>
//                   <FormControlLabel
//                     sx={{
//                       "& .MuiTypography-root": {
//                         all: "unset",
//                         fontSize: "15px",
//                         fontWeight: 400,
//                         color: "grey",
//                       },
//                     }}
//                     control={
//                       <Checkbox
//                         sx={{
//                           transform: "scale(0.8)",
//                           padding: "4px",
//                           "& .MuiSvgIcon-root": {
//                             borderRadius: "4px",
//                           },
//                           "&.Mui-checked .MuiSvgIcon-root": {
//                             borderColor: "none",
//                           },
//                         }}
//                         name="hasSettingAccess"
//                         checked={permissions.hasSettingAccess}
//                         onChange={handlePermissionChange}
//                       />
//                     }
//                     label="Has Setting Access"
//                   />
//                 </div>
//               </div>
//               <Button
//                 variant="contained"
//                 sx={{
//                   width: "100%",
//                   mt: "30px",
//                 }}
//                 onClick={handleSave}
//               >
//                 Save
//               </Button>
//             </div>
//           ) : (
//             <>
//               <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Create Role
//               </Typography>
//               <div className="flex flex-col mb-4">
//                 <label className="mb-2" htmlFor="roleName">
//                   Role
//                 </label>
//                 <TextField
//                   sx={{
//                     backgroundColor: "#eaf6ff",
//                     width: "100%",
//                   }}
//                   size="small"
//                   id="roleName"
//                   placeholder="Admin..."
//                   variant="outlined"
//                 />
//               </div>
//               <div className="flex flex-col mb-4">
//                 <label className="mb-2" htmlFor="roleDescription">
//                   Description
//                 </label>
//                 <TextField
//                   sx={{
//                     backgroundColor: "#eaf6ff",
//                     width: "100%",
//                   }}
//                   size="small"
//                   id="roleDescription"
//                   placeholder="This role has access to..."
//                   variant="outlined"
//                 />
//               </div>
//               <Button
//                 onClick={() => setAddRole(true)}
//                 variant="contained"
//                 sx={{
//                   textTransform: "none",
//                   width: "100%",
//                   my: "30px",
//                 }}
//               >
//                 Continue
//               </Button>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default RolesAndPermission;

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Button,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useGetCommunityQuery } from "../api/example";
import axios from "axios";
import UsePostCreateApiHooks from "../hooks/UseCommunity";
import ButtonLoader from "./ButtonLoader";
import UseEditApiHooks from "../hooks/UseEditApiHooks";
// import { BASE_URL } from "../constants"; // Adjust the import path as needed

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "6px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "25px",
  outline: "none",
  position: "relative",
};

const RolesAndPermission = () => {
  const [open, setOpen] = useState(false);
  const { post } = UsePostCreateApiHooks();
  const { edit } = UseEditApiHooks();

  const [addRole, setAddRole] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roleName, setRoleName] = useState(""); // State for role name
  const [roleDescription, setRoleDescription] = useState(""); // State for role description
  const [selectedRole, setSelectedRole] = useState("");
  const [permissions, setPermissions] = useState({
    viewCommunities: false,
    accessEstates: false,
    addEstate: false,
    viewFinancials: false,
    viewIntegrations: false,
    editAccess: false,
    addIntegration: false,
    viewLicense: false,
    uploadLicense: false,
    hasSettingAccess: false,
  });

  const {
    data: allRoles,
    refetch: refetchRoles,
    isLoading: loadingRoles,
  } = useGetCommunityQuery(`/admin/role/all`);

  useEffect(() => {
    if (selectedRole) {
      const role = allRoles?.data?.find(
        (role) => role.adminRoleId === selectedRole.adminRoleId
      );
      if (role) {
        setPermissions({
          viewCommunities:
            role.communityPermissions.canViewCommunities || false,
          accessEstates:
            role.communityPermissions.canAccessCommunities || false,
          addEstate: role.communityPermissions.canCreateCommunity || false,
          viewFinancials: role.financialPermissions.canViewFinancials || false,
          viewIntegrations:
            role.integrationPermissions.canViewIntegrations || false,
          editAccess:
            role.integrationPermissions.canEditIntegrationAccess || false,
          addIntegration:
            role.integrationPermissions.canAddIntegration || false,
          viewLicense: role.licensePermissions.canViewLicense || false,
          uploadLicense: role.licensePermissions.canUploadLicense || false,
          hasSettingAccess: role.canAccessSettings || false,
        });
      }
    }
  }, [selectedRole, allRoles]);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    if (addRole) {
      const newRoleData = {
        name: roleName,
        description: roleDescription,
        canViewCommunities: permissions.viewCommunities,
        canAccessCommunities: permissions.accessEstates,
        canCreateCommunity: permissions.addEstate,
        canViewFinancials: permissions.viewFinancials,
        canViewIntegrations: permissions.viewIntegrations,
        canEditIntegrationAccess: permissions.editAccess,
        canAddIntegration: permissions.addIntegration,
        canViewLicense: permissions.viewLicense,
        canUploadLicense: permissions.uploadLicense,
        canAccessSettings: permissions.hasSettingAccess,
      };

      try {
        console.log(newRoleData);
        const response = await post(`/admin/role`, newRoleData);
        if (response.data.success) {
          // Handle success, e.g., refetch roles or close the modal
          refetchRoles();
          handleClose();
        } else {
          console.error("Failed to create role:", response.data.message);
        }
      } catch (error) {
        console.error("Error creating role:", error);
      }
    } else {
      const newRoleData = {
        name: selectedRole?.name, // Use the existing role name if not editing
        description: selectedRole?.description, // Use the existing description if not editing
        canViewCommunities: permissions?.viewCommunities,
        canAccessCommunities: permissions?.accessEstates,
        canCreateCommunity: permissions?.addEstate,
        canViewFinancials: permissions?.viewFinancials,
        canViewIntegrations: permissions?.viewIntegrations,
        canEditIntegrationAccess: permissions?.editAccess,
        canAddIntegration: permissions?.addIntegration,
        canViewLicense: permissions?.viewLicense,
        canUploadLicense: permissions?.uploadLicense,
        canAccessSettings: permissions?.hasSettingAccess,
      };
      // result = await edit(
      //   `/community/${communityId}/groups/houses/${houseGroupId}`,
      //   editFormData
      // );

      try {
        console.log(selectedRole);
        const response = await edit(
          `admin/role/${selectedRole?.adminRoleId} `,
          newRoleData
        );
        if (response.data.success) {
          // Handle success, e.g., refetch roles or close the modal
          refetchRoles();
          handleClose();
        } else {
          console.error("Failed to create role:", response.data.message);
        }
      } catch (error) {
        console.error("Error creating role:", error);
      }
    }
    setLoading(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setAddRole(false);
    setPermissions({
      viewCommunities: false,
      accessEstates: false,
      addEstate: false,
      viewFinancials: false,
      viewIntegrations: false,
      editAccess: false,
      addIntegration: false,
      viewLicense: false,
      uploadLicense: false,
      hasSettingAccess: false,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setRoleName("");
    setRoleDescription("");
    setPermissions({
      viewCommunities: false,
      accessEstates: false,
      addEstate: false,
      viewFinancials: false,
      viewIntegrations: false,
      editAccess: false,
      addIntegration: false,
      viewLicense: false,
      uploadLicense: false,
      hasSettingAccess: false,
    });
  };

  return (
    <>
      <div className="text-[16px]">
        <div className="flex gap-4 flex-wrap">
          <div
            style={{
              flex: "1",
            }}
            className="p-6 rounded-xl bg-white min-w-[200px]"
          >
            <OutlinedInput
              placeholder="Search Role"
              id="outlined-adornment-amount"
              size="small"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiOutlinedInput-input": {
                  outline: "none",
                },
                "& .MuiInputAdornment-root": {
                  marginRight: 0,
                },
                bgcolor: "#e6e6e6",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <div className="mt-6">
              {loadingRoles ? (
                <div className="flex gap-4 flex-col justify-between">
                  <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-[4px] min-w-[100px] min-h-[30px]"></div>
                  <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-[4px] min-w-[100px] min-h-[30px]"></div>
                  <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-[4px] min-w-[100px] min-h-[30px]"></div>
                  <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-[4px] min-w-[100px] min-h-[30px]"></div>
                </div>
              ) : (
                allRoles?.data?.map((role) => (
                  <div key={role.adminRoleId} className="mb-2">
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                          color: "grey",
                        },
                      }}
                      control={
                        <Checkbox
                          sx={{
                            transform: "scale(0.8)",
                            padding: "4px",
                            "& .MuiSvgIcon-root": {
                              borderRadius: "4px",
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              borderColor: "none",
                            },
                          }}
                          checked={
                            selectedRole.adminRoleId === role.adminRoleId
                          }
                          onChange={() => handleRoleChange(role)}
                        />
                      }
                      label={role.name}
                    />
                  </div>
                ))
              )}
            </div>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#0D6CF2",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "30px auto",
                borderRadius: "10px",
              }}
              className="mt-4 bg-[#0D6CF2] text-white"
            >
              <AddIcon
                sx={{
                  fontWeight: 300,
                  fontSize: "14px",
                }}
              />{" "}
              Add New Role
            </Button>
          </div>
          <div
            style={{
              flex: "2",
            }}
            className="p-6 rounded-xl bg-white min-w-[320px]"
          >
            <div className="flex justify-between">
              <div className="mb-6 font-[500] text-[20px]">
                Manage Permission
              </div>
              {loading ? (
                <div className="font-[500] text-[#b3b3b3] cursor-pointer ">
                  Please Wait..
                </div>
              ) : (
                <div
                  onClick={handleSave}
                  className="text-[#1b63ff] underline cursor-pointer"
                >
                  Save
                </div>
              )}
            </div>
            {loading ? (
              <div className="  h-[80%] flex items-center justify-center ">
                <span className="loader"></span>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Communities
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewCommunities"
                        checked={permissions.viewCommunities}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Communities"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="accessEstates"
                        checked={permissions.accessEstates}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Access Estates"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="addEstate"
                        checked={permissions.addEstate}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Add Estate"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Financials
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewFinancials"
                        checked={permissions.viewFinancials}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Financials"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Integrations
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewIntegrations"
                        checked={permissions.viewIntegrations}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Integrations"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="editAccess"
                        checked={permissions.editAccess}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Edit Access"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="addIntegration"
                        checked={permissions.addIntegration}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Add Integration"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Licenses
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewLicense"
                        checked={permissions.viewLicense}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View License"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="uploadLicense"
                        checked={permissions.uploadLicense}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Upload License"
                  />
                </div>
                <div>
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Settings
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="hasSettingAccess"
                        checked={permissions.hasSettingAccess}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Has Setting Access"
                  />
                </div>
              </div>
            )}

            <div className="mt-[80px]">Delete Role</div>
          </div>
          
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              padding: "5px",
              backgroundColor: "#e9e8e8",
              borderRadius: "50%",
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
            }}
          />
          {addRole ? (
            <div
              style={{
                flex: "2",
              }}
              className="p-6 rounded-xl bg-white min-w-[320px]"
            >
              <div className="flex justify-between">
                <div className="mb-6 font-[500] text-[20px]">
                  Assign Permissions
                </div>
              </div>

              <div className="grid mb-[30px] grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Communities
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewCommunities"
                        checked={permissions.viewCommunities}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Communities"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="accessEstates"
                        checked={permissions.accessEstates}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Access Estates"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="addEstate"
                        checked={permissions.addEstate}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Add Estate"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Financials
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewFinancials"
                        checked={permissions.viewFinancials}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Financials"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Integrations
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewIntegrations"
                        checked={permissions.viewIntegrations}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View Integrations"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="editAccess"
                        checked={permissions.editAccess}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Edit Access"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="addIntegration"
                        checked={permissions.addIntegration}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Add Integration"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Licenses
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="viewLicense"
                        checked={permissions.viewLicense}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="View License"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="uploadLicense"
                        checked={permissions.uploadLicense}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Upload License"
                  />
                </div>
                <div>
                  <div className="mb-1 font-[500] text-[20px] mt-4">
                    Settings
                  </div>
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        all: "unset",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "grey",
                      },
                    }}
                    control={
                      <Checkbox
                        sx={{
                          transform: "scale(0.8)",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            borderRadius: "4px",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            borderColor: "none",
                          },
                        }}
                        name="hasSettingAccess"
                        checked={permissions.hasSettingAccess}
                        onChange={handlePermissionChange}
                      />
                    }
                    label="Has Setting Access"
                  />
                </div>
              </div>
              {loading ? (
                <ButtonLoader />
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                  }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              )}
            </div>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Role
              </Typography>
              <div className="flex flex-col mb-4">
                <label className="mb-2" htmlFor="roleName">
                  Role
                </label>
                <TextField
                  sx={{
                    backgroundColor: "#eaf6ff",
                    width: "100%",
                  }}
                  size="small"
                  id="roleName"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Admin..."
                  variant="outlined"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2" htmlFor="roleDescription">
                  Description
                </label>
                <TextField
                  sx={{
                    backgroundColor: "#eaf6ff",
                    width: "100%",
                  }}
                  size="small"
                  id="roleDescription"
                  value={roleDescription}
                  onChange={(e) => setRoleDescription(e.target.value)}
                  placeholder="This role has access to..."
                  variant="outlined"
                />
              </div>
              <Button
                onClick={() => setAddRole(true)}
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: "100%",
                  my: "30px",
                }}
              >
                Continue
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default RolesAndPermission;
