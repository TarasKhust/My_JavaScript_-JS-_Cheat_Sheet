class Course{
    constructor(data){
        this.name = data.name;
        this.project = data.project;
        this.copleted = data.completed || false;
    }
}

// IIFE function
const CourseServices = (
    () => {
        return {
            complete: (Course) => {
                Course.completed = true;
                console.log('Completing course: ' + Course.name);
            },
            save: (Course) => {
                console.log('Saving course: ' + Course.name);
            }
        }
    }
)();


const CourseServicesFacade = (
() => {
    const Complet = (myCourse) => {
        CourseServices.complete(myCourse);
        if(myCourse.completed){
            CourseServices.save(myCourse);
        } 
    }

    return {
        CompleteMethod: Complet
    }
}
)()

module.exports = { Course, CourseServicesFacade};