
  function index(){
    var img=document.querySelector("div.index  img.show");
    img.className="";
    if(img.parentNode.nextElementSibling!==null)
    img.parentNode.nextElementSibling.children[0].className="show";
    else{
      img.parentNode.parentNode.children[0].children[0].className="show";
    }
  }
  setInterval(index,5000);
  
  window.onscroll=function(){
    //获得滚动过的距离——网页顶部超出文档显示区顶部的距离
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop>=300)
      toTop.style.display="block";
    else
      toTop.style.display="none";
  }
