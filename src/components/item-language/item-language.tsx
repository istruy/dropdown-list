import { Language } from "../../types/language";
import styles from './item-language.module.css';

type ItemLanguageProps = {
    language: Language;
    onClick: () => void;
}

function ItemLanguage({ language, onClick }: ItemLanguageProps): JSX.Element {

    return (
        <li className={styles.languageItem}>
            <div className={styles.languageDescription}>
                <img src={language.image_url} alt="" />
                <div>{language.name}</div>
            </div>
            <input type="checkbox" className={styles.languageCheckbox} name="language-checkbox" checked={language.checked} value={language.name} onChange={onClick} />
        </li>

    );
};

export default ItemLanguage;