export type NeuralyzerLang = 'en' | 'ru';

export interface NeuralyzerConfig {
    message: string;
    duration: number;        // in ms
    cssClass: string;
    log: boolean;
    lang: NeuralyzerLang;
}

const MESSAGES: Record<NeuralyzerLang, string> = {
    en: 'There was no error.',
    ru: 'Не было никакой ошибки.',
};

const PHRASES: Record<NeuralyzerLang, string> = {
    en: `
💥 *FLASH*
😎 Please remove your glasses.
🧠 `,
    ru: `
💥 *ВСПЫШКА*
😎 Снимите очки.
🧠 `,
};

export class Neuralyzer {
    private static config: Required<Partial<NeuralyzerConfig>> = {
        message: MESSAGES.en,
        duration: 1000,
        cssClass: 'neuralyzer-flash',
        log: true,
        lang: 'en',
    };

    static configure(config: Partial<NeuralyzerConfig>) {
        // Use default message for lang if no message explicitly passed
        const lang = config.lang ?? this.config.lang;
        this.config = {
            ...this.config,
            ...config,
            message: config.message ?? MESSAGES[lang],
        };
    }

    static flash(customMessage?: string) {
        const { message, duration, cssClass, log, lang } = this.config;

        const flashEl: HTMLDivElement = document.createElement('div');
        flashEl.classList.add(cssClass);
        document.body.appendChild(flashEl);

        setTimeout(() => {
            flashEl.remove();
            if (log) {
                console.debug(`${PHRASES[lang]}${customMessage || message}`);
            }
        }, duration);
    }
}
