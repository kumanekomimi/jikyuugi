//メイン関数
function main(){    
    let jikyuu = culc_main();
    msg.innerText = 'あなたの時給は約' +Math.floor(jikyuu) + '円です';
}
//勤務時間取得
function get_time(){
    let syukkin = document.getElementById('syukkin');
    let syukkint = syukkin.value.split([':']);
    let taikin = document.getElementById('taikin');
    let taikint = taikin.value.split([':']);
    let kinmutime = parseFloat(((parseInt(taikint[0]*60) + parseInt(taikint[1])) - (parseInt(syukkint[0]*60) + parseInt(syukkint[1]))))/60
    //深夜勤務の場合の対処
    if (kinmutime<0){
        return 24 + kinmutime
    }else{
        return kinmutime
    }  
}
//時給計算 (引数:週の休み日数)
function culc_main(){
    let incomem = document.getElementById('chingin');
    let gbool = document.getElementsByName('income');
    let gesyuu = gbool[0].checked;
    let kinmu = get_time();
    console.log(kinmu)
    //月収or年収
    if(gesyuu){
        return culcM(parseInt(incomem.value),kinmu,2);
    }else{
        return culcY(parseInt(incomem.value),kinmu,2)
    }

}
//年収での時給計算
function culcY(inco,ctime,yasumi){
    let incom = inco / ((365 - 52.1429*yasumi )*ctime)
    return incom
}
//月収での時給計算
function culcM(inco,ctime,yasumi){
    let incom =  inco / ((30.41666666666667 - 4.34524*yasumi)*ctime)
    console.log(inco)
    return incom
}

let msg = document.getElementById('msg');
let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', main);