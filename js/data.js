/*
 * @Descripttion: FYM
 * @version: 1.0
 * @@Company: DCIT-SH
 * @Date: 2020-04-01 00:02:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-23 21:28:29
 */
var personArray = new Array;
var nameList = [
    "李兆旭",
    "孙成珂",
    "刘世昌",
    "周文浩",
    "权义改",
    "薛丽娜",
    "杨明雪",
    "许晓婷",
    "赵敖",
    "王宇瑾",
    "张永伟",
    "常胜康",
    "赵一帆",
    "赵静涛",
    "毕龙辉",
    "叶志文",
    "袁奥鹏",
    "田平川",
    "范益鸣",
    "闫阳阳",
    "潘转霞",
    "郭方彬",
    "司长迅",
    "付青青",
    "方霄",
    "夏幸峰",
    "张轲猛",
    "王梦娜",
];

function initData() {
    //var $people = localStorage.getItem("peopleData");
    //if(!$people){
    //    localStorage.setItem("peopleData", nameList);
    //}else {
    //    nameList = $people.split(',');
    //}
    personArray = [];
    for (var i = 0; i < nameList.length; i++) {
        var person = {
            id: i,
            image: "img/tx" + (i + 1) + ".jpg",
            thumb_image: "img/tx" + (i + 1) + ".jpg",
            name: nameList[i]
        }
        personArray.push(person)
    }
}
initData()