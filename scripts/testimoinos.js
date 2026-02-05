const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjPfe-4zQvkRPbO3EOHYGfXOW79oexyOPkKI2zx5mGfailAKThuku0ZTWJWl_h8SOyIDHWV_rFjPEPoACBhJIFJmkC9TG-Uhu51SHU1kuonhFORRirra3OVRi2QKkyBonLKol-Vg53YqSF8J0fbjTvBGMjh_IT9LEmQvYGbA3bPoSDl8zOiaMYyrvLPAMamub-Bv4qOEhWMp4dVBcYOSBIxWO8nUbZ9z3ViDsLL64roFfVeXyBIomY6Uxo04jNdRDozlYiYk8z_pWwe-NgBNxaz2anSRlI0gS7vbUYX&lib=MQCsV6iu_6dgiqf2QLgGK0x6K3dPit44b';

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const container = document.getElementById('api-data');
        container.innerHTML = data
            .map(user => `
                        
                <div class="card-testimony">
                    <div class="content-car-testimony">

                        <span class="quote"><i class="bi bi-quote"></i></span>
                        <div class="content-start">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>

                        <div class="card-conten-coment">
                            <p class="text-content-coment">"

                               ${user.texto}
                            </p>

                            <div class="content-user">
                                <img src="https://api.dicebear.com/7.x/initials/svg?seed=${user.nombres}"
                                    class="user-image" alt="motta beatriz">
                                <div class="user-name">
                                    <span class="name-user">${user.nombres}</span>
                                   <span class="country-user">
                                    ${new Date(user.fecha).toLocaleDateString('es-ES', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            .join('');
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
