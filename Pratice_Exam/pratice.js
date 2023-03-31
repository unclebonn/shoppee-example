window.addEventListener("load",function(){
    const slider = document.querySelector(".slider-bar");
    const sliderMain = document.querySelector(".slider-main")
    const sliderItems = document.querySelectorAll('.slider-item');
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLenght = sliderItems.length;
    const dotLenght = dotItem.length;
    console.log("dotLenght",dotLenght);
    console.log("sliderLenght",sliderLenght);
    let positionX =0;
    let index =0;

    nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
    });

    prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction){
        if(direction == 1){
            index++;
            if(index > sliderLenght -1 ){
                index = sliderLenght -1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translate(${positionX}px)`;
            // sliderMain.style.transform = translate(positionX);
            console.log("next slide");

        }else{
            index--;
            if(index < 0){
                index =0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translate(${positionX}px)`;
            console.log("prev slide");
        }
    }
})