import {v2 as cloudinary} from "cloudinary"
import {CLOUDINARY_CN,CLOUDINARY_SECRET,CLOUDINARY_KEY} from '../config.js'


cloudinary.config({ 
    cloud_name: CLOUDINARY_CN, 
    api_key: CLOUDINARY_KEY, 
    api_secret: CLOUDINARY_SECRET,
    secure: true
  });

export const uploadFile= async (filePath)=>{
    return await cloudinary.uploader.upload(filePath,{
        folder:'SM_images'
    });
}

export const deleteFile=async (imageID)=>{
    await cloudinary.uploader.destroy(imageID)
}