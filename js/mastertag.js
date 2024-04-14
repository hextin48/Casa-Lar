if(!window.sdkInitialized) {
    window.sdkInitialized = true;
    (function (i, s, o, g, r, a, m) {
        i['SocialMinerObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = !!1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://plugins.soclminer.com.br/mastertag/allminer.js', 'SM');

    SM('create', 'e85cb000-8278-4da9-83d8-ee04b934e7e5');
    SM('send', 'pageview');
}