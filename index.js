// let questions = ["How are you?", "End"]
// let anwsers = [["a","b","c","d"], ["z","y","x","w"]]

// const next = () => {
//   if(questions.length === 0) {
//     // show results page
//   } else {
//     let nextQ = questions.shift();
//     let nextAs = anwsers.shift();
//     document.getElementById("question").textContent = nextQ;
//     for(let i = 0; i < nextAs.length; ++i) {
//       let label = "la" + (i + 1);
//       document.getElementById(label).textContent = nextAs[i];
//     }
//   }
// }



function checker() {
  result = 0;
  for(let i = 0; i < 6; ++i) {
    let name = "q" + (i + 1);
    let radios = document.getElementsByName(name);

    for (let j = 0; j < radios.length; ++j)
    {
      if (radios[j].checked)
      {
        // do whatever you want with the checked radio
        result += parseInt(radios[j].value);
  
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }

  if(result <= 8) {
    document.getElementById("result").textContent = "You're a yesman";
    console.log(result);
  } else {
    document.getElementById("result").textContent = "You're a noman";
  }
}

document.getElementById("nextQ").addEventListener("click",checker);
