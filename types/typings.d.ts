import { Key } from "react";

export interface myInfo{
    _id:any,
    name:string,
    heroPageImgUrl:string,
    aboutMePageImgUrl:string,
    description:string,
    phoneNumber:Number,
    mail:String,
    address:String
}
export interface FormValues{
    name:string,
    email:string,
    subject:string,
    body:string
}
export interface project{
    _id: Key | null | undefined;
    img:string,
    description:string,
    title:string,
    demoUrl:string,
    githubUrl:string
}
export interface skill{
    _id: Key | null | undefined;
    directionLeft:any;
    imgUrl:string,
    Percent:any;
    name: string;
}
export interface library{
    _id: Key | null | undefined;
    imgUrl:string,
    name: string;
}