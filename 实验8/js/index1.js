function expandPhoto(){  
     var overlay = document.createElement("div"); 
     overlay.setAttribute("id","overlay");  
     overlay.setAttribute("class","overlay");  
     document.body.appendChild(overlay);  
     var img = document.createElement("img");  
     img.setAttribute("class","overlayimg");  
     img.src = this.getAttribute("src");  
     document.getElementById("overlay").appendChild(img);  
     overlay.onclick = restore;  
    }  
    function restore(){  
     document.body.removeChild(document.getElementById("overlay"));  
     document.body.removeChild(document.getElementById("img"));  
    }  
    window.onload = function(){  
      var imgs = document.getElementsByTagName("img");//找到所有img  
      imgs[0].focus();  
      for(var i = 0;i<imgs.length;i++){  
         imgs[i].onclick = expandPhoto;  //绑定点击事件，执行方法
         imgs[i].onkeydown = expandPhoto;  
      }  
} 