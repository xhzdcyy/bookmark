let keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

let hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.com',
    'r': 'reactjs.org',
    't': 'www.typescriptlang.org',
    'y': 'www.youtube.com',
    'u': 'umijs.org',
    'i': 'iqiyi.com',
    'o': 'www.oppo.com/cn',
    'p': 'www.python.org',
    'a': 'www.apple.com',
    's': 'store.steampowered.com',
    'd': 'douyu.com',
    'f': 'www.facebook.com',
    'g': 'google.com',
    'h': 'www.huya.com',
    'j': 'jianshu.com',
    'k': 'www.kuaishou.com',
    'l': 'lol.qq.com',
    'z': 'zhihu.com',
    'x': 'xiedaimala.com',
    'c': 'css-tricks.com',
    'v': 'code.visualstudio.com',
    'b': 'bilibili.com',
    'n': 'www.nicovideo.jp',
    'm': 'developer.mozilla.org/zh-CN'
}


let hashInLocalStorage = JSON.parse(localStorage.getItem('web')||'null');
if(hashInLocalStorage){
    hash = hashInLocalStorage;
}

let kb = document.getElementById('kb');


for (let i = 0; i < keys.length; i++) {
    let div = document.createElement('div');
    kb.appendChild(div);
    for (let j = 0; j < keys[i].length; j++) {
        let kbd = document.createElement('kbd');
        kbd.textContent = keys[i][j];
        let button = document.createElement('button');
        let key = button.id = keys[i][j];
        button.onclick = function(e){
            console.log(e.target.id);
            let t = prompt('给我一个新网址');
            hash[key] = t;
            localStorage.setItem('web',JSON.stringify(hash));
        }
        button.textContent = '编辑';
        div.appendChild(kbd);
        kbd.appendChild(button);
    }

}

document.onkeypress = function(e){
    // console.log('key pressed');
    // console.log(e.key);
    key = e.key;
    website = hash[key];
    console.log(website);
    // location.href = 'http://' + website;
    window.open('http://' + website,'_blank');
}