import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
menu,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
body {
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  background: #F6F6F6;
}
textarea:focus,
input:focus {
  outline: none;
}
`;

export const Container = styled.div`
  margin: 10px auto 0;
  height: 100%;
  overflow: hidden;
  @media (min-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
