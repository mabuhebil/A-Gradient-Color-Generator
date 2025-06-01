const inputs = document.querySelectorAll('.colors input');
const showBox = document.querySelector('.show_box')
const select = document.querySelector('select')

const generatecolors = () => {
    const colors = `linear-gradient(${select.value},${inputs[0].value}, ${inputs[1].value})`
    showBox.style.background = colors;
}

inputs.forEach(input => {
    input.addEventListener('input', generatecolors)
})

select.addEventListener('change', generatecolors)


