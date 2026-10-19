import { Link } from 'react-router-dom'
import CodeBlock from '../../components/codeblock'

const cExampleOne = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;
function C() {
  return (
    <>
      <h1>C</h1>
      <p>Learn the fundamentals of C programming.</p>
      <hr />
      <CodeBlock language="c" code={cExampleOne} />
      <p>In this example we include the standard input output C library and use the built in <i>printf</i> function to display a message.</p>
      <p><Link to="/learn">Back to languages</Link></p>
    </>
  )
}

export default C
