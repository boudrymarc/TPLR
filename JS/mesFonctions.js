function Exo1()
{
    //alert("EXO1");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCateg.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divCateg').empty();
                $('#divCateg').append(data);
            },
            error:function()
            {
                alert("Erreur sur les catégories");
            }
        }
    );
}

function AfficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstCateg').val(),
            success:function(data)
            {
                // On vide la DIV
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les Services");
            }
        }
    );
}
function Exo2(){
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesUtilisateurs.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divUtilisateur').empty();
                $('#divUtilisateur').append(data);
            },
            error:function()
            {
                alert("Erreur sur les Services");
            }
        }
    );
}
function AfficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesUtilisateurs.php",
            data:"id="+$('#numUser').val(),
            success:function(data)
            {
                // On vide la DIV
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les Services");
            }
        }
    );