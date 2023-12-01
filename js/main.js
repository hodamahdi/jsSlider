  var imgList = Array.from( document.getElementsByClassName('item-img'));
  var layerItem = document.querySelector('.layer');
  var layerImgItem =document.querySelector('.layerImg');
   var nextBtn =document.getElementById('next');
   var prevBtn =document.getElementById('prev');
   var closeBtn =document.getElementById('close');


   var  currentIndex;
  for(var i=0 ; i<imgList.length ; i++)
  {
    imgList[i].addEventListener('click' , function(e){
       
       currentIndex =imgList.indexOf(e.target)
      //  console.log(currentIndex)
       var imgSrc= e.target.getAttribute('src');
     layerItem.classList.replace('d-none','d-flex') ;
     layerImgItem.style.backgroundImage = `url(${imgSrc})`


     
   
    })
  }



  

  function nextImg()
  {
    currentIndex = currentIndex + 1
   
    if(currentIndex ==imgList.length)
    {
      currentIndex =0;
    }
    var imgSrc= imgList[currentIndex].getAttribute('src')
    layerImgItem.style.backgroundImage = `url(${imgSrc})`
  }
nextBtn.addEventListener('click',nextImg )


function prevImg()
{
  currentIndex = currentIndex - 1
 
  if(currentIndex <0)
  {
    currentIndex = imgList.length -1;
  }
  var imgSrc= imgList[currentIndex].getAttribute('src')
  layerImgItem.style.backgroundImage = `url(${imgSrc})`
}
prevBtn.addEventListener('click',prevImg )



function closeSlide()
{
  layerItem.classList.replace('d-flex','d-none') ;  
}
closeBtn.addEventListener('click',closeSlide)

  document.addEventListener('keydown' ,function(e){
    if(e.key == "ArrowRight")
    {
      nextImg();
    }
   else if (e.key=='ArrowLeft') {
    prevImg();
      
    }
    else if(e.key == 'Escape')
    {
      closeSlide();
    }
  }
  
  )

