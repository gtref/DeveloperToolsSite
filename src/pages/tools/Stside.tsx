import Modal from "../../components/modal"
import { useState } from "react"

const features = [
    { name: "Works Offline",  satiscode: true, vscode: true},
    { name: "Telemetry", satiscode: false, vscode: true },
    { name: "AI Features", satiscode: false, vscode: true}
];

export default function SatisCode() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <h1>SatisCode</h1>
        <hr />
        <button className="button" onClick={() => setIsOpen(true)}>Features</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <p>SatisCode Features</p>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>Satiscode</th>
                        <th>vscode</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature) => (
                        <tr key={feature.name}>
                            <td>
                                {feature.name}
                            </td>
                            <td>
                                {feature.satiscode ? "✅" : "❌"}
                            </td>
                            <td>
                                {feature.vscode ? "✅" : "❌"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Modal>
        <br />
        <p>Satiscode is a simple extention free, fully offline IDE.</p>
        </>
    )
}