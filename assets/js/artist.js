const artistPage = document.querySelector('#artist')


artistPage.innerHTML = `
    <section class="slice" data-offset="10">
        <div class="slice-item" data-offset="20" onclick>
            Meet The Artist
            <span class="Mask"><span>Meet The Artist</span></span>
            <span class="Mask"><span>Meet The Artist</span></span>
        </div>
    </section>
    <section class="grid-container">
        <div class="grid-item item1"><img src="./soma/assets/imgs/CarstenHoller_JohnScarisbrick.jpg" alt=""></div>
        <div class="grid-item item2">
        <p>
            Carsten Höller is a German-born artist who was actually born in Brussels, Belgium, in 1961. He initially studied agricultural sciences at the University of Kiel and later earned a Ph.D. in agricultural science also has a background in entomology (the study of insects). His scientific background has significantly influenced his artistic approach. <br />
            <a href="#works">Learn More</a>
        </p>
        
        </div>
    </section>
`