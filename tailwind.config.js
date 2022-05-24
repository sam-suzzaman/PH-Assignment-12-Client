module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                toolShopTheme: {
                    primary: "#005555",
                    secondary: "#069A8E",
                    accent: "#A1E3D8",
                    neutral: "#F7FF93",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
