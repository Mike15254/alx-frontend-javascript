import { uploadPhoto, createUser } from "./utils";

// const asyncUploadUser = async () => {
//    let photo;
//    let user;
//    try {
//       photo = await uploadPhoto();
//       user = await createUser();
//    } catch (error) {
//       photo = null;
//       user = null
//    }
//    return { photo, user };
// }

// export default asyncUploadUser;


export default async function asyncUploadUser() {
   let photo;
   let user;
   try {
     photo = await uploadPhoto();
     user = await createUser();
   } catch (e) {
     photo = null;
     user = null;
   }
   return { photo, user };
 }
 