const linksAleatorios = [
    "http://hinode.com.br", "http://doubleclick.net", "http://live.net", "http://cpfl.com.br",
    "http://natura.com.br", "http://novaescola.org.br", "http://googlevideo.com", "http://r7.com",
    "http://nowanimes.com", "http://banggood.com", "http://olx.com.br", "http://msn.com",
    "http://ondeestameupedido.com", "http://fandom.com", "http://cebraspe.org.br",
    "http://google.com", "http://tudonav.com", "http://meumundoavon.com.br", "http://baixaki.com.br",
    "http://cifraclub.com.br", "http://inss.gov.br", "http://fazenda.sp.gov.br", "http://globo.com",
    "http://antena1.com.br", "http://serpro.gov.br", "http://hostgator.com.br", "http://telegram.org",
    "http://tvefamosos.uol.com.br", "http://video-ad-skipper.com", "http://google.com.br",
    "http://cloudfront.net", "http://gcn.net.br", "http://opantaneiro.com.br", "http://suamusica.com.br",
    "http://avon.com.br", "http://campograndenews.com.br", "http://guiamais.com.br", "http://postgrain.com",
    "http://detran.pa.gov.br", "http://brasil247.com", "http://clear.com.br", "http://filmesonlinehd12.cc",
    "http://leroymerlin.com.br", "http://imgur.com", "http://descomplica.com.br", "http://banco.bradesco",
    "http://santandernetibe.com.br", "http://bol.uol.com.br", "http://gigapromo.com", "http://uniasselvi.com.br",
    "http://hiplatform.com", "http://canva.com", "http://visymo.com", "http://bancobrasil.com.br",
    "http://americanas.com.br", "http://vivo.com.br", "http://youtube.com", "http://grupoclaudino-my.sharepoint.com",
    "http://load21.biz", "http://techtudo.com.br", "http://dspultra.com", "http://disneyplus.com", 
    "http://office.com", "http://detran.mg.gov.br", "http://globalnoticias.online", "http://mercadolivre.com.br",
    "http://jogos360.com.br", "http://wish.com", "http://fsist.com.br", "http://tim.com.br", "http://oantagonista.com",
    "http://scielo.br", "http://usp.br", "http://udemy.com", "http://seligabelojardim.com.br", "http://voegol.com.br",
    "http://stfly.me", "http://ebc.com.br", "http://animezeira.site", "http://crea-go.org.br", "http://zapmeta.com.br",
    "http://brainly.com.br", "http://seucreditodigital.com.br", "http://webmail-seguro.com.br", "http://claro.com.br",
    "http://beeg.com", "http://qpl-search.com", "http://planalto.gov.br"
];

function abrirURLs() {
    const input = document.getElementById("urlInput").value.trim();
    const numLinks = parseInt(document.getElementById("numLinks").value);
    const urls = input.split(/[\s,]+/); // Separa por espaço, vírgula ou nova linha
    const status = document.getElementById("status");
    
    if (urls.length === 0 || input === "") {
        status.textContent = "Por favor, insira ao menos uma URL.";
        return;
    }

    status.textContent = "";
    let openCount = 0;
    
    for (let i = 0; i < urls.length; i += numLinks) {
        const chunk = urls.slice(i, i + numLinks); // Pega o número de links conforme a escolha
        chunk.forEach(url => {
            if (!/^https?:\/\//i.test(url)) {
                url = "http://" + url; // Adiciona http se não tiver
            }
            window.open(url, '_blank');
        });
        openCount += chunk.length;
    }
    
    status.textContent = `Foram abertos ${openCount} links.`;
}

function limparURLs() {
    document.getElementById("urlInput").value = "";
    document.getElementById("status").textContent = "";
}

function sugerirLinks() {
    const numLinks = parseInt(document.getElementById("numLinks").value);
    const sugestoes = [];
    
    while (sugestoes.length < numLinks) {
        const linkAleatorio = linksAleatorios[Math.floor(Math.random() * linksAleatorios.length)];
        if (!sugestoes.includes(linkAleatorio)) {
            sugestoes.push(linkAleatorio);
        }
    }
    
    document.getElementById("urlInput").value = sugestoes.join("\n");
}
