// js.myutil.js 파일

 //매개변수로 전달된 선택자를 이용해서
 function $(sel){
    //해당 선택자에 부합하는 문서 개게의 참조값을 리턴하는 함수
        return document.querySelector(sel);
    }
    function $$(sel){
        return document.querySelectorAll(sel);
    }