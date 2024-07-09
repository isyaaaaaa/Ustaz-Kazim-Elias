const fullHostname = window.location.hostname;
if (fullHostname.includes("mstar.com.my")) {
    const scriptEle = document.createElement('script');
    scriptEle.src = 'https://api.vodus.com/mediapartners/bannermodemstar.js?v=202402081244';
    document.head.appendChild(scriptEle);
} else {
    var vodusBuild = "2406211843";
    (function (v, o, d, u, s, a, m) {
        v['VodusObject'] = s;
        v[s] = v[s] || function () {
            (v[s].q = v[s].q || []).push(arguments)
        }, v[s].l = 1 * new Date();
        v['vodus']['build'] = vodusBuild;
        v['vodus']['partner_code'] = vodus["partner_code"];
        v['vodus']['interval'] = vodus["interval"];
        v['vodus']['language'] = vodus["language"];
        v['vodus']['modalClosable'] = vodus["modalClosable"];
        v['vodus']['questionModalDelay'] = vodus["delay"];
        v['vodus']['ctcTimer'] = vodus["ctc-timer"];
        v['vodus']['ctcInterval'] = vodus["ctc-interval"];
        v['vodus']['minSessionCount'] = vodus["minSessionCount"];
        v['vodus']['noDemo'] = vodus["noDemo"];
        v['vodus']['ccType'] = vodus["ccType"];
        v['vodus']['dailyAllowance'] = vodus["dailyAllowance"];
        v['vodus']['notificationPosition'] = vodus["notificationPosition"];
        v['vodus']['ccType'] = vodus["ccType"];
        v['vodus']['demographicCCType'] = vodus["demographic-cc-type"];
        v['vodus']['demographicCTCTimer'] = vodus["demographic-ctc-timer"];
        v['vodus']['demographicInterval'] = vodus["demographic-interval"];
        v['vodus']['dmpUrl'] = vodus["dmp-url"];
        v['vodus']['dmpType'] = vodus["dmp-type"];
        v['vodus']['dmpCode'] = vodus["dmp-code"];
        v['vodus']['dmpTarget'] = vodus["dmp-target"];
        v['vodus']['catfishPosition'] = vodus["catfish-position"];
        v['vodus']['ccPageScrollTrigger'] = vodus["cc-scroll-trigger"];
        v['vodus']['bannerMode'] = vodus["banner-mode"];
        v['vodus']['intervalBannerMode'] = vodus["interval-banner-mode"];
        v['vodus']['isSurveyFallbackScript'] = vodus["is-survey-fallback-script"];
        v['vodus']['GAMAdUnitId'] = vodus['gam-ad-unit-id'];
        v['vodus']['insideIframe'] = vodus["inside-iframe"];
        v['vodus']['stoAfterTotalNoResponse'] = vodus["stoAfterTotalNoResponse"];
        v['vodus']['env'] = "live";
        var existingScript = o.querySelector('script[src="' + u + '"]');
        if (existingScript) {
            return;
        }
        a = o.createElement(d), m = o.getElementsByTagName(d)[0];
        a.async = 1;
        a.src = u;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script',
        'https://cdn.jsdelivr.net/gh/vodus-ai/api@latest/240614-vodus-main.js?buildId=' + vodusBuild, 'vodus');
}