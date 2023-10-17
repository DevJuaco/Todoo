const 
    $containerItems = document.querySelector('[data-items]'),
    $taskInput = document.querySelector('[data-input-task]'),
    $inputButton = document.querySelector('[data-input-button]')

function addNewTask () {
    $inputButton.addEventListener('click', () => {
        tarea = $taskInput.value
        
        let $okImg = document.createElement('img')
        $okImg.src = './../assets/icons8-de-acuerdo.svg'
        $containerItems.appendChild($okImg)

        let $taskText = document.createElement('p')
        $taskText.textContent = tarea

        $containerItems.appendChild($taskText)
        $taskInput.value = ''

        let $xImg = document.createElement('img')
        $xImg.src = './../assets/icons8-x.svg'
        $containerItems.appendChild($xImg)
        
    })
}

addNewTask()