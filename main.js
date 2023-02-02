// This script was generated and reflects raw data. It is recommended to change this code to your required logic

//onst SC01_URL = new load.Transaction("connexion");

let T01 = new load.Transaction("open url")
let T02 = new load.Transaction("connexion")
let T03 = new load.Transaction("Article")
let T05 = new load.Transaction("Deconnexion")



T01.start();

load.initialize("Initialize", async function () {
});

load.action("Action", async function () {

    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "fr-FR,fr;q=0.9",
        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    };

    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "https://practice.automationtesting.in/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/css/themify-builder-style.css?ver=2.8.8",
            "https://practice.automationtesting.in/wp-includes/css/dist/block-library/style.min.css?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=4.6.1",
            "https://practice.automationtesting.in/wp-content/plugins/instagram-feed/css/sb-instagram.min.css?ver=1.4.8",
            "https://practice.automationtesting.in/wp-content/plugins/table-maker/css/style.css?ver=1.6",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce-menu-bar-cart/css/wpmenucart-icons.css?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce-menu-bar-cart/css/wpmenucart-main.css?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/css/themify.framework.css?ver=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-icons/themify-icons.css?ver=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/style.css?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/media-queries.css?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/styles/woocommerce.css?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/styles/header-top-bar.css?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/fontawesome/css/font-awesome.min.css?ver=2.8.8",
            "https://practice.automationtesting.in/wp-content/cache/nextend/web/n2-ss-6/n2-ss-6.css?1658240039",
            "https://practice.automationtesting.in/wp-includes/js/jquery/jquery.min.js?ver=3.6.0",
            "https://practice.automationtesting.in/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
            "https://practice.automationtesting.in/wp-content/cache/nextend/web/n2/n2.js?1658240039",
            "https://practice.automationtesting.in/wp-content/plugins/smart-slider-3/nextend/media/dist/nextend-frontend.min.js?1658235085",
            "https://practice.automationtesting.in/wp-content/plugins/smart-slider-3/library/media/dist/smartslider-frontend.min.js?1658235079",
            "https://practice.automationtesting.in/wp-content/plugins/smart-slider-3/library/media/plugins/type/simple/simple/dist/smartslider-simple-type-frontend.min.js?1658235276",
            "https://practice.automationtesting.in/wp-content/cache/nextend/web/n2-ss-6/n2-ss-6.js?1658240039",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/main.js?ver=2.8.8",
            "https://practice.automationtesting.in/wp-content/plugins/contact-form-7/includes/js/jquery.form.min.js?ver=3.51.0-2014.06.20",
            "https://practice.automationtesting.in/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=4.6.1",
            "https://practice.automationtesting.in/wp-content/plugins/instagram-feed/js/sb-instagram.min.js?ver=1.4.8",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js?ver=1.4.1",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/color-logo-original.png",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Shop-For-Selenium-Books.png",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/HTML.png",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/JavaScript.png",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/js/themify.mega-menu.js?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/js/jquery.nicescroll.js?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/themify.sidemenu.js?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/js/jquery.isotope.min.js?ver=1.5.0",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/js/themify.script.js?ver=1.5.0",
            "https://practice.automationtesting.in/wp-includes/js/comment-reply.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/mailchimp-for-wp/assets/js/forms-api.min.js?ver=4.0.13",
            "https://practice.automationtesting.in/wp-includes/js/wp-emoji-release.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Selenium-Ruby-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Thinking-in-HTML-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Mastering-JavaScript-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/js/themify.builder.script.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/fontawesome/fonts/fontawesome-webfont.woff2?v=4.6.3",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-icons/themify.woff",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/css/animate.min.css",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/wow.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/css/lightbox.css",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/lightbox.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/themify.gallery.js?version=2.8.8",
        ],
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "https://practice.automationtesting.in/",
        method: "POST",
        headers: {
            "accept": "*/*",
            "origin": "https://practice.automationtesting.in",
            "referer": "https://practice.automationtesting.in/",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        queryString: {
            "wc-ajax": "get_refreshed_fragments"
        },
    }).sendSync();
