import { NavLink } from "react-router-dom";

const languages = [
    { name: "JavaScript", slug: "javascript" },
    { name: "Python", slug: "python" },
    { name: "HTML", slug: "html" },
    { name: "C", slug: "c" },
    { name: "C++", slug: "cpp" }
];

function Learn() {
    return (
        <>
        <h1>Languages we teach</h1>
        <ul>
            {languages.map((language) => (
                <li key={language.slug}>
                    <NavLink to={`/pages/languages/${language.slug}`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        {language.name}
                    </NavLink>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Learn