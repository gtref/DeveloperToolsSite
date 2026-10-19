import { NavLink } from "react-router-dom";

const tools = [
    { name: "SatisCode IDE", slug: "StsIde" }
];

export default function Tools() {
    return (
        <>
            <h1>Tools I recommend</h1>
            <hr />
            <ul>
                {tools.map((tool => (
                    <li key={tool.slug}>
                        <NavLink to={`/pages/tools/${tool.slug}`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            {tool.name}
                        </NavLink>
                    </li>
                )))}
            </ul>
        </>
    )
}