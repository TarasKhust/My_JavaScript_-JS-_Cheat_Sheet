class Course {
    constructor(data) {
        this.title = data.title, 
        this.user = data.user,
        this.completed = data.completed
    }
}

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

