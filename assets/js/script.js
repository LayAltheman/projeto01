    //redirecionar pagina inicial para o app.html
    function aplicacao() {
        window.location = './pages/app.html';
    }

    //permitir apenas números no input do app.html
    const phone = (event) => {
        let input = event.target;
        input.value = mask(input.value);
    }

    const mask = (value) => {
        if (!value) return "";
        value = value.replace(/\D/g,'');
        value = value.replace(/(\d{2})(\d)/,"($1) $2");
        value = value.replace(/(\d)(\d{4})$/,"$1-$2");
        return value;
    }
    //formulário app.html
        var selectDDI = document.getElementById('cod-pais');
        var inputTel = document.getElementById('num-telefone');
        var inputMessage = document.getElementById('message');
        var btn = document.getElementById('send');

        let ddi;
        let tel;
        let encode;

        selectDDI.addEventListener('change', capDDI);
        inputTel.addEventListener('change', capTel);
        inputMessage.addEventListener('change', capMessage);
        btn.addEventListener('click', openApp);

        function capDDI() {
            var ddi = document.getElementById('cod-pais').value;
            return ddi;
        }
        
        function capTel() {
            var tel = document.getElementById('num-telefone').value;
            return tel;
        }
        
        function capMessage() {
            var message = document.getElementById('message').value;
            var encode = window.encodeURI(message);
            return encode;
        }   
        function openApp() {
            var url = 'https://web.whatsapp.com/send?phone=' + capDDI() + capTel() + '&text=' + capMessage();
            window.open(url);
        }

        
