import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
    language: string;
    code: string;
};

function CodeBlock({ language, code }: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            language={language}
            style={oneDark}
        >
            {code}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;