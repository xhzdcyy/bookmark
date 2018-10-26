
// 1.初始化数据
let hashA = init();
let keys = hashA.keys;
let hash = hashA.hash;


//2.生成键盘
generateKeyBoard(keys, hash);

// 3.监听用户动作
listenToKeyboard(hash);

//下面是工具函数
function init() {
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
    //取出localstorage中的网站数据
    let hashInLocalStorage = JSON.parse(localStorage.getItem('web') || 'null');
    if (hashInLocalStorage) {
        hash = hashInLocalStorage;
    }

    return {
        keys,
        hash
    }

}

function generateKeyBoard(keys, hash) {
    let kb = document.getElementById('kb');

    for (let i = 0; i < keys.length; i++) {
        let div = document.createElement('div');
        kb.appendChild(div);
        for (let j = 0; j < keys[i].length; j++) {
            let kbd = document.createElement('kbd');
            kbd.textContent = keys[i][j];
            let key = keys[i][j];

            let icon = document.createElement('img');
            changeIcon(icon, hash[key]);

            let button = createButton(key);

            div.appendChild(kbd);
            kbd.appendChild(icon);
            kbd.appendChild(button);
        }

    }
}

function listenToKeyboard(hash) {
    document.onkeypress = function (e) {
        ;
        key = e.key;
        website = hash[key];
        console.log(website);
        window.open('http://' + website, '_blank');
    }
}


//生成按钮
function createButton(id) {
    let button = document.createElement('button');
    button.id = id;
    button.onclick = function (e) {
        console.log(e.target.id);
        let t = prompt('给我一个新网址');
        if (!t) return;
        let icon = e.target.previousSibling;
        changeIcon(icon, t);
        hash[key] = t;
        localStorage.setItem('web', JSON.stringify(hash));
    }
    button.textContent = '编辑';
    return button;
}

//改变图标
function changeIcon(img, src) {
    if (img) {
        img.src = 'http://' + src + '/favicon.ico';
    }
    else {
        img.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
    }
    img.onerror = function (e) {
        console.log('icon not found');
        e.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
    }
}