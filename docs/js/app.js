import { Net } from "./net";

export class App {
    static init() {
        if (location.pathname !== "/inv") {
            window.location = "about:blank";
        }

        // init sections
        this.sections = document.getElementsByTagName("section");

        // init reveals
        this.reveals = document.getElementsByClassName("reveal");
        window.addEventListener("scroll", () => this.reveal());

        // init live streaming button
        this.live_streaming_buttons = document.querySelectorAll("#liveStreaming");
        this.live_streaming_buttons.forEach(button => button.onclick = function () {
            location.href = "https://bit.ly/live-streaming-link";
        });

        // init open invitation button
        this.open_invitation_button = document.getElementById("openInvitationButton");
        this.open_invitation_button.onclick = () => this.open_invitation();

        // init audio
        this.audio = document.getElementById('audio');
        this.play_audio_button = document.getElementById("playAudio");
        this.pause_audio_button = document.getElementById("pauseAudio");
        this.play_audio_button.addEventListener("click", () => this.play_audio());
        this.pause_audio_button.addEventListener("click", () => this.pause_audio());

        // init form
        this.rsvp_forms = document.querySelectorAll('.rsvp-form');
        this.congratulations_form = document.querySelector('.congratulations-form');
        
        this.form_name = document.getElementById("formName");
        this.form_congratulation = document.getElementById("formCongratulations");
        this.form_presence = document.getElementsByName("formPresence");
        this.form_total_audience = document.getElementsByName("formTotalAudience");
        

        let guestParam = /[&?]to=([^&]+)/.exec(location.search);
        if (guestParam) {
            let name = decodeURIComponent(guestParam[1]);
            name = name.split("_").join(" ");
            document.querySelector('.guest-name').innerText = decodeURIComponent(name);
            // this.form_name.value = name;
        }

        let timeParam = /[&?]t=([^&]+)/.exec(location.search);
        if (timeParam) {
            let time = decodeURIComponent(timeParam[1]);
            if (time === "1") {
                document.getElementById("akadNikah").style.display = "none";
                document.getElementById("resepsi").style.display = "none";
                document.getElementById("resepsiSesi1").style.display = "block";
                document.getElementById("resepsiSesi2").style.display = "none";
            } else if (time === "2") {
                document.getElementById("akadNikah").style.display = "none";
                document.getElementById("resepsi").style.display = "none";
                document.getElementById("resepsiSesi1").style.display = "none";
                document.getElementById("resepsiSesi2").style.display = "block";
            }
        }

        this.open_maps_button = document.getElementById('openMaps');
        this.open_maps_button.onclick = () => this.open_maps();

        this.congratulation_list = document.querySelector("#congratulationsList");
        this.load_congratulations();

        this.form_submit_button = document.getElementById("formSubmit");
        this.form_submit_button.onclick = () => this.save_congratulation();

        this.copy_to_clip_button_1 = document.getElementById("copyToClip1");
        this.copy_to_clip_button_1.onclick = () => this.copyToClipboard1();

        this.copy_to_clip_button_2 = document.getElementById("copyToClip2");
        this.copy_to_clip_button_2.onclick = () => this.copyToClipboard2();
        
        // Get the modal
        this.gift_modal = document.getElementById("giftModal");

        // Get the button that opens the modal
        this.modal_btn = document.getElementById("modalBtn");

        // Get the <span> element that closes the modal
        this.modal_close_span = document.getElementsByClassName("modal-close")[0];

        // When the user clicks on the button, open the modal
        this.modal_btn.onclick = () => {
            this.gift_modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        this.modal_close_span.onclick = () => {
            this.gift_modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target == this.gift_modal) {
                this.gift_modal.style.display = "none";
            }
        }

        this.csrf_token = document.querySelector('[name="_csrf"]');
        Net.post("/form").then((res) => {
            this.csrf_token.value = res;
        });
    }
    static open_invitation() {
        let pageHeight = window.innerHeight;
        window.scrollBy(0, pageHeight);

        this.play_audio_button.click();
        this.play_audio_button.style.display = "none";
    }
    static countdown = () => {
        // specify the date and time we are counting down to.
        const countDate = new Date("2025-01-5T00:00:00.000+07:00").getTime();
        const now = new Date().getTime();
    
        // calculate remaining time
        const remainingTime = countDate - now;
    
        // workout the time in days, hours, mins, seconds
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(remainingTime / day);
        const textHour = Math.floor((remainingTime % day) / hour);
        const textMinute = Math.floor((remainingTime % hour) / minute);
        const textSecond = Math.floor((remainingTime % minute) / second);
    
        document.querySelector(".day-2").innerText = textDay > 0 ? textDay : 0;
        document.querySelector(".hour-2").innerText = textHour > 0 ? textHour : 0;
        document.querySelector(".minute-2").innerText = textMinute > 0 ? textMinute : 0;
        document.querySelector(".second-2").innerText = textSecond > 0 ? textSecond : 0;
    };
    static reveal() {
        for (var i = 0; i < this.reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = this.reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                this.reveals[i].classList.add("active");
            } else {
                this.reveals[i].classList.remove("active");
            }
        }
    }
    static open_maps() {
        window.open("https://goo.gl/maps/gY69sfQoqaogec8j8");
    }
    static async save_congratulation() {
        let presence = "absent";
        if (this.form_presence) {
            for(let i = 0; i < this.form_presence.length; i++) {
                if (this.form_presence[i].checked) {
                    presence = this.form_presence[i].value;
                }
                break;
            }
        }
        if (this.form_total_audience && !this.isNumber(this.form_total_audience[0].value)) {
            alert(`Jumlah yang hadir harus angka`);
        } else {
            let data = {
                formName: this.form_name.value,
                formCongratulations: this.form_congratulation.value,
                formPresence: presence,
                formTotalAudience: this.form_total_audience[0].value,
                _csrf: this.csrf_token.value
            };
            Net.post('/congratulations', data).then((res) => {
                this.load_congratulations(res);
                this.form_name.value = "";
                this.form_congratulation.value = "";
                this.form_total_audience[0].value = "";
                this.form_name.value = null;
                this.form_congratulation.value = null;
            }).catch(reason => alert(reason));
        }
    }
    
    static isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    static load_congratulations() {
        Net.get('/congratulations').then((res) => {
            if (res.length > 0) {
                let congratulations = res;
                congratulations = App.insert_congratulation(congratulations);
                this.congratulation_list.innerHTML = congratulations.join("");
            }
        });
    }
    
    static insert_congratulation(congratulations) {
        return congratulations.map(c => 
            `<div class="col-11 col-md-8 bg-color-secondary border border-3 border-white rounded">
                <p class="typography-2 color-primary">${c.formName}</p>
                <p class="typography-6 color-primary">${c.formCongratulations}</p>
            </div>`
        );
    }

    static play_audio() { 
        this.play_audio_button.classList.add("is-playing");
        this.play_audio_button.style.display = "none";
        this.pause_audio_button.style.display = "block";
        this.audio.volume = 0.3;
        this.audio.play();
    }    
    
    static pause_audio() {         
        this.play_audio_button.classList.remove("is-playing");
        this.play_audio_button.style.display = "block";
        this.pause_audio_button.style.display = "none";
        this.audio.pause();
    }
    static copyToClipboard1() {      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText("1234567890");
    }
    static copyToClipboard2() {      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText("1234567890");
    }
}

App.init();

// run the countdown every 500ms
setInterval(App.countdown, 500);

