const del = "delete"; //支付宝不支持 删除该属性
const replace = "replace"; //替换
const none = "none"; //双边同名不做处理
const force = "force"; //两个平台默认值不同 属于没有就要加上默认值 有就只要改个属性名
const cover = "cover" // 强制加上

module.exports = {
    tags: {
        view: {
            action: none, //微信只有4个（不包含事件） 支付宝有20多个（包含事件）  支付宝属性全覆盖微信
        },
        swiper: {
            action: none,
            attrs: {
                "snap-to-edge": {
                    action: del,
                },
                "easing-function": {
                    action: del,
                },
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
                bindtransition: {
                    action: replace,
                    transform: [{ key: "onTransition" }],
                },
                bindanimationfinish: {
                    action: replace,
                    transform: [{ key: "onAnimationEnd" }],
                },
            },
        },
        "swiper-item": {
            action: none, //注意支付宝的swiper-item不能添加绑定事件，所以为了统一选项 swiper-item里面必须添加view标签
        },
        "scroll-view": {
            action: none,
            attrs: {
                bindscrolltoupper: {
                    action: replace,
                    transform: [{ key: "onScrollToUpper" }],
                },
                bindscrolltolower: {
                    action: replace,
                    transform: [{ key: "onScrollToLower" }],
                },
                bindscroll: {
                    action: replace,
                    transform: [{ key: "onScroll" }],
                },
                binddragstart: {
                    action: replace,
                    transform: [{ key: "onTouchStart" }],
                },
                binddragging: {
                    action: replace,
                    transform: [{ key: "onTouchMove" }],
                },
                binddragend: {
                    action: replace,
                    transform: [{ key: "onTouchEnd" }],
                },
            },
        },
        "movable-view": {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
                bindscale: {
                    action: replace,
                    transform: [{ key: "onScale" }],
                },
            },
        },
        "movable-area": {
            action: none,
        },
        "match-media": {
            action: del, //支付宝不兼容
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "cover-view": {
            action: none,
        },
        "cover-image": {
            action: none,
            attrs: {
                bindload: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                binderror: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        icon: {
            action: none,
        },
        progress: {
            action: none,
            attrs: {
                activeColor: {
                    action: replace,
                    transform: [{ key: "active-color" }],
                },
                backgroundColor: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "border-radius": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "font-size": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                color: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "active-mode": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                duration: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindactiveend: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        "rich-text": {
            action: none,
            attrs: {
                "user-select": {
                    action: replace,
                    tranform: [{ key: "selectable" }],
                },
            },
        },
        navigator: {
            action: none,
            attrs: {
                target: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                delta: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "app-id": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                path: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "extra-data": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                version: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "hover-stop-propagation": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindsuccess: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindfail: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindcomplete: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        audio: {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        camera: {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        image: {
            action: none,
            attrs: {
                webp: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-menu-by-longpress": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                binderror: {
                    action: replace,
                    tranform: [{ key: "onError" }],
                },
                bindload: {
                    action: replace,
                    tranform: [{ key: "onLoad" }],
                },
            },
        },
        "live-player": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "live-pusher": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        video: {
            action: none,
            attrs: {
                "danmu-list": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "danmu-btn": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-danmu": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "page-gesture": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-progress": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "play-btn-position": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                title: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-play-gesture": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "auto-pause-if-navigate": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "auto-pause-if-open-native": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "vslide-gesture": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "vslide-gesture-in-fullscreen": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "ad-unit-id": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "poster-for-crawler": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-casting-button": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "picture-in-picture-mode": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "picture-in-picture-show-progress": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-auto-rotation": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-screen-lock-button": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-snapshot-button": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindplay: {
                    action: replace,
                    tranform: [{ key: "onPlay" }],
                },
                bindpause: {
                    action: replace,
                    tranform: [{ key: "onPause" }],
                },
                bindended: {
                    action: replace,
                    tranform: [{ key: "onEnded" }],
                },
                bindtimeupdate: {
                    action: replace,
                    tranform: [{ key: "onTimeUpdate" }],
                },
                bindfullscreenchange: {
                    action: replace,
                    tranform: [{ key: "onFullScreenChange" }],
                },
                bindwaiting: {
                    action: replace,
                    tranform: [{ key: "onLoading" }],
                },
                binderror: {
                    action: replace,
                    tranform: [{ key: "onError" }],
                },
                bindprogress: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindloadedmetadata: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindcontrolstoggle: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindenterpictureinpicture: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindleavepictureinpicture: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        "voip-room": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        map: {
            action: none,
            attrs: {
                "min-scale": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "max-scale": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                subkey: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "layer-style": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-3D": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-compass": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "show-scale": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-overlooking": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-zoom": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-scroll": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-rotate": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },

                "enable-satellite": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-traffic": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "enable-building": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindmarkertap: {
                    action: replace,
                    tranform: [{ key: "onMarkerTap" }],
                },
                bindlabeltap: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindcontroltap: {
                    action: replace,
                    tranform: [{ key: "onControlTap" }],
                },
                bindcallouttap: {
                    action: replace,
                    tranform: [{ key: "onCalloutTap" }],
                },
                bindupdated: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindregionchange: {
                    action: replace,
                    tranform: [{ key: "onRegionChange" }],
                },
                bindpoitap: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindanchorpointtap: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        canvas: {
            action: none,
            attrs: {
                type: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "canvas-id": {
                    action: replace,
                    tranform: [{ key: "id" }],
                },
                binderror: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        ad: {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "ad-custom": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "official-account": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "open-data": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "web-view": {
            action: none,
            attrs: {
                bindmessage: {
                    action: replace,
                    tranform: [{ key: "onMessage" }],
                },
                binderror: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindload: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                binderror: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        "navigation-bar": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        "page-meta": {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        // 表单组件
        // button: {
        //   action: none,
        //   attrs: [

        //   ]
        // },
        checkbox: {
            action: none,
            attrs: {
                color: {
                    action: force,
                    transform: [{ key: "color", value: "#09BB07" }],
                },
            },
        },
        "checkbox-group": {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
            },
        },
        editor: {
            action: del,
            msg: {
                type: "error",
                content: "支付宝不支持此组件",
            },
        },
        form: {
            action: none,
            attrs: {
                "report-submit-timeout": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindsubmit: {
                    action: replace,
                    tranform: [{ key: "onSubmit" }],
                },
                bindreset: {
                    action: replace,
                    tranform: [{ key: "onReset" }],
                },
            },
        },
        input: {
            action: none,
            attrs: {
                "cursor-spacing": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "always-embed": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "adjust-position": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "hold-keyboard": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindinput: {
                    action: replace,
                    transform: [{ key: "onInput" }],
                },
                bindfocus: {
                    action: replace,
                    transform: [{ key: "onFocus" }],
                },
                bindblur: {
                    action: replace,
                    transform: [{ key: "onBlur" }],
                },
                bindconfirm: {
                    action: replace,
                    transform: [{ key: "onConfirm" }],
                },
                bindkeyboardheightchange: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        label: {
            action: none,
        },
        picker: {
            action: none,
            attrs: {
                "header-text": {
                    action: replace,
                    tranform: [{ key: "title" }],
                },
                // 支付宝只支持mode为selector的普通选择器

                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
                start: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                end: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                fields: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                year: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                month: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                day: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                "custom-item": {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindcancel: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindcolumnchange: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        "picker-view": {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
                bindpickstart: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
                bindpickend: {
                    action: none,
                    msg: {
                        type: "error",
                        content: "支付宝不支持此属性",
                    },
                },
            },
        },
        "picker-view-column": {
            action: none,
        },
        radio: {
            action: none,
            attrs: {
                color: {
                    action: force,
                    transform: [{ key: "color", value: "#09BB07" }],
                },
            },
        },
        "radio-group": {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
            },
        },
        slider: {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
                bindchanging: {
                    action: replace,
                    transform: [{ key: "onChanging" }],
                },
                activeColor: {
                    action: replace,
                    transform: [{ key: "active-color" }],
                },
                backgroundColor: {
                    action: replace,
                    transform: [{ key: "background-color" }],
                },
                color: {
                    action: replace,
                    transform: [{ key: "active-color" }],
                },
                "selected-color": {
                    action: replace,
                    transform: [{ key: "background-color" }],
                },
                "block-color": {
                    action: replace,
                    transform: [{ key: "handle-color" }],
                },
                "block-size": {
                    action: replace,
                    transform: [{ key: "handle-size" }],
                },
            },
        },
        switch: {
            action: none,
            attrs: {
                bindchange: {
                    action: replace,
                    transform: [{ key: "onChange" }],
                },
            },
        },
        textarea: {
            action: none,
            attrs: {
                "auto-focus": {
                    action: del,
                },
                bindinput: {
                    action: replace,
                    transform: [{ key: "onInput" }],
                },
                bindconfirm: {
                    action: replace,
                    transform: [{ key: "onConfirm" }],
                },
                bindblur: {
                    action: replace,
                    transform: [{ key: "onBlur" }],
                },
                bindfocus: {
                    action: replace,
                    transform: [{ key: "onFocus" }],
                },
            },
        },
        button: {
            action: none,
            attrs: {
                "open-type": {
                    values: {
                        getUserInfo: {
                            transform: [
                                { afterKey: "scope", afterVal: "userInfo", action: cover },
                                { value: "getAuthorize", action: replace },
                                { beforKey: "bindgetuserinfo", afterKey: "onGetAuthorize", action: replace },
                            ],
                        },
                        getPhoneNumber: {
                            transform: [
                                { afterKey: "scope", afterVal: "phoneNumber", action: cover },
                                { value: "getAuthorize", action: replace },
                                { beforKey: "bindgetphonenumber", afterKey: "onGetAuthorize", action: replace },
                            ],
                        },
                    },
                },
            },
        },
    },
    commonAttr: {
        "wx:if": {
            action: replace,
            transform: [{ key: "a:if" }],
        },
        "wx:elif": {
            action: replace,
            transform: [{ key: "a:elif" }],
        },
        "wx:else": {
            action: replace,
            transform: [{ key: "a:else" }],
        },
        "wx:for": {
            action: replace,
            transform: [{ key: "a:for" }],
        },
        "wx:key": {
            action: replace,
            transform: [{ key: "a:key" }],
        },
        "wx:for-index": {
            action: replace,
            transform: [{ key: "a:for-index" }],
        },
        "wx:for-item": {
            action: replace,
            transform: [{ key: "a:for-item" }],
        },

        // 事件
        bindtap: {
            action: replace,
            transform: [{ key: "onTap" }],
        },
        "bind:tap": {
            action: replace,
            transform: [{ key: "onTap" }],
        },
        catchtap: {
            action: replace,
            transform: [{ key: "catchTap" }],
        },
        "catch:tap": {
            action: replace,
            transform: [{ key: "catchTap" }],
        },
        bindlongtap: {
            action: replace,
            transform: [{ key: "onLongTap" }],
        },
        "bind:longtap": {
            action: replace,
            transform: [{ key: "onLongTap" }],
        },
        catchlongtap: {
            action: replace,
            transform: [{ key: "catchLongTap" }],
        },
        "catch:longtap": {
            action: replace,
            transform: [{ key: "catchLongTap" }],
        },
        bindlongpress: {
            action: replace,
            transform: [{ key: "onLongPress" }],
        },
        "bind:longpress": {
            action: replace,
            transform: [{ key: "onLongPress" }],
        },
        catchlongpress: {
            action: replace,
            transform: [{ key: "catchLongPress" }],
        },
        "catch:longpress": {
            action: replace,
            transform: [{ key: "catchLongPress" }],
        },
        bindtouchstart: {
            action: replace,
            transform: [{ key: "onTouchStart" }],
        },
        "bind:touchstart": {
            action: replace,
            transform: [{ key: "onTouchStart" }],
        },
        catchtouchstart: {
            action: replace,
            transform: [{ key: "catchTouchStart" }],
        },
        "catch:touchstart": {
            action: replace,
            transform: [{ key: "catchTouchStart" }],
        },
        bindtouchmove: {
            action: replace,
            transform: [{ key: "onTouchMove" }],
        },
        "bind:touchmove": {
            action: replace,
            transform: [{ key: "onTouchMove" }],
        },
        catchtouchmove: {
            action: replace,
            transform: [{ key: "catchTouchMove" }],
        },
        "catch:touchmove": {
            action: replace,
            transform: [{ key: "catchTouchMove" }],
        },
        bindtouchend: {
            action: replace,
            transform: [{ key: "onTouchEnd" }],
        },
        "bind:touchend": {
            action: replace,
            transform: [{ key: "onTouchEnd" }],
        },
        catchtouchend: {
            action: replace,
            transform: [{ key: "catchTouchEnd" }],
        },
        "catch:touchend": {
            action: replace,
            transform: [{ key: "catchTouchEnd" }],
        },
        bindtouchcancel: {
            action: replace,
            transform: [{ key: "onTouchCancel" }],
        },
        "bind:touchcancel": {
            action: replace,
            transform: [{ key: "onTouchCancel" }],
        },
        catchtouchcancel: {
            action: replace,
            transform: [{ key: "catchTouchCancel" }],
        },
        "catch:touchcancel": {
            action: replace,
            transform: [{ key: "catchTouchCancel" }],
        },
    },
};
