export default function tasksStorage() {

    function getTasks() {
        return JSON.parse(sessionStorage.getItem('tasks'));
    }

    function setTasks(tasks) {
        sessionStorage.setItem('tasks', JSON.stringify(tasks))
    }
}