$(function(){
    var i=0;
    var k=0;
    $(document).ready(function(){
        var toplamgelir=0 ;
        var toplamgider=0 ;
       
        var gidertıkla=0;
        var gelirtıkla=0;
        var gelirlerdizi=[];
        var giderlerdizi=[];

        $("#gitekrar").hide();
        $("#gtekrar").hide();
  
   $("#gelirtekrar").click(function(){
          if( $("#gelirtekrar").is(":checked" )) {
              $("#gtekrar").show();
          }
          else{
            $("#gtekrar").hide();
  
          }
        });
  
     $("#gelirbtn").click(function(){
              if( $("#gelirtekrar").is(":checked" )) {
  
          var x=$("#geliradi").val();
          var y=$("#gelirmiktar").val();
          var z=$("#gelirgün").val();
          var m=$("#gelirlist option:selected").text();
          var b=$("#gelirtekrarlist option:selected").text();
  
  $( ".tablee" ).append( "<tr><td>"+x+"</td><td>Gelir</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>"+b+"</td></tr>" );
  gelirlerdizi[i]="<tr><td>"+x+"</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>"+b+"</td></tr>";
  localStorage.setItem("gelirlerdizi."+i,gelirlerdizi[i]);
  localStorage.setItem("gelirkategori."+i,m);
  localStorage.setItem("gelirfiyat."+i,y);
  gelirtıkla++;
  localStorage.setItem("gelirtıklama",gelirtıkla);

  i++;
  toplamgelir+=parseInt(y);
  $(".gelirdeger").text(toplamgelir+" Try");
  localStorage.setItem("gelir", toplamgelir);
  
  }
  else{
  var x=$("#geliradi").val();
  var y=$("#gelirmiktar").val();
  var z=$("#gelirgün").val();
  var m=$("#gelirlist option:selected").text();
  
  $( ".tablee" ).append( "<tr><td>"+x+"</td><td>Gelir</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>Tek Sefer</td></tr>" );
  gelirlerdizi[i]="<tr><td>"+x+"</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>Tek Sefer</td></tr>";
  localStorage.setItem("gelirlerdizi."+i,gelirlerdizi[i]);
  localStorage.setItem("gelirkategori."+i,m);
  localStorage.setItem("gelirfiyat."+i,y);
  gelirtıkla++;
  
  localStorage.setItem("gelirtıklama",gelirtıkla);
  i++;
  toplamgelir+=parseInt(y);
  $(".gelirdeger").text(toplamgelir+" Try");
  
  localStorage.setItem("gelir", toplamgelir);
  
  }
  var val=localStorage.getItem("gelir");
  $(".toplampara").text(toplamgelir-toplamgider); 
  localStorage.setItem("sonuc", toplamgelir-toplamgider);
  
  });
  
   $("#giderrtekrar").click(function(){
    if( $("#giderrtekrar").is(":checked" )) {
              $("#gitekrar").show();
            }
     else {
            $("#gitekrar").hide();
          }
        });
   $("#giderbtn").click(function(){
                if( $("#giderrtekrar").is(":checked" )) {
                var x=$("#gideradi").val();
                var y=$("#gidermiktar").val();
                var z=$("#gidergün").val();
                var m=$("#giderlist option:selected").text();
                var b=$("#gidertekrarlist option:selected").text();
  
  
  $( ".tablee" ).append( "<tr><td>"+x+"</td><td>Gider</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>"+b+"</td></tr>" );
  giderlerdizi[k]="<tr><td>"+x+"</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>"+b+"</td></tr>";
  localStorage.setItem("giderlerdizi."+k,giderlerdizi[k]);
  localStorage.setItem("giderkategori."+k,m);
  localStorage.setItem("giderfiyat."+k,y);
  k++;
  gidertıkla++;
  
  localStorage.setItem("gidertıklama",gidertıkla);
  toplamgider+=parseInt(y);
  $(".giderdeger").text(toplamgider+" Try");
  localStorage.setItem("gider", toplamgider);
  localStorage.setItem("sonuc", toplamgelir-toplamgider);
  
                }
            else{
  
  var x=$("#gideradi").val();
  var y=$("#gidermiktar").val();
  var z=$("#gidergün").val();
  var m=$("#giderlist option:selected").text();
  
  $( ".tablee" ).append( "<tr><td>"+x+"</td><td>Gider</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>Tek Sefer</td></tr>" );
  giderlerdizi[k]="<tr><td>"+x+"</td><td>"+z+"</td><td>"+y+" TL</td><td>"+m+"</td><td>Tek Sefer</td></tr>";
  localStorage.setItem("giderlerdizi."+k,giderlerdizi[k]);
  localStorage.setItem("giderkategori."+k,m);
  localStorage.setItem("giderfiyat."+k,y);
  gidertıkla++;
  
  localStorage.setItem("gidertıklama",gidertıkla);
  k++;
  toplamgider+=parseInt(y);
  $(".giderdeger").text(toplamgider+" Try");
  
  localStorage.setItem("gider", toplamgider);
  
  
            }
  var val2=localStorage.getItem("gider");
  $(".toplampara").text(toplamgelir-toplamgider);
  localStorage.setItem("sonuc", toplamgelir-toplamgider);
  
  });
  });
      var sonuc=localStorage.getItem("sonuc");
    $(".toplampara").text(sonuc);


    var gel=localStorage.getItem("gelir")+" TL";
    var gid=localStorage.getItem("gider")+" TL";
    $(".gelirdeger").text(gel);
    $(".giderdeger").text(gid);


    for(var a=0;a<10;a++){    

    var gelirveri=localStorage.getItem("gelirlerdizi."+a);
    var giderveri=localStorage.getItem("giderlerdizi."+a);
    $(".tablegelir").append(gelirveri);
    $(".tablegider").append(giderveri);
    }

});


