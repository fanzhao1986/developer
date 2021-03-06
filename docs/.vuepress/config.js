module.exports = {
    base: "/",
    title: "Reactive Markets Developer",
    description: "Develop for the Reactive Markets Platform",
    head: [
        ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
        ["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#4A90E2" }],
        ["meta", { name: "theme-color", content: "#4A90E2" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
    ],
    plugins: [
        "@vuepress/active-header-links",
        "@vuepress/back-to-top",
        "@vuepress/medium-zoom",
        "@vuepress/nprogress",
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ],
    themeConfig: {
        docsDir: "docs",
        editLinks: true,
        lastUpdated: "Last Updated",
        logo: "/favicon-64.png",
        nav: [
            {
                text: "API",
                link: "/api/",
            },
            {
                text: "WebSocket",
                link: "/websocket/",
            },
            {
                text: "FlatBuffers",
                link: "/flatbuffers/",
                items: [
                    {
                        text: "Install",
                        link: "/flatbuffers/install/",
                    },
                    {
                        text: "Schema",
                        link: "/flatbuffers/schema/",
                    },
                ]
            },
            {
                text: "SDK",
                items: [
                    { text: "Java", link: "/sdk/java/" },
                    { text: "JavaScript", link: "/sdk/js/" },
                    { text: "Python", link: "/sdk/py/" }
                ]
            },
            {
                text: "Pricing",
                link: "/pricing/",
            },
        ],
        repo: "reactivemarkets/developer",
        sidebar: "auto",
        smoothScroll: true,
    },
}
