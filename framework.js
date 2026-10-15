class FRNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="biografia.html">Biografia</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
        `;
    }
}
customElements.define("fr-nav", FRNavBar);

class FRAds extends HTMLElement {
    connectedCallback() {
        const ADS = [
            "https://88x31.nl/gifs/000010.gif",
            "https://88x31.nl/gifs/cal_2.gif",
            "https://88x31.nl/gifs/168.gif",
            "https://88x31.nl/gifs/amazing_free_stuff.gif",
            "https://88x31.nl/gifs/17.gif",
            "https://88x31.nl/gifs/amatsuki.gif",
            "https://88x31.nl/gifs/vocaloid.gif",
            "https://88x31.nl/gifs/321.gif",
            "https://88x31.nl/gifs/ostan.gif",
            "https://88x31.nl/gifs/amriel02.gif",
            "https://88x31.nl/gifs/blender_get.gif",
            "https://88x31.nl/gifs/88x31tms.gif",
            "https://88x31.nl/gifs/amiga1200.gif",
            "https://88x31.nl/gifs/70.gif",
            "https://88x31.nl/gifs/caramelldansen.gif",
            "https://88x31.nl/gifs/cheru.png",
            "https://88x31.nl/gifs/herocore.gif",
            "https://88x31.nl/gifs/hiro88.gif",
            "https://88x31.nl/gifs/homernow.gif",
            "https://88x31.nl/gifs/ieget_an.gif",
            "https://88x31.nl/gifs/kawaiibutton.gif",
            "https://88x31.nl/gifs/gerusama.gif",
            "https://88x31.nl/gifs/gnu-linux.gif",
            "https://88x31.nl/gifs/hello_kitty.gif",
            "https://88x31.nl/gifs/mangamaisanime.gif",
            "https://88x31.nl/gifs/miku.gif",
            "https://88x31.nl/gifs/neoratz.gif",
            "https://88x31.nl/gifs/newgame.png",
            "https://88x31.nl/gifs/nyaabanner.gif",
            "https://88x31.nl/gifs/perfectsoldier2.gif",
            "https://88x31.nl/gifs/sasaja_2.gif",
            "https://88x31.nl/gifs/sanhyo.gif",
            "https://88x31.nl/gifs/sel486.gif",
            "https://88x31.nl/gifs/sonic2000now.gif",
            "https://88x31.nl/gifs/stockinganarchy.png",
            "https://88x31.nl/gifs/zanarkand.gif",
            "https://88x31.nl/gifs/z3r0s.gif",
        ];

        let htmlCodeString = "";
        htmlCodeString += `<div id="ads" class="add-wall">`;

        let count = parseInt(this.getAttribute("count"), 10);
        
        const AD_NUM = !isNaN(count) ? count : 16;
        if (AD_NUM > ADS.length) {
            return;
        }
        
        let tempAds = [...ADS];
        let chosenAdAds = [];

        for (let i = 0; i < AD_NUM; i++) {
            let index = Math.floor(Math.random() * tempAds.length);
            let chosenAd = tempAds.splice(index, 1)[0];
            chosenAdAds.push(chosenAd);
        }

        for (let ad of chosenAdAds) {
            htmlCodeString += `<img src="${ad}" width="88" height="31">`;
        }

        htmlCodeString += `</div>`;

        this.innerHTML = htmlCodeString;
    }
}
customElements.define("fr-ads", FRAds);