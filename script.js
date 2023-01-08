console.log('script')

const breakTask = document.getElementById('break'),
    readingTask = document.getElementById('reading'),
    guitarTask = document.getElementById('guitar'),
    sportTask = document.getElementById('sport'),
    petProjectTask = document.getElementById('pet-project'),
    workTask = document.getElementById('work'),
    deselectBtn = document.getElementById('deselect')

    let selectedColor, active

    //EVENT LISTENERS

    // Select tasks

    function selectTask(task, color) {
        task.classList.toggle('selected');
        if(task.classList.contains('selected')){
            active = true
            selectedColor = color
            return selectedColor
        } else {
            active = false
        }
    }

    // Reset task
    function resetTassks(){
        const allTasks = document.querySelectorAll('.task__name')

        allTasks.forEach((item)=>{
            item.className = 'task__name'
        })
    }