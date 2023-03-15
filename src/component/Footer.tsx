import React from "react";
import {t} from "i18next";

function Footer () {
    return (
        <footer>
            <ul className="invisible-ul">
                <li><a href="/" className="invisible-a">{t('contact')}</a></li>
                <li><a href="/" className="invisible-a">{t('legals')}</a></li>
            </ul>
        </footer>
    );
}

export default Footer;