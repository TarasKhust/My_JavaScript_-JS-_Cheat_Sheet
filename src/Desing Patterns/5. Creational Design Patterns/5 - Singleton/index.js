const Singleton = (() => {
    let course;

    const assignCourse = () => {
        const course = new Object('JavaScript');
        return course;
    }

    return {
        getInstance: ()=>{
            if (!course) {
                course =assignCourse;
            }
            return course;
        }
    }

})();

const buyFirstTime = Singleton.getInstance();
const buySecondTime = Singleton.getInstance();

if (buyFirstTime === buySecondTime) {
    console.log('Go to Course');
}
