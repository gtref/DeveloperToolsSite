import { Link } from 'react-router-dom'
import CodeBlock from '../../components/codeblock'
import { useState } from "react";

const cExampleOne = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;
function C() {
  const [isExampleOneOpen, setIsExampleOneOpen] = useState(false)

  return (
    <>
      <h1>C</h1>
      <p>Learn the fundamentals of C programming.</p>
      <hr />
      <section className="code-example">
        <button
          className="code-example-toggle"
          type="button"
          aria-expanded={isExampleOneOpen}
          aria-controls="c-example-one"
          onClick={() => setIsExampleOneOpen((isOpen) => !isOpen)}
        >
          Example One
          <span aria-hidden="true">{isExampleOneOpen ? '−' : '+'}</span>
        </button>
        {isExampleOneOpen && (
          <div id="c-example-one" className="code-example-content">
            <CodeBlock language="c" code={cExampleOne} />
            <p>
              In this example we include the standard input output C library and use the built in{' '}
              <i>printf</i> function to display a message.
            </p>
          </div>
        )}
      </section>
      <p><Link to="/learn">Back to languages</Link></p>
    </>
  )
}

export default C
