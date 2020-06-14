import {getAllCourses} from "./courses-service";

export const getSearchHistory = () => {
    const searchesHistory =['C#', 'react native'];
    return searchesHistory;
}
export const getSearchCourses = (searchString) => {
    const allCourses = getAllCourses('');
    const result = allCourses.filter(item => {
        const courseName = item.name.toUpperCase();
        const text = searchString.toUpperCase();
        return (courseName.indexOf(text) > -1);
    });
    return result;
}
