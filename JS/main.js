

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url="http://viacep.com.br/ws/"+cep+"/json"
    console.log("cep");
    $.ajax({
        url: url,
        type: "GET",
        success: function (response){
            console.log(response);
            $(".barra-progresso").show();
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#tituloCep").html("CEP " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})

