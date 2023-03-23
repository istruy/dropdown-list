import { Language } from "../../types/language";

type ItemLanguageProps = {
    language: Language;
    onClick: () => void;
}

function ItemLanguage({ language, onClick }: ItemLanguageProps): JSX.Element {

    return (
        <li className="language-item" onClick={onClick}>
            <div className="language-description">
                <img className="language-image" src={language.image_url} alt="" />
                <div className="language-name">{language.name}</div>
            </div>
            <input type="checkbox" className="language-checkbox" name="language-checkbox" checked={language.checked} value={language.name} />
        </li>

    );
};

export default ItemLanguage;