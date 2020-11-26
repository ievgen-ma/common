import {Subjects} from './subjects'

export interface ScreenshotCreatedEvent {
    subject: Subjects.ScreenshotCreated,
    data: {
        id: string;
        url: string;
    }
}