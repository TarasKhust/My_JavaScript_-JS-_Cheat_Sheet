class Course {
    constructor(data) {
        this.flyWeight = FlyweightFactory.get(data.user, data.completed);
        this.title = data.title

    }
}

class FlyWeight {
    constructor(user, completed){
        this.user = user,
        this.completed = completed
    }
}

const FlyweightFactory = (() => {
    const flyWeights = {};

    const get = (user, completed) => {

        if(!flyWeights[user + completed]){
            flyWeights[user + completed] = new FlyWeight(user, completed);
        }

        return flyWeights[user + completed];
    }

    const getCount = () => {
        let count = 0;
        for(f in flyWeights) count++;
        return count;
    }

    return {
        get: get,
        getCount: getCount
    }


})();

const users = ['Alex', 'Paul', 'John', 'Julia'];
const completed = [true, false];

const CourseMethods = function() {

    const courses = {};
    let count = 0;


    const add = (data) => {
        courses[data.title] = new Course(data);
        count++;
    }

    const get = (title) => {
        return courses[title];
    }

    const getCount = () => {
        return count;
    }

    return {
        add: add,
        get: get,
        getCout: getCount
    }
}

const courses = new CourseMethods;

const numCourses = 1000000;

const initialMemory = process.memoryUsage().heapUsed;

for(let i = 0; i < numCourses; i++) {

    courses.add({
        title: i + ' .course',
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
}


const finalMemory = process.memoryUsage().heapUsed;


const usedMemory = ((finalMemory - initialMemory) / 1000000).toFixed(2);

console.log('used memory: ' + usedMemory + ' mb');

