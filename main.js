const inputs = document.querySelectorAll('.colors input');
const showBox = document.querySelector('.show_box')
const select = document.querySelector('select')
const textarea = document.querySelector('textarea')
const refreshBtn = document.querySelector('.refresh')
const copyBtn = document.querySelector('.copy')


const genareteRondomColor = () => {
    const hexcolor = Math.floor(Math.random() * 0xffffff).toString(16)
    return `#${hexcolor}`
}


const generatecolors = (isRondom) => {
    if (isRondom) {
        inputs[0].value = genareteRondomColor();
        inputs[1].value = genareteRondomColor();
    }
    const colors = `linear-gradient(${select.value},${inputs[0].value}, ${inputs[1].value})`
    showBox.style.background = colors;
    textarea.value = `background:${colors}`
}


inputs.forEach(input => {
    input.addEventListener('input', () => generatecolors(false))
})

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value)
    copyBtn.textContent = 'code copeid'
    setTimeout(() => copyBtn.textContent = 'copy Code', 1600)
}


select.addEventListener('change', () => generatecolors(false))
refreshBtn.addEventListener('click', () => generatecolors(true))
copyBtn.addEventListener('click', copyCode)