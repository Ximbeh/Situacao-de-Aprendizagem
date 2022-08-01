const historico = new Array()


function printhistorico(){
    for (let index = 0; index < historico.length; index++) {
        const element = historico[index];
        var divNova = document.createElement("div");
        divNova.setAttribute("class", "enzo")
        var html = document.createElement("p")
        html.innerText = element
        divNova.appendChild(html)
        document.body.appendChild(divNova)
    }

}

const rendimento = function(){
    let x = document.getElementById('q1').value
    let y = document.getElementById('q2').value
    z = parseFloat(x) / parseFloat(y)
    document.getElementById('n').value =  z - 1
    rendimentohistorico = `${x}/${y}=${z}`
    historico.push(rendimentohistorico)
    console.log(historico)
    printhistorico()
    }




    


    const energia = function(){
        let x = document.getElementById('q3').value
        let y = document.getElementById('q4').value
        z = parseFloat(x) - parseFloat(y)
        document.getElementById('q5').value =  z 
        energiahistorico = `${x}-${y}=${z}`
        historico.push(energiahistorico)
        console.log(historico)
        printhistorico()
        console.log(z)
        }
    



        const trabalho = function(){
            let x = document.getElementById('q6').value
            let y = document.getElementById('q7').value
            z = parseFloat(x) - parseFloat(y)
            document.getElementById('q8').value =  z 
            trabalhohistorico = `${x}-${y}=${z}`
            historico.push(trabalhohistorico)
            console.log(historico)
            printhistorico()
            console.log(z)
            }
  

            const calor = function(){
                let x = document.getElementById('q9').value
                let y = document.getElementById('q10').value
                z = parseFloat(x) + parseFloat(y)
                document.getElementById('q11').value =  z 
                calorhistorico = `${x}+${y}=${z}`
                historico.push(calorhistorico)
                console.log(historico)
                printhistorico()
                console.log(z)
                }
