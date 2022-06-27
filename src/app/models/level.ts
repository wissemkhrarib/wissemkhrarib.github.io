export interface Description{
    id: string;
    text: string;
}
export interface Lesson{
    id: string;
    name: string;
    video: string;
    descriptions: Description[];
}
export interface Chapter{
    id: string;
    name: string;
    lessons: Lesson[];
}
export interface Subject{
    id: string;
    name: string;
    icon: string;
    chapters: Chapter[];
}

export interface Level{
    id: string;
    name: string;
    icon: string;
    subjects: Subject[]
}
//-------------
interface SubjectDetails{
    id: string;
    name: string
    icon: string;
    levels: Level[];
}
export interface ChapterDetails{
    id: string;
    name: string;
    subjects: SubjectDetails[];
}
export interface LessonDetails{
    id: string;
    name: string;
    video: string;
    num: string;
    thumbnail: string;
    chapter: ChapterDetails
}
export interface LessonsPageData{
    count: number;
    next: string;
    previous: string;
    results: LessonDetails []
}