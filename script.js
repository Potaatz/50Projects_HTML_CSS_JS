const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log('works')
        deactivateAll()
        panel.classList.add('active')
        console.log(panel)
    })
})

function deactivateAll(){
    panels.forEach(panel => {
        panel.classList.remove('active')
        
    });
        
}
