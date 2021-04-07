function sexChange() {
  var x = document.getElementById("sex").value;
  if(x=="Masculino"){
    document.getElementById('sexImg').src='https://i.imgur.com/GRblnFD.png';
  }else{
    document.getElementById('sexImg').src='https://imgur.com/NclwEXN.png';
  }
}

function nivelChange(){
  var x = document.getElementById("nivel").value;
  if(x<=1){
    document.getElementById('pontos').value = 6;
  }else{
    document.getElementById('pontos').value = 6+3*(x-1);
  }
}

function pontosChange(){
  var x = document.getElementById("pontos").value;
  document.getElementById('pontosRestantes').value = x;
}

function addAtbPoint(x){
  var y = parseInt(document.getElementById(x).value);
  if(document.getElementById('pontosRestantes').value > 0){
    document.getElementById(x).value = y + 1;
    document.getElementById('pontosRestantes').value -=1;
    vanDis();
  }
}

function remAtbPoint(x){
  var y = parseInt(document.getElementById(x).value);
  var z = parseInt(document.getElementById('pontosRestantes').value);//precisa de parseint Se não não soma o valor 
  if(y>0)
  {
    //if(z < parseInt(document.getElementById("pontos").value)){
      document.getElementById(x).value = y - 1;
      document.getElementById('pontosRestantes').value = z + 1;
      vanEnb();
    //}
  }
}

var restHblPoint;

function attbRestPoint(x){
    restHblPoint = parseInt(document.getElementById(x).value);
    return restHblPoint;
}

function addHblPoint(x){
  var y = parseInt(document.getElementById(x).value);
  if(restHblPoint > 0){
    document.getElementById(x).value = y + 1;
    restHblPoint -=1;
    return restHblPoint;
  }
}

function remHblPoint(x){
  var y = parseInt(document.getElementById(x).value);
  if(y>0)
  {
    //if(restHblPoint < document.getElementById('a2').value ){// o codigo abaixo só irá funcionar se os pontos de habilidade restantes forem menor do que o numero de
      document.getElementById(x).value = y - 1; //remove o ponto atribuido da uma habilidade especifica
      restHblPoint += 1;// adiciona um ponto de habilidade restante
      return restHblPoint;
    //}
  }
}

function vanDis(){//vantagem Disable desabilita da opção de vantagem
  if (document.getElementById('pontosRestantes').value <= 0){
    for (i = 1; i <= 6; i++) {
      if(document.getElementById('van'+i).value =="nenhum"){
        document.getElementById('van'+i).disabled = true;
      }
    }
  }
}

function vanEnb(){//vantagem Enable habilita da opção de vantagem
  if (document.getElementById('pontosRestantes').value > 0){
    for (i = 1; i <= 6; i++) {
      document.getElementById('van'+i).disabled = false;
    }
  }
}

var val =[];//variavel de nome val se ela for == true ou seja 

function vanChange(x){
  for (i = 1; i <= 6; i++) {
    if(x==('van'+i)){
      if(document.getElementById(x).value =="nenhum"){
        document.getElementById('pontosRestantes').value = parseInt(document.getElementById('pontosRestantes').value) +1;
        val[i]=1;
        vanEnb();
      }else{
        if(val[i]==undefined || val[i]==1){
          document.getElementById('pontosRestantes').value -=1;
        }
        vanDis();
        val[i]=0;
      }
    }
  }
}