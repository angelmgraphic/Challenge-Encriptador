

  function click_encriptar() {

    var texto_codificado = [];
    var  input_mensaje = document.querySelector("#mensaje").value;
    document.getElementById("resultado").innerHTML =  "";

    for (var contador = 0; contador <= input_mensaje.length-1; contador++) {


      console.log(input_mensaje.charAt(contador));

      if (input_mensaje.charAt(contador) == "e") {

          //texto_codificado.push("enter");
          document.getElementById("resultado").innerHTML +=  "enter";

      } else {

        if (input_mensaje.charAt(contador) == "i") {

          //texto_codificado.push("imes");
          document.getElementById("resultado").innerHTML +=  "imes";

        } else {

          if (input_mensaje.charAt(contador) == "a") {

            //texto_codificado.push("ai");
            document.getElementById("resultado").innerHTML +=  "ai";

          } else {

            if (input_mensaje.charAt(contador) == "o") {

              //texto_codificado.push("ober");
              document.getElementById("resultado").innerHTML +=  "ober";

            } else {

              if (input_mensaje.charAt(contador) == "u") {

                //texto_codificado.push("ufas");
                document.getElementById("resultado").innerHTML +=  "ufat";

              } else {

                //texto_codificado.push(input_mensaje.charAt(contador));
                document.getElementById("resultado").innerHTML +=  input_mensaje.charAt(contador);

              }

            }

          }

        }

      }


    }

    input_mensaje = document.querySelector("#mensaje").value = "";

    console.log(texto_codificado);

  }

  //Desencriptar--------------------------------------------------------------------------------------------------------------------------------

  function click_deencriptar() {

    var texto_dedecodificado = [];

    var  input_mensaje = document.querySelector("#mensaje").value;
    document.getElementById("resultado").innerHTML =  "";


    for (var contador = 0; contador <= input_mensaje.length-1; contador++) {

      console.log(input_mensaje.charAt(contador));

      if (input_mensaje.charAt(contador) == "e") {

        document.getElementById("resultado").innerHTML +=  "e";
        contador = contador + 4;

      } else {

        if (input_mensaje.charAt(contador) == "i") {

          document.getElementById("resultado").innerHTML +=  "i";
          contador = contador + 3;

        } else {

          if (input_mensaje.charAt(contador) == "a") {

            document.getElementById("resultado").innerHTML +=  "a";
            contador = contador + 1;

          } else {

            if (input_mensaje.charAt(contador) == "o") {

              document.getElementById("resultado").innerHTML +=  "o";
              contador = contador + 3;

            } else {

              if (input_mensaje.charAt(contador) == "u") {

                document.getElementById("resultado").innerHTML +=  "u";
                contador = contador + 3;

              } else {

                document.getElementById("resultado").innerHTML +=  input_mensaje.charAt(contador);

              }

            }

          }

        }

      }

    }

    input_mensaje = document.querySelector("#mensaje").value = "";

  }


  function copiar() {

    const elemento = document.querySelector("#resultado");
    const textoOculto = document.createElement("input");

    textoOculto.setAttribute("value", elemento.innerText);

    document.body.appendChild(textoOculto);

    textoOculto.select();

    document.execCommand("copy")

    document.body.removeChild(textoOculto);

    console.log(textoOculto);

  }
