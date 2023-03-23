import { useEffect, useState } from "react";
import { Language } from "../../types/language";
import SelectLabel from "../item-label/item-label";
import ItemLanguage from "../item-language/item-language";
import Search from "../search/search";
import styles from "./dropdown-list.module.css";

type DropdownListProps = {
    languages: Language[];
}

function DropdownList({ languages }: DropdownListProps): JSX.Element {
    const [allLanguages, setAllLanguages] = useState<Language[]>(languages);
    const [searchableLanguages, setSearchableLanguages] = useState<string[]>(allLanguages.map(item => item.name));

    const pushOrDeleteItemFromLanguages = (item: Language) => {
        setAllLanguages(allLanguages.map((element) => element.id === item.id ? { ...element, checked: !element.checked } : element));
    }

    useEffect(() => {
        setAllLanguages(allLanguages);
    }, [allLanguages]);

    const deleteLanguageLabel = (item: Language) => {
        setAllLanguages(allLanguages.map((element) => element.id === item.id ? { ...element, checked: !element.checked } : element));
    }

    const getLanguageByInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = evt.target.value;
        setSearchableLanguages(allLanguages.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => item.name));
    }

    return (
        <div className="dropdown">
            <div className="dropdown-header">Язык</div>


            <div className="select">
                <div className="select-wrapper">

                    {allLanguages.filter((item) => item.checked).map((item) => <SelectLabel key={item.id} onClick={() => deleteLanguageLabel(item)} languageName={item.name} />)}

                    <div className="open-button-container">
                        <button className="open-button">
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="languages">
                    <Search onInput={getLanguageByInput} />
                    <ul className="language-list">
                        {allLanguages.filter((item) => searchableLanguages.includes(item.name)).map((item) => <ItemLanguage onClick={() => pushOrDeleteItemFromLanguages(item)} key={item.id} language={item} />)}
                    </ul>
                </div>
            </div>
        </div>);
};

export default DropdownList;