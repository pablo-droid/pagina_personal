class FRAds extends HTMLElement {
    connectedCallback() {
        const ads = [
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
        htmlCodeString += `<div class="gallery">`;

        const count = parseInt(this.getAttribute("count"), 10);

        const ad_num = !isNaN(count) ? count : 16;

        let tempAds = [...ads];
        const chosenAdAds = [];

        for (let i = 0; i < ad_num; i++) {
            if (tempAds.length === 0) {
                tempAds = [...ads];
            }

            let index = Math.floor(Math.random() * tempAds.length);
            let chosenAd = tempAds.splice(index, 1)[0];
            chosenAdAds.push(chosenAd);
        }

        for (let ad of chosenAdAds) {
            htmlCodeString += `<a href="https://88x31.nl/" target="_blank" rel="noopener noreferrer">`;
            htmlCodeString += `<img src="${ad}" alt="anuncio">`;
            htmlCodeString += `</a>`;
        }

        htmlCodeString += `</div>`;

        this.innerHTML = htmlCodeString;
    }
}
customElements.define("fr-ads", FRAds);

class FRDanmaku extends HTMLElement {
    connectedCallback() {
        this.danmakuSave = "danmaku_save";
        this.currentDanmakuIndex = 0;
        this.localDanmaku = [
            "wwwwwwwwwwwwwwwwwww",
            "hola",
            "hola que tal",
            "buenas soy Jhon Work, encantado de conocerte",
            "bienvenido a mi pagina",
            "saludos cordiales, mi estimado",
            "(=^·ω·^=)ﾉ",
            "こんにちは！ジョン・ワークですぼくのウェブページへようこそ！"
        ];

        this.style.pointerEvents = "none";
        this.style.touchAction = "none";
        this.style.position = "fixed";
        this.style.zIndex = 9999;
        this.style.overflow = "hidden";
        this.style.top = "0";
        this.style.left = "0";
        this.style.width = "100vw";
        this.style.height = "100vh";

        if (!document.getElementById("danmaku")) {
            let danmakuStyle = document.createElement("style");
            danmakuStyle.id = "danmaku";
            danmakuStyle.textContent = `
                @keyframes bullet_text_anim {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100vw - 100%));
                    }
                }
            `;
            document.head.appendChild(danmakuStyle);
        }

        setInterval(() => {
            let danmakuArray = [];

            try {
                danmakuArray = JSON.parse(localStorage.getItem(this.danmakuSave)) || [];
            } catch(error) {
                danmakuArray = [];
            }

            const DANMAKU_ARRAY = this.localDanmaku.concat(danmakuArray);
            if (DANMAKU_ARRAY.length > 0) {
                if (this.currentDanmakuIndex >= DANMAKU_ARRAY.length) {
                this.currentDanmakuIndex = 0;
                }
                this.addBulletText(DANMAKU_ARRAY[this.currentDanmakuIndex]);
                this.currentDanmakuIndex = (this.currentDanmakuIndex + 1) % DANMAKU_ARRAY.length;
            }
        }, 0.5 * 1000);
    }

    addBulletText(inText) {
        let textDiv = document.createElement("div");
        textDiv.textContent = inText;
        textDiv.style.position = "absolute";
        textDiv.style.whiteSpace = "nowrap";
        textDiv.style.fontSize = "35px";
        textDiv.style.fontWeight = "bold";
        textDiv.style.color = "#ffffff";
        textDiv.style.webkitTextStroke = "2px #000000";
        textDiv.style.left = "100vw";
        const RAND_LOCATION = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
        textDiv.style.top = `${RAND_LOCATION}%`;
        textDiv.style.animation = "bullet_text_anim 5s linear forwards";
        textDiv.addEventListener("animationend", () => {
            textDiv.remove();
        });

        this.appendChild(textDiv);
    }
};
customElements.define("fr-danmaku", FRDanmaku);

const DANMAKU_FORM = document.getElementById("danmaku-form");

if (DANMAKU_FORM != null) {
    DANMAKU_FORM.addEventListener("submit", (event) => {
        event.preventDefault();

        const TEXT = event.target.elements["danmaku-input"].value;
        const DANMAKU = document.querySelector("fr-danmaku");

        if (DANMAKU != null && TEXT !== "") {
            DANMAKU.addBulletText(TEXT);

            try {
                let danmakuArray = JSON.parse(localStorage.getItem(DANMAKU.danmakuSave)) || [];
                danmakuArray.push(TEXT);
                localStorage.setItem(DANMAKU.danmakuSave, JSON.stringify(danmakuArray));
            } catch(error) {
                DANMAKU.localDanmaku.push(TEXT);
            }
        }

        DANMAKU_FORM.reset();
    });
}