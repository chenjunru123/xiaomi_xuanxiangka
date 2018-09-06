window.onload=function () {
    let imgs=document.querySelectorAll(".banner .banner-pic .imgs img");
    // console.log(imgs);
    let dots=document.querySelectorAll(".banner .banner-pic .dot li");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".banner .banner-pic .leftbtn")[0];
    let rightBtn=document.querySelectorAll(".banner .banner-pic .rightbtn")[0];
    // console.log(imgs,dots,banner,leftBtn,rightBtn);
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove("active");
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add("active");
            imgs[i].style.opacity=1;
            num=i;
        }
    }
    //自动轮播
    let t;
    let num=0;
    function move() {
        num++;
        if (num == 5) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        dots[num].classList.add("active");
        imgs[num].style.opacity = 1;
    }
    //3.鼠标移入
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }
    //点击左右
    rightBtn.onclick=function () {
        move();
    }
    function moveL() {
        num--;
        if (num < 0) {
            num = 4;
        }
        for (let j = dots.length-1; j >= 0; j--) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        dots[num].classList.add("active");
        imgs[num].style.opacity = 1;
    }
    leftBtn.onclick=function () {
        moveL();
    }

    /////////////////////////////   内容部分轮播   获取元素   ///////////////////////////////
    function wheel(screen_w,imgs,points,left,right,Now,Next) {      //封装轮播函数
        let bigBox = document.querySelector(screen_w);
        let width = parseInt(getComputedStyle(bigBox, null).width);

        let books = document.querySelectorAll(imgs);
        let Left = document.querySelector(left);
        let Right = document.querySelector(right);
        // console.log(bigBox,width,books,Left,Right);
        //点击左右切换
        // let now = next = 0;
        let now = Now;
        let next = Next;
        let flag;

        Right.onclick = function () {
            if (next == books.length - 1) {
                return;
            }
            N_move();
        }
        function N_move() {
            if (flag == false) {
                return;
            }
            next++;
            if (next == books.length) {
                next = 0;
            }
            books[next].style.left = width + "px";
            animate(books[now], {left: -width}, function () {flag = true});
            animate(books[next], {left: 0}, function () {flag = true});
            s_point[now].classList.remove("hot");
            s_point[next].classList.add("hot");
            now = next;
            flag = false;
        }
        Left.onclick = function () {
            if (now == 0) {
                return;
            }
            N_moveL();
        }
        function N_moveL() {
            if (!flag) {
                return;
            }
            next--;
            if (next < 0) {
                next = books.length - 1;
            }
            books[next].style.left = -width + "px";
            animate(books[now], {left: width}, function () {flag = true});
            animate(books[next], {left: 0}, function () {flag = true});
            s_point[now].classList.remove("hot");
            s_point[next].classList.add("hot");
            now = next;
            flag = false;
        }
        //小点 点击
        let s_point = document.querySelectorAll(points);
        // console.log(s_point);
        s_point.forEach(function (v, i) {
            v.onclick = function () {
                if (i == now) {
                    return;
                } else if (i > now) {
                    books[i].style.left = width + "px";
                    animate(books[now], {left: -width});
                    animate(books[i], {left: 0});
                    s_point[now].classList.remove("hot");
                    s_point[i].classList.add("hot");
                } else {
                    books[i].style.left = -width + "px";
                    animate(books[now], {left: width});
                    animate(books[i], {left: 0});
                    s_point[now].classList.remove("hot");
                    s_point[i].classList.add("hot");
                }
                now = next = i;
            }
        })
    }
    wheel(".one",".one li",".s_point1 span",".conL1",".conR1",0,0);
    wheel(".two",".two li",".s_point2 span",".conL2",".conR2",0,0);
    wheel(".three",".three li",".s_point3 span",".conL3",".conR3",0,0);
    wheel(".four",".four li",".s_point4 span",".conL4",".conR4",0,0);



















//////////////////////////////////////////////////////////小米闪购////////////////////////////////////////////

    let buttonL=document.querySelectorAll(".shopping .shopping-head .more .left")[0];
    let buttonR=document.querySelectorAll(".shopping .shopping-head .more .right")[0];
    let miList=document.querySelector(".shopping .shopping-body ul");
    let w=parseInt(getComputedStyle(miList,null).width)/2;
    let times=0;
    buttonL.onclick=function () {
        times--;
        // console.log(times);
        if(times < 0){
            times=0;
        }
        miList.style.transform=`translate(${-w*times}px)`;

    }
    buttonR.onclick=function () {
        times++;
        if(times==2){
            times=1;
        }
        miList.style.transform=`translate(${-w*times}px)`;

    }



