import { Subjects } from "./subjects";

export interface ScreenshotFinishedEvent {
    subject: Subjects.ScreenshotFinished,
    data: {
        id: string;
        cloudinary_url: string;
        cloudinary_id: string;
        cloudinary_version: string;
        width:number;
        height:number;
        bytes:number;
        format:string;
    }
}