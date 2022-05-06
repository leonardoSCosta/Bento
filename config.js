// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘

    // General
    name: 'Leo',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: false,

    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',

    // Layout
    bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

    // Weather
    weatherKey: '85e2bc6bf003096c495673c7448e3699', // Write here your API Key
    weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'F', 'C'
    language: 'pt_br', // More languages in https://openweathermap.org/current#multi

    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '-23.550520',
    defaultLongitude: '-46.633308',

    // Autochange
    autoChangeTheme: false,

    // Autochange by OS
    changeThemeByOS: false,

    // Autochange by hour options (24hrs format, string must be in: hh:mm)
    changeThemeByHour: false,
    hourDarkThemeActive: '18:30',
    hourDarkThemeInactive: '07:00',

    // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
    // ├┴┐│ │ │  │ │ ││││└─┐
    // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

    firstButtonsContainer: [
        {
            id: '1',
            name: 'Whatsapp',
            icon: 'message-circle',
            link: 'https://web.whatsapp.com',
        },
        {
            id: '2',
            name: 'Gmail',
            icon: 'mail',
            link: 'https://mail.google.com/mail/u/0/#inbox',
        },
        {
            id: '3',
            name: 'Uphold',
            icon: 'bitcoin',
            link: 'https://wallet.uphold.com/dashboard',
        },
        {
            id: '4',
            name: 'MEI',
            icon: 'landmark',
            link: 'http://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/emissao',
        },
        {
            id: '5',
            name: 'Facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com',
        },
        {
            id: '6',
            name: 'FEI',
            icon: 'graduation-cap',
            link: 'https://posgrad.fei.edu.br/',
        },
    ],

    secondButtonsContainer: [
        {
            id: '1',
            name: 'Music',
            icon: 'headphones',
            link: 'https://open.spotify.com',
        },
        {
            id: '2',
            name: 'twitter',
            icon: 'twitter',
            link: 'https://twitter.com/',
        },
        {
            id: '3',
            name: 'bot',
            icon: 'bot',
            link: 'https://discord.com/app',
        },
        {
            id: '4',
            name: 'Amazon',
            icon: 'shopping-bag',
            link: 'https://amazon.com/',
        },
        {
            id: '5',
            name: 'Hashnode',
            icon: 'pen-tool',
            link: 'https://hashnode.com/',
        },
        {
            id: '6',
            name: 'Figma',
            icon: 'figma',
            link: 'https://figma.com/',
        },
    ],

    // ┬  ┬┌─┐┌┬┐┌─┐
    // │  │└─┐ │ └─┐
    // ┴─┘┴└─┘ ┴ └─┘

    // First Links Container
    firstlistsContainer: [
        {
            icon: 'cast',
            id: '1',
            links: [
                {
                    name: 'Twitch',
                    link: 'https://twitch.tv',
                },
                {
                    name: 'Youtube',
                    link: 'https://www.youtube.com',
                },
                {
                    name: 'Netflix',
                    link: 'https://www.netflix.com/browse',
                },
                {
                    name: 'Prime',
                    link: 'https://www.primevideo.com',
                },
            ],
        },
        {
            icon: 'coffee',
            id: '2',
            links: [
                {
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com',
                },
                {
                    name: 'Github',
                    link: 'https://www.github.com',
                },
                {
                    name: 'Gitlab',
                    link: 'https://www.gitlab.com',
                },
                {
                    name: 'Slack',
                    link: 'https://www.slack.com',
                },
            ],
        },
    ],

    // Second Links Container
    secondListsContainer: [
        {
            icon: 'binary',
            id: '1',
            links: [
                {
                    name: 'Spotify',
                    link: 'https://www.spotify.com',
                },
                {
                    name: 'Reddit',
                    link: 'https://www.reddit.com',
                },
                {
                    name: 'Hashnode',
                    link: 'https://www.hashnode.com',
                },
                {
                    name: 'Pocket',
                    link: 'https://www.pocket.com',
                },
            ],
        },
        {
            icon: 'github',
            id: '2',
            links: [
                {
                    name: 'Front',
                    link: 'https://www.reddit.com/r/Frontend/',
                },
                {
                    name: 'Rust',
                    link: 'https://www.reddit.com/r/rust/',
                },
                {
                    name: 'Go',
                    link: 'https://www.reddit.com/r/golang/',
                },
                {
                    name: 'Repos',
                    link: 'https://github.com/migueravila',
                },
            ],
        },
    ],
};
