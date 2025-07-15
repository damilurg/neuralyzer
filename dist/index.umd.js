(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Neuralyzer = factory());
})(this, (function () { 'use strict';

    const MESSAGES = {
        en: 'There was no error.',
        ru: 'Не было никакой ошибки.',
    };
    const PHRASES = {
        en: `
💥 *FLASH*
😎 Please remove your glasses.
🧠 `,
        ru: `
💥 *ВСПЫШКА*
😎 Снимите очки.
🧠 `,
    };
    class Neuralyzer {
        static configure(config) {
            var _a, _b;
            // Use default message for lang if no message explicitly passed
            const lang = (_a = config.lang) !== null && _a !== void 0 ? _a : this.config.lang;
            this.config = Object.assign(Object.assign(Object.assign({}, this.config), config), { message: (_b = config.message) !== null && _b !== void 0 ? _b : MESSAGES[lang] });
        }
        static flash(customMessage) {
            const { message, duration, cssClass, log, lang } = this.config;
            const flashEl = document.createElement('div');
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
    Neuralyzer.config = {
        message: MESSAGES.en,
        duration: 1000,
        cssClass: 'neuralyzer-flash',
        log: true,
        lang: 'en',
    };

    return Neuralyzer;

}));
