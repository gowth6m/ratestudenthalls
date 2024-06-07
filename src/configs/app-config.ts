export const AppConfig = {
    version: "0.0.1",
    stage: "dev",
    metadata: {
        title: "Rate Student Halls",
        description:
            "Rate your student halls and help others make the right choice!",
        icon: "/logo/logo_circle.svg",
        keywords:
            "student, halls, accommodation, review, rate, university, college",
        manifest: "/manifest.json",
    },
    assets: {
        icons: [],
    },
    localStorageKeys: {
        settings: "rate-student-halls-settings",
        auth: "rate-student-halls-auth",
        cart: "rate-student-halls-cart",
    },
};
