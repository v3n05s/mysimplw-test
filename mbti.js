
document.getElementById('16Mbti').addEventListener('submit' ,function(event){
event.preventDefault();
let score = {
    E:0 , I:0,
    S:0, N:0,
    T:0, F:0,
    J:0, P:0
}
let answers =[

    document.querySelector('input[name="q1"]:checked').value,
    document.querySelector('input[name="q2"]:checked').value,
    document.querySelector('input[name="q3"]:checked').value,
    document.querySelector('input[name="q4"]:checked').value,
    document.querySelector('input[name="q5"]:checked').value,
    document.querySelector('input[name="q6"]:checked').value,
    document.querySelector('input[name="q7"]:checked').value,
    document.querySelector('input[name="q8"]:checked').value,
    document.querySelector('input[name="q9"]:checked').value,
    document.querySelector('input[name="q10"]:checked').value,
    document.querySelector('input[name="q11"]:checked').value,
    document.querySelector('input[name="q12"]:checked').value,

];
answers.forEach(function(answer){
    if (answer.startsWith('E')) score.E++;
      if (answer.startsWith('I')) score.I++;
      if (answer.startsWith('S')) score.S++;
      if (answer.startsWith('N')) score.N++;
      if (answer.startsWith('T')) score.T++;
      if (answer.startsWith('F')) score.F++;
      if (answer.startsWith('J')) score.J++;
      if (answer.startsWith('P')) score.P++;
})

let mbtiType = '';
  mbtiType += score.E > score.I ? 'E' : 'I';
  mbtiType += score.S > score.N ? 'S' : 'N';
  mbtiType += score.T > score.F ? 'T' : 'F';
  mbtiType += score.J > score.P ? 'J' : 'P';



document.getElementById('result').textContent = mbtiType;
document.getElementById('retryBtn').style.display='block';
});
document.getElementById('retryBtn').addEventListener('click',function(){


document.getElementById('16Mbti').reset();
document.getElementById('result').textContent=' ';
document.getElementById('retryBtn').style.display='none';
});