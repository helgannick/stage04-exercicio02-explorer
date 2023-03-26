

const estudantes = [
    { nome: "Alice", nota1: 8, nota2: 7 },
    { nome: "Bob", nota1: 10, nota2: 5 },
    { nome: "Carlos", nota1: 7, nota2: 7 },
    { nome: "Daniel", nota1: 5, nota2: 8 },
    { nome: "Eva", nota1: 7, nota2: 5 }
  ];
  
  
  function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
  }
  
  
  const mediaParaAprovacao = 7;

  estudantes.forEach(function(estudante) {
    const media = calcularMedia(estudante.nota1, estudante.nota2);
    const aprovado = media >= mediaParaAprovacao;
   
    if (aprovado){
        alert(`A média do(a) aluno(a) ${estudante.nome} é : ${media} \n Parabéns ${estudante.nome}! Você foi aprovado(a) no concurso!`)

    }else{
        alert(`A média do(a) aluno(a) ${estudante.nome} é : ${media} \n Não foi dessa vez ${estudante.nome}! Tente novamente!`)
    }
    
    
  });