T01.stop();
T02.start();
    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "https://practice.automationtesting.in/my-account/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "referer": "https://practice.automationtesting.in/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/select2.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-includes/js/zxcvbn-async.min.js?ver=1.0",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/select2/select2.min.js?ver=3.5.4",
            "https://practice.automationtesting.in/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9",
            "https://practice.automationtesting.in/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0",
            "https://practice.automationtesting.in/wp-includes/js/dist/hooks.min.js?ver=c6d64f2cb8f5c6bb49caca37f8828ce3",
            "https://practice.automationtesting.in/wp-includes/js/dist/i18n.min.js?ver=ebee46757c6a411e38fd079a7ac71d94",
            "https://practice.automationtesting.in/wp-admin/js/password-strength-meter.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/password-strength-meter.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-includes/js/zxcvbn.min.js",
        ],
    }).sendSync();
    T02.stop();
    T03.start();
    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "https://practice.automationtesting.in/my-account/",
        method: "POST",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "origin": "https://practice.automationtesting.in",
            "referer": "https://practice.automationtesting.in/my-account/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/select2.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-includes/js/wp-emoji-release.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/js/themify.builder.script.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/lightbox.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/wow.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/themify.gallery.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/select2/select2.min.js?ver=3.5.4",
        ],
        body: {
            "username": "testing23@yopmail.com",
            "password": "testing23@yopmail.com",
            "woocommerce-login-nonce": "fa98dffbcb",
            "_wp_http_referer": "/my-account/",
            "login": "Login"
        },
    }).sendSync();

    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "https://practice.automationtesting.in/shop/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "referer": "https://practice.automationtesting.in/my-account/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/js/jquery.infinitescroll.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1",
            "https://practice.automationtesting.in/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.1",
            "https://practice.automationtesting.in/wp-includes/js/jquery/ui/slider.min.js?ver=1.13.1",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/jquery-ui-touch-punch/jquery-ui-touch-punch.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/price-slider.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Android-Quick-Start-Guide-600x600.png",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Functional-Programming-in-JS-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Mastering-HTML5-Forms-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/HTML5-Web-Application-Development-Beginners-guide-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Learning-JavaScript-Data-Structures-and-Algorith-600x600.jpg",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/js/themify.builder.script.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Android-Quick-Start-Guide-300x300.png",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Functional-Programming-in-JS-300x300.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Mastering-HTML5-Forms-300x300.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/HTML5-Web-Application-Development-Beginners-guide-300x300.jpg",
            "https://practice.automationtesting.in/wp-content/uploads/2017/01/Learning-JavaScript-Data-Structures-and-Algorith-300x300.jpg",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/wow.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/lightbox.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/themify.gallery.js?version=2.8.8",
        ],
    }).sendSync();

    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "https://practice.automationtesting.in/product/android-quick-start-guide/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "referer": "https://practice.automationtesting.in/shop/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/css/prettyPhoto.css?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.min.js?ver=3.1.6",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.init.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-includes/js/wp-emoji-release.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/themify-builder/js/themify.builder.script.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/lightbox.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/wow.js?version=2.8.8",
            "https://practice.automationtesting.in/wp-content/themes/themify-ultra/themify/js/themify.gallery.js?version=2.8.8",
        ],
    }).sendSync();
T03.stop();    
T05.start();
    const webResponse7 = new load.WebRequest({
        id: 7,
        url: "https://practice.automationtesting.in/my-account/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "referer": "https://practice.automationtesting.in/product/android-quick-start-guide/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
    }).sendSync();

    const webResponse8 = new load.WebRequest({
        id: 8,
        url: "https://practice.automationtesting.in/my-account/customer-logout/",
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "referer": "https://practice.automationtesting.in/my-account/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        resources: [
            "https://practice.automationtesting.in/wp-includes/js/zxcvbn-async.min.js?ver=1.0",
            "https://practice.automationtesting.in/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9",
            "https://practice.automationtesting.in/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0",
            "https://practice.automationtesting.in/wp-includes/js/dist/hooks.min.js?ver=c6d64f2cb8f5c6bb49caca37f8828ce3",
            "https://practice.automationtesting.in/wp-includes/js/dist/i18n.min.js?ver=ebee46757c6a411e38fd079a7ac71d94",
            "https://practice.automationtesting.in/wp-admin/js/password-strength-meter.min.js?ver=6.0.1",
            "https://practice.automationtesting.in/wp-content/plugins/woocommerce/assets/js/frontend/password-strength-meter.min.js?ver=2.6.14",
            "https://practice.automationtesting.in/wp-includes/js/zxcvbn.min.js",
        ],
    }).sendSync();
T05.stop();
});

load.finalize("Finalize", async function () {
});
