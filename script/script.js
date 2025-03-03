const form = document.getElementById('form')
const inputEmail = document.querySelector('.input__email')
const inputPass = document.querySelector('.input__password')

const spanValidEm = document.querySelector('.validationEM__true')
const spanValidPS = document.querySelector('.validationPS__true')

const btnSend = document.querySelector('.btn__send')

form.addEventListener('input', function() {
  const inputValues = takeInput()
  validation(inputValues.inEm, inputValues.inPs)

})

btnSend.addEventListener('.click', function(event) {
  event.preventDefault()
  const inputValues = takeInput()
  validationPs(inputValues.inPs)
})

function validationPs(inPs) {
  console.log(inPs)
if (inPs > 0 && inPs < 10) {
  spanValidPS.classList.add('validationPS__false')
} else {
  spanValidPS.classList.remove('validationPS__false')
}
}

function takeInput() {
  const inEm = inputEmail.value.length
  const inPs = inputPass.value.length

  return {
    inEm: inEm,
    inPs: inPs
  }
}


function validation(inEm, inPs) {
  if (inEm > 4) {
    spanValidEm.classList.add('validationEM__false')
  } else {
    spanValidEm.classList.remove('validationEM__false')
  }

  if (inPs > 4) {
    spanValidPS.classList.add('validationPS__false')
  } else {
    spanValidPS.classList.remove('validationPS__false')
  }
}

