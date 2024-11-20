// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const invalidFeedback = document.querySelectorAll('.alert')[0]
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        invalidFeedback.classList.add('d-none')
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          invalidFeedback.classList.remove('d-none')
        }
  
        form.classList.add('was-validated')
        
      }, false)
    })
  })()