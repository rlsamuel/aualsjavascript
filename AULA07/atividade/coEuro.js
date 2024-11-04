   function valor() {
let real = parseFloat(prompt(`digite um valor em real`))

let euro = 6.15

let valorfinal = real/euro

return valorfinal.toFixed(2)

    
}

alert(valor())