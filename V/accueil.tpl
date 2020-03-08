<center><h2>Bienvenue à tous !</h2><br />
<h3></h3></center>
<div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 itemBox" id="boxJeu">
        <h3>Jeu</h3>
        <p>En cliquant ici, vous pourrez accéder au jeu</p>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 itemBox" id="boxClassement">
        <h3>Classement</h3>
        <p>Est ce que vous avez été le meilleur ?</p>
    </div>
</div>
<script>
$("#boxJeu").click(function(){
    window.location.href = "./index.php?p=jeu";
    });  
$("#boxClassement").click(function(){
    window.location.href = "./index.php?p=classement";
    });
</script>