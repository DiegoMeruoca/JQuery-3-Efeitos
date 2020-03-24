$(document).ready(function(){//Função executada apos carregar o documento	
	$("#slider li:first").fadeIn(2000);//Aplica fadeIn na primeira imagem
	window.setInterval("carrossel()",6000);//A cada 4 seg chama o carrossel
	$("#avanca").click(function(){//Função do click no bt avançar
			carrossel();//Chama o carrossel para passar a imagem
	});
	$("#volta").click(function(){//Função do click no bt voltar
			carrosselvolta();//Chama o carrosselvolta para voltar a imagem
	});
});	
function carrossel(){//Função do carrossel
		let ativo = $("#slider .ativo");/*let ativo recebe o item que estiver com
		a classe ativo no momento*/
		if ($(ativo.next()).length){//Se existe mais um item a frente do ativo
			let proximo = ativo.next();//let proximo recebe o proximo item
		}else{//Senão existe mais um item a frente do ativo
		 let proximo = $("#slider li:first");//let proximo recebe o primeiro item
		}
		proximo.addClass("ativo").fadeIn(2000);/*Adiciona a classe ativo no proximo
		e aplica im efeito de fadeIn nele*/
		ativo.removeClass("ativo").fadeOut(2000);/*Revome a classe atico do atial
		item ativo e aplica um efeito de fadeOut nele*/
		
}
function carrosselvolta(){//Função do carrossel para voltar
		let ativo = $("#slider .ativo");/*let ativo recebe o item que estiver com
		a classe ativo no momento*/
		if ($(ativo.prev()).length){//Se existe mais um item atrás do ativo
			let anterior = ativo.prev();//let anterior recebe o item anterior
		}else{//Senão existe mais um item atrás do ativo
		 let anterior = $("#slider li:last");//let anterior recebe o ultimo item
		}
		anterior.addClass("ativo").fadeIn(2000);/*Adiciona a classe ativo no anterior
		e aplica im efeito de fadeIn nele*/
		ativo.removeClass("ativo").fadeOut(2000);/*Revome a classe ativo do atual
		item ativo e aplica um efeito de fadeOut nele*/	
}