//////////////////////////////////////////////////为你推荐///////////////////////////////////////////////////
    let buttonleft=document.querySelectorAll(".recommend .head .more .left")[0];
    let buttonright=document.querySelectorAll(".recommend .head .more .right")[0];
    let milists=document.querySelector(".recommend ul");
    let ws=parseInt(getComputedStyle(miList,null).width)/1.5954323;
    let time=0;
    // console.log(buttonleft,buttonright,milists,ws);
    buttonleft.onclick=function () {
        time--;
        // console.log(time);
        if(time < 0){
            time=0;
        }
        milists.style.transform=`translate(${-ws*time}px)`;

    }
    buttonright.onclick=function () {
        time++;
        if(time==4){
            time=3;
        }
        milists.style.transform=`translate(${-ws*time}px)`;

    }




/////////////////////////////////////////////////////选项卡////////////////////////////////////////////////////
//     //1.获取元素
    let lis=document.querySelectorAll(".banner .banner-pic .list .list-box");
    let son=document.querySelectorAll(".baby");
    // console.log(lis);
    // console.log(son);
    //2.遍历每一个li
    for(let i=0;i<lis.length;i++){
        //3.当鼠标移入每一个li时的操作
        lis[i].onmouseenter=function(){
            // alert(1);
            //4.其余子元素消失
            for(let j=0;j<son.length;j++){
                son[j].style.display="none";
            }
            //5.当前子元素出现
            son[i].style.display="block";
        }
        lis[i].onmouseleave=function(){
            for(var j=0;j<son.length;j++){
                son[j].style.display="none";
            }
        }
    }





/////////////////////////////////////////////////////返回顶部/////////////////////////////////////////////////////

///返回顶部
    let back=document.querySelector(".last");
    // console.log(back);
    //页面滚动的高度
    window.onscroll=function () {
        huaH=document.body.scrollTop||document.documentElement.scrollTop;

        // search：页面滚动到一定高度出现
        if(huaH > 800){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
    }
    // console.log(innerHeight);
    back.onclick=function () {
        animate(document.body,{scrollTop:0},1000);
        animate(document.documentElement,{scrollTop:0},1000);
    }



    ///////////////////////    家电选项卡   //////////////////////////////////////////////
    function house(name,hr,Box){                //选项卡封装
        let jiadian = document.getElementsByClassName(name)[0];
        let top_right = jiadian.getElementsByClassName(hr)[0];

        let r_list = top_right.getElementsByClassName("r_list");
        let sectionBox = document.getElementsByClassName(Box);
        for (let i = 0;i< r_list.length;i++) {
            r_list[i].onmouseenter=function () {
                for (let j = 0;j< r_list.length;j++){
                    sectionBox[j].style.zIndex="5";
                    r_list[j].classList.remove("ch");
                }
                sectionBox[i].style.zIndex="10";
                r_list[i].classList.add("ch");
            }
        }
    }
    house("jiadian","hr1","Box1");
/////////////////////////////////////////导航栏选项卡/////////////////////////////////////////////////////////////////////

    //1.获取元素
    let ul = document.querySelector(".navigation ul");
    let dad=document.querySelectorAll(".navigation ul li a");
    let kuang=document.querySelectorAll(".navigation .son");
    let hehe=document.querySelectorAll(".navigation .son .heer");
        ul.onmouseenter=function(){
            kuang[0].style.height="229px";
        }
        ul.onmouseleave=function(){
            kuang[0].style.height="0";
        }
    for(let i=0;i<dad.length;i++){
        dad[i].onmouseenter=function(){
            for(let j=0;j<hehe.length;j++){
                dad[j].classList.remove("active");
                hehe[j].style.zIndex="5";
            }
            dad[i].classList.add("active");
            hehe[i].style.zIndex="50";
        }
    }

    // for (let i = 0;i< r_list.length;i++) {
    //     r_list[i].onmouseenter=function () {
    //         for (let j = 0;j< r_list.length;j++){
    //             sectionBox[j].style.zIndex="5";
    //             r_list[j].classList.remove("ch");
    //         }
    //         sectionBox[i].style.zIndex="10";
    //         r_list[i].classList.add("ch");
    //     // }
    // }
    //








}