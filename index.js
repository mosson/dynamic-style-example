'use strict';

import { StyleSheet, css } from 'aphrodite';

function main(name, style) {
  const styles = StyleSheet.create({
    [name]: style
  });

  const div = document.createElement('div');
  div.classList.add(css(styles[name]));
  div.innerHTML = "Hello, World";

  document.body.appendChild(div);
}

main('test', {
  backgroundColor: 'red'
});
main('test2', {
  backgroundColor: 'yellow'
});
